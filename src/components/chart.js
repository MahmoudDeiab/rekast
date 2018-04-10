import React from 'react';
import { LineChart, Line, Tooltip } from 'recharts'
export default (props) => {
  console.log(props);
  return (
    <div>
      <LineChart width={props.width} height={props.height} data={props.data}>
        <Line type={props.lineType} dataKey={props.dataKey} stroke={props.strokeColor} strokeWidth={props.strokeWidth} />
      </LineChart>
    </div>
  );
}
