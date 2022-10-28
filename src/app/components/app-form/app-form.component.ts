import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { map, Observable, tap } from "rxjs";
import { SimulateParams } from "../../services/types";
import { PoolItemType, PoolService } from "../../services/PoolService";

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss']
})
export class AppFormComponent implements OnInit {

  public data$: Observable<SimulateParams>
  public formDelay$: Observable<SimulateParams['delay']>
  public formCount$: Observable<SimulateParams['count']>

  public actionForm = this.formBuilder.group({
    action: 'process'
  })

  constructor(
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private poolService: PoolService,
    ) {
    this.data$ = this.route.data.pipe(
      map((data: Data) => data['formInitialData'])
    )
    this.formDelay$ = this.route.data.pipe(
      map((data: Data) => data['formInitialData'].delay)
    )
    this.formCount$ = this.route.data.pipe(
      map((data: Data) => data['formInitialData'].count)
    )
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    const sub$$ = this.data$.pipe(
      tap((data) => this.poolService.makePoolStream(data.count, data.delay))
    ).subscribe()
    sub$$.unsubscribe()
  }

  get pool(): Observable<PoolItemType[]> {
    return this.poolService.getPool$()
  }
}
