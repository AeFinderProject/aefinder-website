import { Button } from 'antd';
import styles from './styles.module.scss';
import { CSSProperties } from 'react';
import clsx from 'clsx';
export type CommonButtonProps = {
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly fontColor?: string;
  readonly backgroundColor?: string;
  readonly borderColor?: string;
  readonly width?: string | number;
  readonly text: string;
  readonly onClick?: () => void;
};

export default function CommonButton({
  className,
  style,
  text,
  fontColor,
  backgroundColor,
  borderColor,
  onClick,
  width,
}: CommonButtonProps) {
  return (
    <Button
      className={clsx(styles.commonButton, className)}
      style={{ ...style, color: fontColor, backgroundColor: backgroundColor, borderColor: borderColor, width }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
