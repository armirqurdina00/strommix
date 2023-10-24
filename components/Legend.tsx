import {config} from '@/config';
import {
  WindPower as WindIcon,
  WbSunny as SunIcon,
  Water as WaterIcon,
  ElectricBolt as OtherIcon,
} from '@mui/icons-material';

export default function Legend() {
  return (
    <div className='flex justify-center w-full gap-5'>
      <div style={{color: config.colors.energyKinds.wind}} className='flex items-center'>
        <WindIcon /> <span className='ml-1'>Wind</span>
      </div>
      <div style={{color: config.colors.energyKinds.solar}} className='flex items-center'>
        <SunIcon /> <span className='ml-1'>Solar</span>
      </div>
      <div style={{color: config.colors.energyKinds.water}} className='flex items-center'>
        <WaterIcon /> <span className='ml-1'>Wasser</span>
      </div>
      <div style={{color: config.colors.energyKinds.other}} className='flex items-center'>
        <OtherIcon /> <span className='ml-0'>Sonstige</span>
      </div>
    </div>
  );
}
