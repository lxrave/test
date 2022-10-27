import { Component, Input } from '@angular/core';
import { PoolItemType } from "../../services/PoolService";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-app-form-results',
  templateUrl: './app-form-results.component.html',
  styleUrls: ['./app-form-results.component.scss']
})
export class AppFormResultsComponent {
  @Input() pool$: Observable<PoolItemType[]> = of([])
}
