import * as React from 'react';

import { Hello } from './Hello';

interface HomeProps {

}

export class Home extends React.Component<HomeProps,{}> {
  render() {
    return (
      <Hello name="Coding Sans" />
    );
  }
}
