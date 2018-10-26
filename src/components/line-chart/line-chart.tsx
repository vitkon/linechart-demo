import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

export class LineChart extends React.Component<IProps, {}> {
  render() {
    return (
      <svg width="600" height="300">
        {this.props.children}
      </svg>
    );
  }
}
