import { ColDef } from 'ag-grid-enterprise';

export type Status = 'INIT' | 'LOADING' | 'LOADED';

export type RowData = {
  id: string;
  [key: string]: unknown;
};

export type <%= classify(name) %>State = {
  data: RowData[];
  columnDefs: ColDef[];
  status: Status;
  error: unknown;
};
