import {config} from '@/config';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const rawData = [
  {
    month: 'Jan',
    solar: 1000, // Reduced solar due to lower sunlight hours
    wind: 800, // Adjusted wind energy production
    other: 6000, // Estimated other energy sources
    water: 1200, // Adjusted water energy production
  },
  {
    month: 'Feb',
    solar: 1100, // Slight increase in solar energy due to longer days
    wind: 850, // Slight increase in wind energy
    other: 5900, // Slight decrease in other energy sources
    water: 1200, // Constant water energy production
  },
  {
    month: 'Mär',
    solar: 1300, // Increasing solar energy production
    wind: 950, // Increasing wind energy production
    other: 5700, // Decreasing other energy sources
    water: 1200, // Constant water energy production
  },
  {
    month: 'Apr',
    solar: 1600, // Further increase in solar energy production
    wind: 1100, // Further increase in wind energy
    other: 5500, // Further decreasing other energy sources
    water: 1200, // Constant water energy production
  },
  {
    month: 'Mai',
    solar: 1900, // Peak solar energy production
    wind: 1300, // Peak wind energy production
    other: 5300, // Further decreasing other energy sources
    water: 1200, // Constant water energy production
  },
  {
    month: 'Jun',
    solar: 2100, // Peak solar energy production in June
    wind: 1250, // Slight decrease in wind energy
    other: 5200, // Slight decrease in other energy sources
    water: 1200, // Constant water energy production
  },
];

// Convert raw data to percentages
const data = rawData.map((item) => {
  const total = item.solar + item.wind + item.other + item.water;
  return {
    ...item,
    solar: (item.solar / total) * 100,
    wind: (item.wind / total) * 100,
    other: (item.other / total) * 100,
    water: (item.water / total) * 100,
  };
});

export default function StackedBarChart() {
  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey='month'
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
