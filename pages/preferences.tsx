import React from 'react';
import Page from '@/components/page';
import {config} from '@/config';
import WindPowerIcon from '@mui/icons-material/WindPower';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterIcon from '@mui/icons-material/Water';
import { DoubleBulletButton } from '@/components/DoubleBulletButton';
import CurrentEnergyWish from '@/components/preferences/CurrentEnergyWish';
import FutureEnergyWish from '@/components/preferences/FutureEnergyWish';
import Confirmation from '@/components/preferences/Confirmation';

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
  const [page, setPage] = React.useState(1);

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
                height: '100%',
                position: 'relative',
              }}
            >
              {
                page < 3 &&
                  <DoubleBulletButton
                    style={{ marginBottom: 50 }}
                    textLeft="Aktueller Energiewunsch"
                    textRight="Zukünftiger Energiewunsch"
                    onClickLeft={() => { setPage(1); }}
                    onClickRight={() => { setPage(2); }}
                  />
              }
              {
                page === 1 ?
                  <CurrentEnergyWish listElements={listElements} /> :
                  page === 2 ?
                    <FutureEnergyWish listElements={listElements} moveToConfirmation={() => { setPage(3); }} /> :
                    <Confirmation confirm={() => { setPage(1); }} />
              }
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}
