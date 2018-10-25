import * as React from 'react';
import { axisLeft, AxisScale, axisBottom } from 'd3-axis';
import { select } from 'd3';
import { ScaleDirection, IDimensions, IChartMargin } from 'src/interfaces';

interface IProps {
  scale: AxisScale<number | Date>;
  direction: ScaleDirection;
  dimensions: IDimensions;
  margin: IChartMargin;
  className?: any;
  ticks?: any;
}

export class Axis extends React.Component<IProps, {}> {
  axisRef: any = React.createRef();

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { ticks = 4 } = this.props;
    const axis: any = this.getAxis();

    if (axis) {
      select(this.axisRef.current).call(axis.ticks(ticks));
    }
  }

  getAxis() {
    const { scale, direction } = this.props;

    return direction === ScaleDirection.Vertical
      ? axisLeft(scale)
      : axisBottom(scale);
  }

  render() {
    const { height } = this.props.dimensions;
    const { margin, direction } = this.props;

    const transform =
      direction === ScaleDirection.Vertical
        ? `translate(${margin.left || 0}, ${margin.top!})`
        : `translate(${margin.left || 0}, ${height - margin.bottom! || 0})`;
    return <g ref={this.axisRef} transform={transform} />;
  }
}
