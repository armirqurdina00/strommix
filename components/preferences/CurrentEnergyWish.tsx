import React from 'react';
import { Grid, Typography } from '@mui/material';
import { PreferencesEnergySource } from '@/types';

interface CurrentEnergyWishProps {
  listElements: PreferencesEnergySource[];
}

const CurrentEnergyWish: React.FC<CurrentEnergyWishProps> = ({ listElements }) => {
  return (
    <>
      {listElements.map((listElement, i) =>
        <div
          key={i}
          style={{
            width: '100%',
          }}
        >
          <Grid container className='mb-5'>
            <Grid item xs={2}>
              <Typography
                color="white"
                fontSize={36}
                fontWeight="bold"
              >
                {i + 1}.
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <div style={{width: '100%', borderColor: listElement.color, borderWidth: 4, borderStyle: 'solid', borderRadius: 20, margin: 5}}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography
                      color={listElement.color}
                      fontSize={24}
                      align="right"
                    >
                      {listElement.icon}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      color="white"
                      fontSize={24}
                      fontWeight="bold"
                      align="left"
                    >
                      {listElement.label}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default CurrentEnergyWish;
