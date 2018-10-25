import * as React from 'react';
import { line } from 'd3-shape';
import { ChartData, IChartMargin } from 'src/interfaces';

interface IProps {
  data: ChartData;
  xAccessor?: string;
  xScale?: (value: Date | number) => number;
  yScale?: (value: Date | number) => number;
  yAccessor?: string;
  className?: any;
  margin: IChartMargin;
}

export class Line extends React.Component<IProps, {}> {
  get path(): any {
    const identity = (el: any) => el;
    const {
      xAccessor = 'x',
      xScale = identity,
      yAccessor = 'y',
      yScale = identity
    } = this.props;

    return line()
      .x((d: any) => xScale(d[xAccessor]))
      .y((d: any) => yScale(d[yAccessor]));
  }

  render() {
    const { className, margin } = this.props;
    const transform = `translate(${margin.left || 0}, ${margin.top || 0})`;
    return (
      <g transform={transform}>
        <path className={className} d={this.path(this.props.data)} />
      </g>
    );
  }
}
