import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

export class LineChart extends React.Component<IProps, {}> {
  render() {
    return <svg>{this.props.children}</svg>;
  }
}
