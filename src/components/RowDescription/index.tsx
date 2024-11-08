import clsx from 'clsx';
import CommonImage from '@/components/CommonImage';
import styles from './styles.module.scss';
import { DescriptionComponent } from '@/types/components/description';

export interface RowDescriptionProps {
  readonly iconSrc?: string;
  readonly iconWidth?: number;
  readonly iconHeight?: number;
  readonly gap?: number;
  readonly content: string;
  readonly contentSize?: number;
  readonly contentColor?: string;
  readonly className?: string;
  readonly subContentList?: Array<DescriptionComponent>;
  readonly multiLayer?: boolean;
  readonly isLast: boolean;
}

export default function RowDescription(props: RowDescriptionProps) {
  const {
    iconSrc = '',
    iconWidth = 24,
    iconHeight = 24,
    gap = 16,
    content = '',
    contentSize,
    contentColor,
    className,
    subContentList,
    multiLayer = false,
    isLast = false,
  } = props;

  let marginBottom;

  if (isLast) {
    marginBottom = '0';
  } else {
    marginBottom = multiLayer ? '40px' : '16px';
  }

  return (
    <div className={clsx([styles.rowDescription, className])} style={{ marginBottom }}>
      {iconSrc && (
        <CommonImage
          src={iconSrc}
          style={{ minWidth: iconWidth, minHeight: iconHeight, marginRight: gap }}
          alt="descriptionIcon"
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {Array.isArray(subContentList) && subContentList.length > 0 ? (
        <SecondaryList content={content} subContentList={subContentList} />
      ) : (
        <div className={multiLayer ? styles.title : ''} style={{ fontSize: contentSize, color: contentColor }}>
          {content}
        </div>
      )}
    </div>
  );
}

function SecondaryList({
  content,
  subContentList,
}: {
  readonly content: string;
  readonly subContentList: Array<DescriptionComponent>;
}) {
  return (
    <div className={styles.secondaryList}>
      <div className={styles.title}>{content}</div>
      {subContentList.map((item, index) => {
        return <div className={styles.desc} key={index}>{`${item.text}`}</div>;
      })}
    </div>
  );
}
