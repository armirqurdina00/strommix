import { Frequency } from '@/enums';

export type CoordinateRes = google.maps.LatLngLiteral;

export type PolygonRes = CoordinateRes[];

export enum GenerationType {
  'WIND' = 'WIND',
  'SOLAR' = 'SOLAR',
  'HYDRO' = 'HYDRO',
  'OTHER' = 'OTHER',
}

export interface Plant {
  name: string;
  polygon: PolygonRes; // Each plant needs to have at least 1 geo point.
}

export interface GenerationPlant extends Plant {
  generationType: GenerationType;
  pictureUrl: string;
}

export interface EnergyConsumption {
  id: string;
  amount: number;
  antiGreewashingProofUrl: string;
  generationPlant: GenerationPlant;
}

export interface PreferencesEnergySource {
  label: string;
  icon: JSX.Element;
  color: string;
}

export type EnergyDataForStackedBarChart = GetEnergyDataRes & {
	monthName: string
}

export interface GetEnergyDataRes {
	monthInUnixMillis: number
	solarKwh: number
	windKwh: number
	otherKwh: number
	waterKwh: number
}

export type StackedBarChartProps = {
  energyData: EnergyDataForStackedBarChart[];
}

export type EnergyMixProps = {
  initialEnergyData: EnergyDataForStackedBarChart[];
};

export type StackedBarChartDropDownProps = {
  defaultValue: Frequency,
  handleFrequencyChange: (frequency: Frequency) => void
}
