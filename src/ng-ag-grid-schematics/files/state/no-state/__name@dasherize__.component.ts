import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-enterprise';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './app-<%= dasherize(name) %>.component.html',
  styleUrls: ['./app-<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component<T> {
  #gridApi!: GridApi;

  @Input() protected rowData: T;

  @Input() protected columnDefs: ColDef[];

  protected onGridReady(...params: [api: GridApi, columnApi: ColumnApi]) {
    const [api, columnApi] = params;
    this.#gridApi = api;
    columnApi.autoSizeAllColumns();
  }
}
