import { RepositoryI, SimulateParams } from "./types";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ParamsRepository implements RepositoryI<SimulateParams> {
  get(params?: Record<string, any>): Observable<SimulateParams> {
    // @TODO Replace with Http call
    return of({
      count: Math.round(Math.random() * 20) + 1,
      delay: Math.round(Math.random() * 1000) + 1
    })
  }
}
