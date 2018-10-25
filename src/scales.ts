import { IDimensions, ScaleDirection, IChartMargin } from './interfaces';
import { scaleLinear, scaleTime } from 'd3-scale';
import { max, min } from 'd3-array';

const getAccessor = (direction: ScaleDirection) =>
  direction === ScaleDirection.Vertical ? 'y' : 'x';
const getRange = (
  { width, height }: IDimensions,
  direction: ScaleDirection,
  { left, bottom, top, right }: IChartMargin
) =>
  direction === ScaleDirection.Vertical
    ? [height - bottom! - top!, 0]
    : [0, width - left! - right!];

const getDomain = <T>(data: T[], direction: ScaleDirection) => {
  const accessor = getAccessor(direction);
  const dataMax = max(data, (d: T) => d[accessor]);
  const dataMin = min(data, (d: T) => d[accessor]);

  if (dataMin && dataMax) {
    return [dataMin, dataMax];
  }

  return undefined;
};

export const getLinearScale = <T>(
  data: T[],
  chartDimensions: IDimensions,
  direction: ScaleDirection,
  margin: IChartMargin
) => {
  const domain = getDomain<T>(data, direction);
  const range = getRange(chartDimensions, direction, margin);

  return scaleLinear()
    .domain(domain!)
    .range(range);
};

export const getTimeScale = <T>(
  data: T[],
  chartDimensions: IDimensions,
  direction: ScaleDirection,
  margin: IChartMargin
) => {
  const domain = getDomain(data, direction);
  const range = getRange(chartDimensions, direction, margin);

  return scaleTime()
    .domain(domain!)
    .range(range);
};
