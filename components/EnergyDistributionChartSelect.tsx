import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const EnergyDistributionChartSelect: React.FC = () => {
    const [option, setOption] = useState<string>('Seit letzer Nutzung');
  
    const handleChange = (event: SelectChangeEvent<string>) => {
        setOption(event.target.value);
    };

    return (
        <FormControl className='w-[50%] h-full' sx={{ mx: 2, border: 1, borderWidth: 2 }} size="small">
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={option}
                onChange={handleChange}
                sx={{ color: 'white' }}
            >
                <MenuItem value='Seit letzer Nutzung'>Seit letzer Nutzung</MenuItem>
            </Select>
        </FormControl>
    );
}

export default EnergyDistributionChartSelect;