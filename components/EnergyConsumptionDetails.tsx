import {Box, Button, Grid, Typography} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import {config} from '@/config';
import {EnergyConsumption} from '@/types';
import {InfoMessage} from './InfoMessage';


interface Props {
  energyConsumption: EnergyConsumption;
}

export default function EnergyConsumptionDetails({energyConsumption}: Props) {
  return (
    <>
      <style type="text/css">
        {`
            body {
              overscroll-behavior-y: contain !important;
            }
          `}
      </style>
      <div style={{marginLeft: 30, marginRight: 30}}>
        <Grid container spacing={2} style={{marginBottom: 30}}>
          <Grid item xs={12}>
            <Typography
              color="white"
              fontSize={18}
              fontWeight="bold"
              style={{marginTop: 10}}
              align="center"
            >
            Andere Strombezieher
            </Typography>
          </Grid>
          {[
            {
              percentage: '53.27%',
              name: 'Mediamarkt',
            },
            {
              percentage: '11.81%',
              name: 'Aldi',
            },
            {
              percentage: '2.13%',
              name: '0x23D57AD...',
            },
            {
              percentage: '1.77%',
              name: '0xD1D8719...',
            },
          ].map(({percentage, name}, i) =>
            <Grid item xs={12} key={i}>
              <Box borderRadius={3} border={3} borderColor="black">
                <div
                  style={{
                    width: '30%',
                    display: 'inline-flex',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    color="white"
                    fontSize={16}
                    fontWeight="bold"
                    align="center"
                  >
                    {percentage}
                  </Typography>
                </div>
                <div
                  style={{
                    width: '70%',
                    display: 'inline-flex',
                    borderLeft: '3px solid black',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    color="white"
                    fontSize={16}
                    fontWeight="bold"
                  >
                    {name}
                  </Typography>
                </div>
              </Box>
            </Grid>
          )}
        </Grid>
        <InfoMessage
          style={{marginBottom: 20}}
          text="Dank Blockchain-Technologie können unabhängige Experten die in dieser App angezeigten Informationen überprüfen."
        />
        <Button
          href={energyConsumption.antiGreewashingProofUrl}
          target="_blank"
          style={{color: 'white', border: '3px solid black', marginTop: 5, width: '100%'}}
          endIcon={<LaunchIcon style={{color: config.colors.enbwOrange}} />}>
        Anti-Greenwasching-Nachweis
        </Button>
        <Button
          href={config.urls.whitepaper}
          target="_blank"
          style={{color: 'white', border: '3px solid black', marginTop: 5, width: '100%'}}
          endIcon={<LaunchIcon style={{color: config.colors.enbwOrange}} />}>
        Technische Details
        </Button>
      </div>
    </>
  );
}
