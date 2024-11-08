import Link from 'next/link';
import { ReactNode } from 'react';

interface ILinkForBlankProps {
  readonly href: string;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly element?: ReactNode;
}
export default function LinkForBlank({ href, className, ariaLabel, element }: ILinkForBlankProps) {
  return (
    <Link href={href} passHref className={className} target="_blank" aria-label={ariaLabel} rel="noopener noreferrer">
      {element}
    </Link>
  );
}
