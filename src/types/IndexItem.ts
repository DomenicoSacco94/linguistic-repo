import { ReactElement } from 'react';

export interface IndexItem {
  title: string;
  path: string;
  component: ReactElement;
  hide?: boolean;
}
