import * as React from 'react';

interface IHelloProps {
  name: string;
}

export class Hello extends React.Component<IHelloProps, {}> {
  public render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}
