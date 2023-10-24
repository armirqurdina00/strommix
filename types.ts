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
