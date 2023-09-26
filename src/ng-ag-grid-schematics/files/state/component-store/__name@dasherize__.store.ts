import { Injectable, inject } from '@angular/core';

import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { columnDefs } from './mock';
import { of, pipe, switchMap, tap, withLatestFrom } from 'rxjs';
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';
import { <%= classify(name) %>State, RowData } from './<%= dasherize(name) %>.model';

@Injectable()
export class <%= classify(name) %>Store extends ComponentStore<<%= classify(name) %>State> {
  #<%= camelize(name) %>Service = inject(<%= classify(name) %>Service);
  constructor() {
    super({
      data: [{ id: '' }],
      columnDefs: columnDefs,
      status: 'INIT',
      error: '',
    });
  }

  public readonly load = this.effect<void>(
    pipe(
      tap(() => {
        this.patchState({ status: 'LOADING' });
      }),
      switchMap(() => this.#<%= camelize(name) %>Service.findMany()),
      tapResponse(
        (data) => this.patchState({ data, status: 'LOADED' }),
        (error) => this.patchState({ error, status: 'LOADED' })
      )
    )
  );

  public readonly add = this.effect<RowData>((params$) => {
    return params$.pipe(
      withLatestFrom(this.select((s) => s.data)),
      tap(() => this.patchState({ status: 'LOADING' })),
      switchMap(([row, rows]) => {
        this.#<%= camelize(name) %>Service.updateOne(row);

        return of({ row, rows });
      }),
      tapResponse(
        ({ row, rows }) => {
          const itemIndex = rows.findIndex((d) => d.id === row.id);

          if (itemIndex !== -1)
            return this.patchState({
              error: `Item with id ${row.id} already exists.`,
            });

          return this.patchState({ data: [...rows, row], status: 'LOADED' });
        },
        (error) => this.patchState({ error, status: 'LOADED' })
      )
    );
  });

  public readonly update = this.effect<RowData>((params$) => {
    return params$.pipe(
      withLatestFrom(this.select((s) => s.data)),
      tap(() => this.patchState({ status: 'LOADING' })),
      switchMap(([row, rows]) => {
        this.#<%= camelize(name) %>Service.updateOne(row);

        return of({ row, rows });
      }),
      tapResponse(
        ({ row, rows }) => {
          const itemIndex = rows.findIndex((d) => d.id === row.id);

          if (itemIndex === -1)
            return this.patchState({
              error: `Item with id ${row.id} does not exist.`,
            });

          const data = [
            ...rows.slice(0, itemIndex),
            { ...rows[itemIndex] },
            ...rows.slice(itemIndex + 1),
          ];

          return this.patchState({ data, status: 'LOADED' });
        },
        (error) => this.patchState({ error, status: 'LOADED' })
      )
    );
  });

  public readonly remove = this.effect<string>((params$) => {
    return params$.pipe(
      withLatestFrom(this.select((s) => s.data)),
      tap(() => this.patchState({ status: 'LOADING' })),
      switchMap(([id, rows]) => {
        this.#<%= camelize(name) %>Service.removeOne(id);

        return of({ id, rows });
      }),
      tapResponse(
        ({ id, rows }) => {
          const itemIndex = rows.findIndex((d) => d.id === id);

          if (itemIndex === -1)
            return this.patchState({
              error: `Item with id ${id} does not exist.`,
            });

          const data = [
            ...rows.slice(0, itemIndex),
            ...rows.slice(itemIndex + 1),
          ];

          return this.patchState({ data, status: 'LOADED' });
        },
        (error) => this.patchState({ error, status: 'LOADED' })
      )
    );
  });
}
