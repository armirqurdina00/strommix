import React from 'react';
import Page from '@/components/page';
import {DraggableList} from '@/components/DraggableList';
import {Grid, Typography} from '@mui/material';
import {config} from '@/config';
import WindPowerIcon from '@mui/icons-material/WindPower';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterIcon from '@mui/icons-material/Water';
import {DoubleBulletButton} from '@/components/DoubleBulletButton';
import {InfoMessage} from '@/components/InfoMessage';


const listElements = [
  {
    label: 'Wind',
    icon: <WindPowerIcon />,
    color: config.colors.energyKinds.wind,
  },
  {
    label: 'Sonne',
    icon: <WbSunnyIcon />,
    color: config.colors.energyKinds.solar,
  },
  {
    label: 'Wasser',
    icon: <WaterIcon />,
    color: config.colors.energyKinds.water,
  },
];


export default function Preferences() {
  return (
    <div>
      <Page backgroundColor={config.colors.enbwBlue}>
        <div className='flex justify-center' style={{width: '100%', height: '100%'}}>
          <div
            className={'flex max-w-sm flex-col'}
          >
            <div
              style={{
                width: '80%',
                margin: '10%',

              }}
            >
              <DoubleBulletButton
                style={{marginBottom: 50}}
                textLeft="Aktueller Energiewunsch"
                textRight="Zukünftiger Energiewunsch"
              />
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
                    <Grid container>
                      <Grid item xs={3}>
                        <Typography
                          color="white"
                          fontSize={36}
                          fontWeight="bold"
                        >
                          {i + 1}.
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
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
              <InfoMessage
                style={{marginTop: 20}}
                text="Wir setzen alles daran, Ihren Wünschen entsprechend zu handeln. Eine Garantie können wir jedoch nicht übernehmen."
              />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}
