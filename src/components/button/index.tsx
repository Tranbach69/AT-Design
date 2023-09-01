import clsx from 'clsx';
import { ReactNode, MouseEventHandler, CSSProperties } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  className?: string;
  type?: string;
}

export default function Button({ children, onClick, style, type }: ButtonProps) {
  return (
    <div>
      <button
        className={clsx({
          [styles.atButton]: true,
          [styles.primary]: type === 'primary',
          [styles.secondary]: type === 'secondary',
          [styles.success]: type === 'success',
          [styles.danger]: type === 'danger',
          [styles.warning]: type === 'warning',
          [styles.info]: type === 'info',
          [styles.light]: type === 'light',
          [styles.dark]: type === 'dark',
        })}
        onClick={onClick}
        style={style} // Use the style prop
      >
        {children}
      </button>
    </div>
  );
}
