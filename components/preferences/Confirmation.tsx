import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {InfoMessage} from '../InfoMessage';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ConfirmationProps {
  confirm: () => void;
}

export default function Confirmation({confirm}: ConfirmationProps) {
  const [value, setValue] = useState('gesamte');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <div>
        <h1 className='text-white text-2xl font-bold py-2'>Lösen Sie Ihren Energiewunsch ein:</h1>
      </div>
      <div className='py-8'>
        <div className='text-white text-sm'>Energiewunsch verbindlich ab dem 1.11.2023 für folgenden Zeitraum einlösen:</div>
      </div>
      <div className='flex justify-center py-5'>
        <FormControl style={{width: 'min-content'}}>
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
        text="Ein längerer Zeitraum gibt uns mehr Flexibilität bei der Strombeschaffung, wodurch die Erfüllung Ihres Energiewunsches wahrscheinlicher wird."
      />
      <button className='flex justify-around items-center w-full border-4 border-black py-1.5' style={{marginTop: 20, position: 'absolute', bottom: 0}} onClick={confirm}>
        <span className='text-xl text-white font-bold ml-5'>Verbindlich einlosen</span>
        <CheckCircleIcon sx={{fontSize: 40, color: '#ff8f0f'}} />
      </button>
    </>
  );
}
