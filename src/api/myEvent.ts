import EventEmitter from 'events';

export const eventBus = new EventEmitter();

const EventList = ['DeniedRequest', 'AuthTokenSuccess'] as const;

// eslint-disable-next-line no-new-func
const eventsServer = new Function();

eventsServer.prototype.parseEvent = function (
  name: string,
  eventMap: string[]
) {
  // eslint-disable-next-line
  const obj: any = (this[name] = {});
  eventMap.forEach((item) => {
    const eventName = item.toLocaleUpperCase();
    obj[item] = {
      emit: this.emit.bind(this, eventName),
      addListener: this.addListener.bind(this, eventName),
      name: eventName,
    };
  });
};

eventsServer.prototype.emit = function (
  eventType: string,
  ...params: unknown[]
) {
  eventBus.emit(eventType, ...params);
};
eventsServer.prototype.addListener = function (
  eventType: string,
  listener: (data: unknown) => void
) {
  const cListener = eventBus.addListener(eventType, listener);
  return {
    ...cListener,
    remove: () => eventBus.removeListener(eventType, listener),
  };
};

eventsServer.prototype.parseEvent('base', EventList);

export type MyEventEmitter = {
  remove: () => void;
} & EventEmitter;

export type MyEventsTypes = {
  [x in (typeof EventList)[number]]: {
    emit: (...params: unknown[]) => void;
    addListener: (listener: (data: unknown) => void) => MyEventEmitter;
    name: string;
  };
};

const myEvents = { ...eventsServer.prototype.base };

export default myEvents as unknown as MyEventsTypes;
