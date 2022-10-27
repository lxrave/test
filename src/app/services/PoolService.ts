import { Injectable } from "@angular/core";
import { ResultsRepository } from "./ResultsRepository";
import { delay, Observable, of } from "rxjs";
import * as _ from "lodash";
import { SimulateResult } from "./types";

export type PoolItemType = Observable<SimulateResult>

@Injectable({ providedIn: 'root' })
export class PoolService {
  private pool$: Observable<PoolItemType[]> = of([])

  constructor(private repo: ResultsRepository) {}

  makePoolStream(count_: number, delay_: number) {
    this.pool$ = of(
      _.range(0, count_).map((c) => this.repo.get().pipe(delay(delay_ * c)))
    )
    return this.pool$
  }

  public getPool$() {
    return this.pool$
  }
}
