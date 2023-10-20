import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const FreqBarChartSelect: React.FC = () => {
    const [frequency, setFrequency] = useState<string>('Monatsansicht');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setFrequency(event.target.value);
    };

    return (
        <FormControl className='w-[50%] h-full' sx={{ mx: 2, border: 1, borderWidth: 2 }} size="small">
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={frequency}
                onChange={handleChange}
                sx={{ color: 'white' }}
            >
                <MenuItem value='Daily'>Daily</MenuItem>
                <MenuItem value='Weekly'>Weekly</MenuItem>
                <MenuItem value='Monatsansicht'>Monatsansicht</MenuItem>
                <MenuItem value='Yearly'>Yearly</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FreqBarChartSelect;