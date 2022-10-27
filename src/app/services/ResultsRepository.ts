import { RepositoryI, SimulateResult } from "./types";
import { Observable, of } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ResultsRepository implements RepositoryI<SimulateResult> {
  get(params?: Record<string, any>): Observable<SimulateResult> {
    // @TODO Replace with Http call
    return of({
      responseId: uuidv4()
    })
  }
}
