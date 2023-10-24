import {config} from '@/config';
import React, {PureComponent} from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const data = [
  {
    month: '2015.01',
    wind: 3500, // Consistent energy generation
    solar: 1200, // Lower in winter
    water: 2500, // Stable
    other: 5000, // High due to heating needs in winter
  },
  {
    month: '2015.02',
    wind: 3600,
    solar: 1300,
    water: 2400,
    other: 4800,
  },
  {
    month: '2015.03',
    wind: 3800,
    solar: 1800, // Spring begins
    water: 2350,
    other: 4500,
  },
  {
    month: '2015.04',
    wind: 3900,
    solar: 2500, // Spring
    water: 2300,
    other: 4000,
  },
  {
    month: '2015.05',
    wind: 3700,
    solar: 3200, // Approaching summer
    water: 2300,
    other: 3400,
  },
  {
    month: '2015.06',
    wind: 3600,
    solar: 4000, // Summer begins
    water: 2300,
    other: 3100,
  },
  {
    month: '2015.07',
    wind: 3500,
    solar: 4200, // Peak summer
    water: 2300,
    other: 2900,
  },
];

const toPercent = (decimal: number) => {
  return `${(decimal * 100).toFixed(0)}%`;
};

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/percent-stacked-area-chart-pelcs';

  render() {
    return (
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={data}
          stackOffset='expand'
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey='month'
            tickFormatter={(dateString: string) => MONTHS[parseInt(dateString.split('.')[1]) - 1]}
            padding={{left: 10}}
            tick={{fill: 'white'}}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={toPercent}
            tick={{fill: 'white'}}
            padding={{bottom: 10}}
            axisLine={false}
            tickLine={false}
          />

          <Area
            type='monotone'
            dataKey='wind'
            stackId='1'
            stroke={config.colors.energyKinds.wind}
            fill={config.colors.energyKinds.wind}
            fillOpacity='1'
          />
          <Area
            type='monotone'
            dataKey='solar'
            stackId='1'
            stroke={config.colors.energyKinds.solar}
            fill={config.colors.energyKinds.solar}
            fillOpacity='1'
          />
          <Area
            type='monotone'
            dataKey='water'
            stackId='1'
            stroke={config.colors.energyKinds.water}
            fill={config.colors.energyKinds.water}
            fillOpacity='1'
          />
          <Area
            type='monotone'
            dataKey='other'
            stackId='1'
            stroke={config.colors.energyKinds.other}
            fill={config.colors.energyKinds.other}
            fillOpacity='1'
          />

          <ReferenceLine x='2015.02' stroke='black' strokeDasharray='3 3' />
          <ReferenceLine x='2015.03' stroke='black' strokeDasharray='3 3' />
          <ReferenceLine x='2015.04' stroke='black' strokeDasharray='3 3' />
          <ReferenceLine x='2015.05' stroke='black' strokeDasharray='3 3' />
          <ReferenceLine x='2015.06' stroke='black' strokeDasharray='3 3' />
          <ReferenceLine y={0.25} stroke='black' strokeDasharray='3 3' />
          <ReferenceLine y={0.5} stroke='black' strokeDasharray='3 3' />
          <ReferenceLine y={0.75} stroke='black' strokeDasharray='3 3' />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
