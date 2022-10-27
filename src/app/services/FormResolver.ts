import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { SimulateParams } from "./types";
import { ParamsRepository } from "./ParamsRepository";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FormResolver implements Resolve<SimulateParams> {
  constructor(private paramsRepository: ParamsRepository) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SimulateParams> {
    return this.paramsRepository.get()
  }
}
