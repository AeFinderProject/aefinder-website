import clsx from 'clsx';
import { DEVICE_TYPE } from '@/constants/enum';
import AndroidDownloadButton from '@/components/DownloadButtons/AndroidDownloadButton';
import GoDownloadPageButton from '@/components/DownloadButtons/GoDownloadPageButton';
import IOSDownloadButton from '@/components/DownloadButtons/IOSDownloadButton';
import WebChromeDownloadButton from '@/components/DownloadButtons/WebChromeDownloadButton';
import OtherDownloadButton from '@/components/DownloadButtons/OtherDownloadButton';
import { CSSProperties } from 'react';
import styles from './styles.module.scss';

export type DownloadButtonGroupProps = {
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly type: DEVICE_TYPE;
  readonly iosStoreUrl?: string;
  readonly androidStoreUrl?: string;
  readonly chromeStoreUrl?: string;
  readonly otherDownloadUrl?: string;
  readonly goDownloadPageUrl?: string;
  readonly downloadPageBtnClassName?: string;
};

export type WebChromeButtonGroupProps = {
  readonly downloadPageBtnClassName?: string;
  readonly storeUrl: string;
  readonly goDownloadPageUrl?: string;
};

function WebChromeButtonGroup({ downloadPageBtnClassName, storeUrl, goDownloadPageUrl }: WebChromeButtonGroupProps) {
  return (
    <>
      <WebChromeDownloadButton storeUrl={storeUrl} />
      {goDownloadPageUrl && (
        <GoDownloadPageButton downloadPageBtnClassName={downloadPageBtnClassName} url={goDownloadPageUrl} />
      )}
    </>
  );
}

export default function DownloadButtonGroup(props: DownloadButtonGroupProps) {
  const {
    className,
    style,
    type,
    downloadPageBtnClassName,
    chromeStoreUrl,
    iosStoreUrl,
    androidStoreUrl,
    goDownloadPageUrl,
    otherDownloadUrl,
  } = props;

  return (
    <div className={clsx([styles.DownloadBtnGroup, className])} style={style}>
      {type === DEVICE_TYPE.WebChrome && chromeStoreUrl && (
        <WebChromeButtonGroup
          downloadPageBtnClassName={downloadPageBtnClassName ?? ''}
          storeUrl={chromeStoreUrl}
          goDownloadPageUrl={goDownloadPageUrl}
        />
      )}
      {type === DEVICE_TYPE.WebNotChrome && otherDownloadUrl && <OtherDownloadButton url={otherDownloadUrl} />}
      {type === DEVICE_TYPE.IOS && iosStoreUrl && <IOSDownloadButton storeUrl={iosStoreUrl} />}
      {type === DEVICE_TYPE.Android && androidStoreUrl && <AndroidDownloadButton storeUrl={androidStoreUrl} />}
    </div>
  );
}
