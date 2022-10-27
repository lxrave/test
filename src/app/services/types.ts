import { Observable } from "rxjs";

export interface RepositoryI<
  T extends Record<string, any>=Record<string, any>,
  P extends Record<string, any>=Record<string, any>> {
  get(params?: P): T | Observable<T>
}

export type SimulateParams = {
  count: number;
  delay: number;
}

export type SimulateResult = {
  responseId: string;
}

