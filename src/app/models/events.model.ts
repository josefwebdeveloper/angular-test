export interface EventData {
  id?: number
  name: string;
  createDate: string;
  lastUpdate: string;
  createdBy: string;
  color: string;
}

export interface eventResponse {
  data: EventData[];
}
