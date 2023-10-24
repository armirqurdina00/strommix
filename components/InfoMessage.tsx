import {Grid, Typography} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {CSSProperties} from 'react';


interface Props {
  text: string;
  style?: CSSProperties;
}

export function InfoMessage({text, style}: Props) {
  return (
    <Grid container columns={{xs: 10}} style={style}>
      <Grid item xs={2}>
        <InfoIcon sx={{fontSize: 40, color: '#ff8f0f'}} />
      </Grid>
      <Grid item xs={8}>
        <Typography
          color="white"
          fontSize={12}
          fontWeight="bold"
          display="block"
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}
