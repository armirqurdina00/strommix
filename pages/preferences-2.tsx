import React, { useState } from 'react';
import Page from '@/components/page';
import { config } from '@/config';
import { InfoMessage } from '@/components/InfoMessage';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Preferences_2() {

  // const router = useRouter();
  const [value, setValue] = useState('gesamte');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Page backgroundColor={config.colors.enbwBlue}>
        <div className='flex justify-center' style={{ width: '100%', height: '100%' }}>
          <div
            className='flex max-w-sm flex-col justify-between'
          >
            <div
              style={{
                width: '80%',
                margin: '10%',
              }}
            >
              <div>
                <h1 className='text-white text-2xl font-bold py-2'>Losen Sie Ihren Energiewunsch ein:</h1>
              </div>
              <div className='py-8'>
                <div className='text-white'>Energiewunsch verbindlich ab dem 1.11.2023 fur folgenden Zeitraum einlosen:</div>
              </div>
              <div className='flex justify-center py-5'>
                <FormControl style={{ width: 'min-content' }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="gesamte"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 28,
                        color: '#ff8f0f'
                      },
                      '& .Mui-checked': {
                        '&, & + .MuiFormControlLabel-label': {
                          color: '#ff8f0f',
                        }
                      },
                      '.MuiFormControlLabel-label': {
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        lineHeight: 1,
                        marginY: 2,
                        marginX: 2,
                      }
                    }}
                  >
                    <FormControlLabel value="gesamte" control={<Radio />} label="Gesamte Vertragslaufzeit" />
                    <FormControlLabel value="monat" control={<Radio />} label="1 Monat" />
                  </RadioGroup>
                </FormControl>
              </div>
              <InfoMessage
                style={{ marginTop: 20 }}
                text="Ein langerer Zeitraum gibt uns mehr Flexibilitat bei der Strombeschaffung, wodurch die Erfullung Ihres Energiewusches wahrscheinlicher wird."
              />
            </div>
            <div style={{ width: '80%', margin: '10%' }}>
              <div className='flex justify-around items-center border-4 border-black py-2'>
                <div className='text-xl text-white font-bold ml-5'>Verbindlich einlosen</div>
                <CheckCircleIcon sx={{ fontSize: 40, color: '#ff8f0f' }} />
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}