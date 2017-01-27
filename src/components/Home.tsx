import * as React from 'react';

import { Hello } from './Hello';

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <Hello name='Coding Sans' />
    );
  }
}
