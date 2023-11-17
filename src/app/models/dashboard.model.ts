import { EventData } from "./events.model";

export enum View {
  List = 'list',
  Tile = 'tile',
}

export interface DialogData {
  mode: DialogMode;
  event?: EventData;

}

export enum DialogMode {
  New = 'new',
  Edit = 'edit',
}
export enum SortDirection {
    Ascending = 'asc',
    Descending = 'desc',
}
