import React from 'react';
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer, PieLabelRenderProps} from 'recharts';
import {
  WindPower as WindIcon,
  WbSunny as SolarIcon,
  Water as WaterIcon,
  ElectricBolt as OtherIcon,
} from '@mui/icons-material';
import {config} from '@/config';

enum EnergyType {
  Wind = 'Wind',
  Solar = 'Solar',
  Water = 'Water',
  Other = 'Other',
}

const cx = '50%';
const cy = '60%';
const iR = 50 * 0.75;
const oR = 130 * 0.75;

const pieData = [
  {
    name: EnergyType.Wind,
    value: 1250,
    color: config.colors.energyKinds.wind,
  },
  {
    name: EnergyType.Solar,
    value: 2100,
    color: config.colors.energyKinds.solar,
  },
  {
    name: EnergyType.Water,
    value: 1200,
    color: config.colors.energyKinds.water,
  },
  {
    name: EnergyType.Other,
    value: 5200,
    color: config.colors.energyKinds.other,
  },
];

interface RenderCustomizedLabelProps extends PieLabelRenderProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  color?: string;
}

export default function PieChartExample() {
  const renderCustomizedLabel = (props: RenderCustomizedLabelProps) => {
    const outerRadius = props.outerRadius;
    const cx = props.cx;
    const cy = props.cy;
    const innerRadius = props.innerRadius;
    const midAngle = props.midAngle;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.6;

    return (
      <>
        {props.name === EnergyType.Wind && (
          <WindIcon
            style={{color: props.color}}
            x={cx + radius * Math.cos(-midAngle * RADIAN) - 15}
            y={cy + radius * Math.sin(-midAngle * RADIAN) - 12}
            xmlns='http://www.w3.org/2000/svg'
            height='4em'
            viewBox='100 100'
          ></WindIcon>
        )}
        {props.name === EnergyType.Solar && (
          <SolarIcon
            style={{color: props.color}}
            x={cx + radius * Math.cos(-midAngle * RADIAN) - 15}
            y={cy + radius * Math.sin(-midAngle * RADIAN) - 12}
            xmlns='http://www.w3.org/2000/svg'
            height='4em'
            viewBox='100 100'
          ></SolarIcon>
        )}
        {props.name === EnergyType.Water && (
          <WaterIcon
            style={{color: props.color}}
            x={cx + radius * Math.cos(-midAngle * RADIAN * 0.99) - 15}
            y={cy + radius * Math.sin(-midAngle * RADIAN * 0.99) - 12}
            xmlns='http://www.w3.org/2000/svg'
            height='4em'
            viewBox='100 100'
          ></WaterIcon>
        )}
        {props.name === EnergyType.Other && (
          <OtherIcon
            style={{color: props.color}}
            x={cx + radius * Math.cos(-midAngle * RADIAN) - 15}
            y={cy + radius * Math.sin(-midAngle * RADIAN) - 12}
            xmlns='http://www.w3.org/2000/svg'
            height='4em'
            viewBox='100 100'
          ></OtherIcon>
        )}
      </>
    );
  };

  return (
    <ResponsiveContainer>
      <PieChart width={400} height={500}>
        <Pie
          dataKey='value'
          startAngle={225}
          endAngle={-45}
          data={pieData}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          label={renderCustomizedLabel}
          fill='#8884d8'
          stroke='none'
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
