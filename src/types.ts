export interface ConfigurationData {
  participants: number;
  groups: number;
  rotation: Rotation;
}

export type Rotation = number[][][];

export type GroupData = number[];

export interface Participant {
  id: number;
  color: string;
}

export type PersonMap = Map<number, Participant>;
