import {EnergyConsumption, GenerationType} from '@/types';


export const currentMonthEnergyConsumptions: EnergyConsumption[] = [
  {
    id: '8f59046a-c82b-4e40-84b1-1248870a94f5',
    amount: 35,
    antiGreewashingProofUrl: 'https://etherscan.io/tx/0x6bdc146b1abeecf92e87f137406923648d34b6683e1801d3a39f20f8ed25fc09',
    generationPlant: {
      name: 'KIT Solarpark 2.0',
      generationType: GenerationType.SOLAR,
      pictureUrl: 'https://www.kit.edu/img/pi/2022_093_Solarpark%202.0%20-%20Mehr%20Ertrag%20bei%20gleicher%20Flaeche_1_72%20dpi.jpg',
      polygon: [
        {
          lat: 49.098725444816324,
          lng: 8.43649303305361,
        },
        {
          lat: 49.100745515698186,
          lng: 8.437400211219293,
        },
        {
          lat: 49.100406930008745,
          lng: 8.439262775093125,
        },
        {
          lat: 49.09836675885984,
          lng: 8.438412569466008,
        },
      ],
    },
  },
  {
    id: 'f8c3d492-323b-402d-a089-a9fcad5143be',
    amount: 126,
    antiGreewashingProofUrl: 'https://etherscan.io/tx/0x9803c6c96f06aeb354ee52c186569f34d62e992c09e6bf3a615ac2bf9eb415bf',
    generationPlant: {
      name: 'Energieberg Wind',
      generationType: GenerationType.WIND,
      pictureUrl: 'https://www.badenova.de/blog/content/images/2021/09/Windrad-Hohenlochen-Abendd-mmerung-1.jpg',
      polygon: [
        {
          lat: 49.02118360024926,
          lng: 8.331055457845977,
        },
        {
          lat: 49.02006213002214,
          lng: 8.336552806614264,
        },
        {
          lat: 49.02057422001883,
          lng: 8.337036948125107,
        },
        {
          lat: 49.02182369749833,
          lng: 8.33176605264415,
        },
      ],
    },
  },
];
