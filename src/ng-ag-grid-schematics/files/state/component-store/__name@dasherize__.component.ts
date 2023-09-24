import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnApi, GridApi } from 'ag-grid-enterprise';
import { AgGridModule } from 'ag-grid-angular';
import { <%= classify(name) %>Store } from './<%= dasherize(name) %>.store';
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';
import { map } from 'rxjs';
import { RowData } from './<%= dasherize(name) %>.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  providers: [GridStore, GridService],
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class <%= classify(name) %>Component implements OnInit {
  #gridApi!: GridApi;

  #gridStore = inject(GridStore);
  state$ = this.#gridStore.state$;

  rowData = this.state$.pipe(map((d) => d.data));
  columnDefs = this.state$.pipe(map((d) => d.columnDefs));

  ngOnInit(): void {
    this.#gridStore.load();
  }

  protected onCellValueChanged(params: RowData): void {
    this.#gridStore.update(params);
  }

  protected onGridReady(...params: [api: GridApi, columnApi: ColumnApi]): void {
    const [api, columnApi] = params;
    this.#gridApi = api;
    columnApi.autoSizeAllColumns();
  }
}
