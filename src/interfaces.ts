export interface ILinearScalePoint {
  x: number;
  y: number;
}

export interface ITimeScalePoint {
  x: Date;
  y: number;
}

export type ChartData = ILinearScalePoint[] | ITimeScalePoint[];

export interface IDimensions {
  width: number;
  height: number;
}

export enum ScaleDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

export interface IChartMargin {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}
