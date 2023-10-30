import {config} from '@/config';
import { StackedBarChartProps } from '@/types';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

export default function StackedBarChart(props: StackedBarChartProps) {

  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={props.energyData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey='monthName'
          tick={{fill: 'white'}}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{fill: 'white'}}
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar
          dataKey='wind'
          stackId='a'
          fill={config.colors.energyKinds.wind}
          fillOpacity='1'
          animationDuration={1500}
        />
        <Bar
          dataKey='solar'
          stackId='a'
          fill={config.colors.energyKinds.solar}
          fillOpacity='1'
          animationDuration={1500}
        />
        <Bar
          dataKey='water'
          stackId='a'
          fill={config.colors.energyKinds.water}
          fillOpacity='1'
          animationDuration={1500}
        />
        <Bar
          dataKey='other'
          stackId='a'
          fill={config.colors.energyKinds.other}
          fillOpacity='1'
          animationDuration={1500}
        />
        <ReferenceLine y={25} stroke='black' strokeDasharray='3 3' />
        <ReferenceLine y={50} stroke='black' strokeDasharray='3 3' />
        <ReferenceLine y={75} stroke='black' strokeDasharray='3 3' />
      </BarChart>
    </ResponsiveContainer>
  );
}
