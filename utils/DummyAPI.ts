import { Frequency } from '@/enums';
import { GetEnergyDataRes } from '@/types';

const monthlyEnergyData: GetEnergyDataRes[] = [
  {
    monthInUnixMillis: new Date(2023, 0).getTime(),
    solarKwh: 1000,
    windKwh: 800,
    otherKwh: 6000,
    waterKwh: 1200,
  },
  {
    monthInUnixMillis: new Date(2023, 1).getTime(),
    solarKwh: 1100,
    windKwh: 850,
    otherKwh: 5900,
    waterKwh: 1200,
  },
  {
    monthInUnixMillis: new Date(2023, 2).getTime(),
    solarKwh: 1300,
    windKwh: 950,
    otherKwh: 5700,
    waterKwh: 1200,
  },
  {
    monthInUnixMillis: new Date(2023, 3).getTime(),
    solarKwh: 1600,
    windKwh: 1100,
    otherKwh: 5500,
    waterKwh: 1200,
  },
  {
    monthInUnixMillis: new Date(2023, 4).getTime(),
    solarKwh: 1900,
    windKwh: 1300,
    otherKwh: 5300,
    waterKwh: 1200,
  },
  {
    monthInUnixMillis: new Date(2023, 5).getTime(),
    solarKwh: 2100,
    windKwh: 1250,
    otherKwh: 5200,
    waterKwh: 1200,
  },
];

export const getEnergyData = async (frequency: Frequency): Promise<GetEnergyDataRes[]> => {
  if(frequency === Frequency.Monthly) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(monthlyEnergyData);
      }, 300);
    });
  } else if(frequency === Frequency.Yearly) {
    console.info('Not yet implemented');
    return [];
  } else if(frequency === Frequency.Weekly) {
    console.info('Not yet implemented');
    return [];
  } else {
    throw new Error('Invalid frequency');
  }
};
