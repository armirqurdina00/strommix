import React from 'react';
import Page from '@/components/page';
import { Fade, ThemeProvider, createTheme} from '@mui/material';
import Legend from '@/components/Legend';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LaunchIcon from '@mui/icons-material/Launch';
import PieChart from '../components/PieChart';
import StackedBarChart from '../components/StackedBarChart';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import StackedBarChartDropDown from '@/components/StackedBarChartDropDown';
import { Frequency } from '@/enums';

const CustomDatePickerTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
          },
          '& fieldset': {
            borderColor: 'black',
            borderWidth: '2px'
          },
          '&:hover fieldset': {
            borderColor: 'black',
            borderWidth: '2px'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
        },
        input: {
          padding: '8px 15px',
          cursor: 'pointer',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'white',
          textAlign: 'center'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-focused': {
            color: 'white'
          },
          '&.MuiInputLabel-shrink': {
            color: 'white'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '120px',
        },
      },
    },
  },
});

export default function EnergyMix() {

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
                <ThemeProvider theme={CustomDatePickerTheme}>
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
                    Wir konnten ihren{' '}
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
                <StackedBarChartDropDown defaultValue={Frequency.Monthly}/>
              </div>
              <div className='h-[250px] w-full'>
                <StackedBarChart />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Page>
  );
}
