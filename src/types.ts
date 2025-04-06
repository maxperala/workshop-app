export interface ConfigurationData {
  participants: number;
  groups: number;
  rotation: Rotation;
}

export type Rotation = number[][][];

export type GroupData = number[];
