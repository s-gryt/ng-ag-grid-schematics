import { Injectable } from '@angular/core';
import { rowData } from './mock';
import { Observable, of } from 'rxjs';
import { RowData } from './<%= dasherize(name) %>.model';

@Injectable()
export class <%= classify(name) %>Service {
  #rowData = [...rowData];

  public findMany(): Observable<RowData[]> {
    return of(this.#rowData);
  }

  public findOneById(id: string): Observable<RowData | undefined> {
    return of(this.#rowData.find((d) => d.id === id));
  }

  public updateMany(data: RowData[]): void {
    this.#rowData = this.#rowData.map((r: any) => ({
      ...r,
      ...(data.find((d) => d.id === r.id) || {}),
    }));
  }

  public updateOne(data: RowData): void {
    const index = this.#rowData.findIndex((item) => item.id === data.id);

    if (index === -1) throw new Error(`Item ${data.id} not found.`);

    this.#rowData[index] = { ...this.#rowData[index], ...data };
  }

  public removeMany(ids: string[]): void {
    this.#rowData = this.#rowData.filter((d: any) => !ids.includes(d.id));
  }

  public removeOne(idToRemove: string): void {
    this.#rowData = this.#rowData.filter((d: any) => d.id !== idToRemove);
  }
}
