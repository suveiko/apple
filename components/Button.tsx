import { FC } from 'react';

interface IProps {
  title: string;
}

export const Button: FC<IProps> = ({ title }) => {
  return <div>{title}</div>;
};
