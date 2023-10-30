import React, { useEffect, useState } from 'react';
import Page from '@/components/page';
import { Fade, ThemeProvider} from '@mui/material';
import Legend from '@/components/Legend';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LaunchIcon from '@mui/icons-material/Launch';
import PieChart from '../components/PieChart';
import StackedBarChart from '../components/StackedBarChart';
import {LocalizationProvider, MobileDatePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import StackedBarChartDropDown from '@/components/StackedBarChartDropDown';
import { Frequency } from '@/enums';
import { getEnergyData } from '@/utils/DummyAPI';
import DatePickerTheme from '@/utils/DatePickerTheme';
import { EnergyDataForStackedBarChart, EnergyMixProps } from '@/types';

export const getServerSideProps = async () => {
  try {
    const initialEnergyData = await getEnergyData(Frequency.Monthly);
    return { props: { initialEnergyData } };
  } catch(err) {
    return { props: { initialEnergyData: [] } };
  }
};

export default function EnergyMix({ initialEnergyData }: EnergyMixProps) {

  const [energyData, setEnergyData] = useState<EnergyDataForStackedBarChart[]>(initialEnergyData);

  // Hack: Currently facing issues with Recharts not rendering correctly during Server Side Rendering.
  useEffect(() => {
    handleFrequencyChange(Frequency.Monthly)
      .catch(err => {
        throw err;
      });
  }, []);

  const handleFrequencyChange = async (frequency: Frequency) => {
    const energyData = await getEnergyData(frequency);
    const processedData = energyData.map((item) => {
      const total = item.solarKwh + item.windKwh + item.waterKwh + item.otherKwh;
      return {
        ...item,
        monthName: monthName(item.monthInUnixMillis),
        solar: (item.solarKwh / total) * 100,
        wind: (item.windKwh / total) * 100,
        water: (item.waterKwh / total) * 100,
        other: (item.otherKwh / total) * 100,
      };
    });
    setEnergyData(processedData);
  };

  const monthName = (monthInUnixMillis: number) => {
    return new Date(monthInUnixMillis).toLocaleString('de-DE', { month: 'short' });
  };

  return (
    <Page>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col w-full max-w-screen-sm items-between justify-around' style={{marginBottom: 50}}>
          <div>
            <h1 className='text-3xl text-white mt-3 mb-3 flex justify-center'>Strommix</h1>
            <Fade in={true} timeout={1500}>
              <div>
                <Legend />
              </div>
            </Fade>
          </div>
          <div>
            <Fade in={true} timeout={1500}>
              <div className='flex w-full justify-between px-5 sm:px-10 mt-4'>
                <div />
                <ThemeProvider theme={DatePickerTheme}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                    <MobileDatePicker
                      defaultValue={dayjs('2023-08-05')}
                      label="Seit"
                    />
                  </LocalizationProvider>
                </ThemeProvider>
              </div>
            </Fade>
            <div className='h-[220px] w-full '>
              <PieChart />
            </div>
            <div className='mt-3 flex w-full justify-center px-5'>
              <Fade in={true} timeout={1500}>
                <div className='flex items-center gap-3'>
                  <ThumbUpIcon className='text-green-400' />
                  <p>
                    Wir konnten Ihren{' '}
                    <span className='text-xl font-medium text-enbw-orange'>
                      Energiewunsch
                    </span>
                    <span>
                      <LaunchIcon className='relative bottom-2 ml-1 text-sm text-enbw-orange' />
                    </span>
                    <br />
                    erfüllen!
                  </p>
                </div>
              </Fade>
            </div>
          </div>
          <Fade in={true} timeout={1500}>
            <div>
              <div className='mt-3 flex w-full justify-between px-5 sm:px-10'>
                <div />
                <StackedBarChartDropDown defaultValue={Frequency.Monthly} handleFrequencyChange={handleFrequencyChange}/>
              </div>
              <div className='h-[250px] w-full'>
                <StackedBarChart energyData={energyData}/>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Page>
  );
}
