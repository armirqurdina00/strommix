import React from 'react';
import { DraggableList } from '../DraggableList';
import { Grid, Typography } from '@mui/material';
import { PreferencesEnergySource } from '@/types';
import { InfoMessage } from '../InfoMessage';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';

interface FutureEnergyWishProps {
  listElements: PreferencesEnergySource[];
  moveToConfirmation: () => void;
}

const FutureEnergyWish: React.FC<FutureEnergyWishProps> = ({ listElements, moveToConfirmation }) => {
  return (
    <>
      <style type="text/css">
        {`
            body {
              overscroll-behavior-y: contain !important;
            }
          `}
      </style>
      <DraggableList
        itemDistanceY={70}
      >
        {listElements.map((listElement, i) =>
          <div
            key={i}
            style={{
              width: '100%',
            }}
          >
            <Grid container columnSpacing={0}>
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
      </DraggableList>
      <div style={{position: 'absolute', bottom: 0}}>
        <InfoMessage
          text="Wir setzen alles daran, Ihren Wünschen entsprechend zu handeln. Eine Garantie können wir jedoch nicht übernehmen."
        />
        <button className='flex justify-around items-center w-full border-4 border-black py-1.5' style={{marginTop: 20}} onClick={moveToConfirmation}>
          <span className='text-xl text-white font-bold w-full'>Weiter</span>
          <NavigateNextSharpIcon sx={{ fontSize: 40, color: '#ff8f0f' }} />
        </button>
      </div>
    </>
  );
};

export default FutureEnergyWish;
