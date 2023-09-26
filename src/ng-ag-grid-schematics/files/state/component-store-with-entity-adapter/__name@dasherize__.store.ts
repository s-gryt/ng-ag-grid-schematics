import { Inject, Injectable, InjectionToken, inject } from '@angular/core';

import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { columnDefs } from './mock';
import { map, of, pipe, switchMap, tap, withLatestFrom } from 'rxjs';
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';
import { <%= classify(name) %>State, RowData } from './<%= dasherize(name) %>.model';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

const ADAPTER = new InjectionToken('Entity Adapter', {
  factory: () => createEntityAdapter<RowData>({ selectId: d => d.id })
});

@Injectable()
export class <%= classify(name) %>Store extends ComponentStore<<%= classify(name) %>State<EntityState<RowData>>> {
  #<%= camelize(name) %>Service = inject(<%= classify(name) %>Service);

  constructor(
    @Inject(ADAPTER) private readonly adapter: EntityAdapter<RowData>
  ) {
    super({
      data: adapter.getInitialState(),
      columnDefs: columnDefs,
      status: 'INIT',
      error: ''
    });
  }

  public readonly rowsList$ = this.select(d => Object.values(d.data.entities));
  public readonly rowsDictionary$ = this.select(d => d.data.entities);

  public readonly load = this.effect<void>(
    pipe(
      withLatestFrom(this.select(s => s.data)),
      tap(() => this.patchState({ status: 'LOADING' })),
      switchMap(([, data]) =>
        this.#<%= camelize(name) %>Service.findMany().pipe(
          map(rows => ({
            rows,
            data
          }))
        )
      ),
      tapResponse(
        ({ rows, data }) =>
          this.patchState({
            data: this.adapter.setAll(rows, data),
            status: 'LOADED'
          }),
        error => this.patchState({ error, status: 'LOADED' })
      )
    )
  );

  public readonly add = this.effect<RowData>(params$ => {
    return params$.pipe(
      withLatestFrom(this.select(s => s.data)),
      tap(() => this.patchState({ status: 'LOADING' })),
      switchMap(([row, data]) => {
        this.#<%= camelize(name) %>Service.updateOne(row);

        return of({ row, data });
      }),
      tapResponse(
        ({ row, data }) =>
          this.patchState({
            data: this.adapter.addOne(row, data),
            status: 'LOADED'
          }),
        error => this.patchState({ error, status: 'LOADED' })
      )
    );
  });

  public readonly update = this.effect<RowData>(params$ => {
    return params$.pipe(
      withLatestFrom(this.select(s => s.data)),
      tap(() => this.patchState({ status: 'LOADING' })),
      switchMap(([row, data]) => {
        this.#<%= camelize(name) %>Service.updateOne(row);

        return of({ row, data });
      }),
      tapResponse(
        ({ row, data }) => {
          const { id, ...d } = row;
          return this.patchState({
            data: this.adapter.updateOne({ id, changes: d }, data),
            status: 'LOADED'
          });
        },
        error => this.patchState({ error, status: 'LOADED' })
      )
    );
  });

  public readonly remove = this.effect<string>(params$ => {
    return params$.pipe(
      withLatestFrom(this.select(s => s.data)),
      tap(() => this.patchState({ status: 'LOADING' })),
      switchMap(([id, data]) => {
        this.#<%= camelize(name) %>Service.removeOne(id);

        return of({ id, data });
      }),
      tapResponse(
        ({ id, data }) =>
          this.patchState({
            data: this.adapter.removeOne(id, data),
            status: 'LOADED'
          }),
        error => this.patchState({ error, status: 'LOADED' })
      )
    );
  });
}
