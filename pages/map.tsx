import React, {useState} from 'react';
import Page from '@/components/page';
import {currentMonthEnergyConsumptions} from '@/sample_data/current_month_energy_consumptions';
import {EnergyConsumption, GenerationType} from '@/types';
import {assertNever, NotYetImplementedError} from '@/shared';
import {Card, CardMedia, Grid, Typography} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {config} from '@/config';
import GoogleMapsComponent, {MarkerProps} from '@/components/GoogleMapsComponent';
import EnergyConsumptionDetails from '@/components/EnergyConsumptionDetails';
import {getAveragePointOfMostExtremeCoordinates, getDistanceBetweenPoints} from '../utils/geometry';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/de';


export default function Map() {
  const {defaultCenter, defaultZoom} = getDefaultCenterAndZoom(currentMonthEnergyConsumptions
    .map(cmec => cmec.generationPlant.polygon).flat());

  const [selectedEnergyConsumption, setSelectedEnergyConsumption] = useState<EnergyConsumption | null>(null);
  const [showFullEnergyConsumptionInfo, setShowFullEnergyConsumptionInfo] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if(!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if(isUpSwipe) {
      e.preventDefault();
      setShowFullEnergyConsumptionInfo(true);
    } else if(isDownSwipe) {
      e.preventDefault();
      setShowFullEnergyConsumptionInfo(false);
    }
  };

  const totalPowerConsumption = currentMonthEnergyConsumptions.reduce((p, c) => p + c.amount, 0);

  function formatPercentage(share: number) {
    return `${(share * 100).toFixed(2)}%`;
  }

  const energyConsumptionInfoPaneHeighInPx = 110;

  const markerDataArr: MarkerProps[] = currentMonthEnergyConsumptions.map(cmec => {
    return {
      position: getAveragePointOfMostExtremeCoordinates(cmec.generationPlant.polygon),
      polygon: cmec.generationPlant.polygon,
      iconUrl: getIconOfGenerationType(cmec.generationPlant.generationType, selectedEnergyConsumption?.id === cmec.id),
      labelText: formatPercentage(cmec.amount / totalPowerConsumption),
      onClick: () => setSelectedEnergyConsumption(c => cmec.id === c?.id ? null : cmec),
    };
  });

  const ExpandIcon = (showFullEnergyConsumptionInfo ? ExpandMoreIcon : ExpandLessIcon);

  return (
    <div>
      <Page>
        {!showFullEnergyConsumptionInfo &&
          <div style={{position: 'absolute', zIndex: 1, marginLeft: 25, marginRight: 0, marginTop: -80, padding: 5, width: '180px', top: 88, right: 0, backgroundColor: 'white'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
              <DatePicker
                defaultValue={dayjs('2023-08-05')}
                slotProps={{textField: {size: 'small'}}}
                label="von"
                sx={{marginBottom: 1}}
              />
              <DatePicker
                defaultValue={dayjs('2023-09-04')}
                slotProps={{textField: {size: 'small'}}}
                label="bis"
              />
            </LocalizationProvider>
          </div>
        }
        <div className='flex justify-center' style={{width: '100%', height: '100%', position: 'relative'}}>
          <div
            className={'flex flex-col'}
            style={{width: '100%', height: '100%', position: 'relative'}}
          >
            <div style={{width: '100%', height: '100%', margin: 'auto'}}>
              <GoogleMapsComponent
                center={defaultCenter}
                zoom={defaultZoom}
                markerDataArr={markerDataArr}
                polygon={
                  selectedEnergyConsumption === null ?
                    null :
                    selectedEnergyConsumption.generationPlant.polygon
                }
              />
            </div>
            {selectedEnergyConsumption !== null &&
              <div
                style={{
                  width: '100%',
                  position: 'absolute',
                  bottom: '0px',
                  height: !showFullEnergyConsumptionInfo ? `${energyConsumptionInfoPaneHeighInPx}px` : '100%',
                  transition: 'height 0.5s linear',
                  backgroundColor: config.colors.enbwBlue,
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div className='lg:w-2/3 md:w-4/5 mx-auto'>
                  <Grid container spacing={2}>
                    <Grid item xs={5}>
                      <Card style={{borderRadius: '15px', margin: 10}}>
                        <CardMedia
                          component="img"
                          image={selectedEnergyConsumption.generationPlant.pictureUrl}
                          alt="picture of plant"
                        />
                      </Card>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography
                        color="white"
                        fontSize={18}
                        fontWeight="bold"
                        style={{marginTop: 10}}
                      >
                        {selectedEnergyConsumption.generationPlant.name}
                      </Typography>
                      <Typography
                        color="white"
                        fontSize={12}
                        fontWeight="bold"
                        display="block"
                      >
                        {formatPercentage(selectedEnergyConsumption.amount / totalPowerConsumption)}<br />
                        {`${selectedEnergyConsumption.amount} kWh verbraucht`}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <ExpandIcon sx={{fontSize: 40, color: config.colors.enbwOrange}} onClick={() => setShowFullEnergyConsumptionInfo(!showFullEnergyConsumptionInfo)} style={{cursor: 'pointer'}} />
                    </Grid>
                  </Grid>
                  {
                    selectedEnergyConsumption !== null && showFullEnergyConsumptionInfo &&
                    <EnergyConsumptionDetails
                      energyConsumption={selectedEnergyConsumption}
                    />
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </Page>
    </div>
  );
}

function getIconOfGenerationType(generationType: GenerationType, selected: boolean) {
  switch(generationType) {
    case GenerationType.SOLAR:
      // TODO: figure out how scaling marker icons works properly
      // to avoid this ugly way of scaling. using class new google.maps.Size
      // for Icon attribute scaledSize works during hot reloading but does
      // not work in new builds.
      return selected ? '/images/solar_50_highlighted.png' : '/images/solar_50.png';
    case GenerationType.WIND:
      return selected ? '/images/wind_50_highlighted.png' : '/images/wind_50.png';
    case GenerationType.HYDRO:
      throw new NotYetImplementedError();
    case GenerationType.OTHER:
      throw new NotYetImplementedError();
    default:
      assertNever(generationType);
  }
}

const fallbackCenter = {
  lat: 51.4,
  lng: 10.594320371779457,
};
const fallbackZoom = 5.8;
const maxDefaultZoom = 17;

function getDefaultCenterAndZoom(geoPoints: google.maps.LatLngLiteral[]) {
  if(geoPoints.length === 0)
    return {defaultCenter: fallbackCenter, defaultZoom: fallbackZoom};

  const defaultCenter = getAveragePointOfMostExtremeCoordinates(geoPoints);

  const distancesToCenter = geoPoints.map(gp => getDistanceBetweenPoints(gp, defaultCenter));
  const maxDistanceToCenter = Math.max(...distancesToCenter);
  if(maxDistanceToCenter === 0)
    return {defaultCenter, defaultZoom: maxDefaultZoom};

  const computedZoom = 24 - Math.log2(maxDistanceToCenter);

  return {defaultCenter, defaultZoom: Math.min(maxDefaultZoom, computedZoom)};
}
