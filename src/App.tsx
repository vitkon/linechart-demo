import * as React from 'react';
import * as styles from './App.module.css';
import { Line } from './components/line/line';
import { getLinearScale, getTimeScale } from './scales';
import { ScaleDirection, IChartMargin } from './interfaces';
import { LineChart } from './components/line-chart/line-chart';
import { Axis } from './components/axis/axis';

import * as dataJson from './data.json';

console.log(dataJson.default);

const data = dataJson.default.map((el: any) => ({
  x: new Date(el.x),
  y: el.y
}));

// const data1 = [
//   { x: new Date('2018-01-23'), y: 10 },
//   { x: new Date('2018-05-23'), y: 15 },
//   { x: new Date('2018-10-23'), y: 10 }
// ];

// const data2 = [
//   { x: new Date('2018-03-23'), y: 20 },
//   { x: new Date('2018-07-23'), y: 5 },
//   { x: new Date('2018-09-23'), y: 12 }
// ];

// const getComposedData = (...args: any[]) => {
//   return args.reduce((prev, cur) => {
//     return prev.concat(cur);
//   }, []);
// };

// const data = getComposedData(data1, data2);

const dimensions = { width: 600, height: 300 };

const margin: IChartMargin = {
  bottom: 20,
  left: 20,
  right: 5,
  top: 5
};

const xScale = getTimeScale(
  data,
  dimensions,
  ScaleDirection.Horizontal,
  margin
);

const yScale = getLinearScale(
  data,
  dimensions,
  ScaleDirection.Vertical,
  margin
);
class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <h1>chart demo</h1>
        <LineChart>
          <Line
            data={data}
            xScale={xScale}
            yScale={yScale}
            className={styles.chart}
            margin={margin}
          />
          <Axis
            scale={xScale}
            direction={ScaleDirection.Horizontal}
            dimensions={dimensions}
            margin={margin}
            ticks={6}
          />
          <Axis
            scale={yScale}
            direction={ScaleDirection.Vertical}
            dimensions={dimensions}
            margin={margin}
          />
        </LineChart>
      </div>
    );
  }
}

export default App;
