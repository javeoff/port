import { FC, ReactElement } from 'react';

interface IProps {
  children: string | ReactElement | ReactElement[];
}

export const Button: FC<IProps> = ({ children }) => <div>{children}</div>;
