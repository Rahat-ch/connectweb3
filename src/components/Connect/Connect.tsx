import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Connect: FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>
    {children}
  </button>
);

export default Connect;
