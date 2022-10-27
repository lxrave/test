import { Component, Input } from '@angular/core';
import { PoolItemType } from "../../services/PoolService";
import { of } from "rxjs";

@Component({
  selector: 'app-app-form-result',
  templateUrl: './app-form-result.component.html',
  styleUrls: ['./app-form-result.component.scss']
})
export class AppFormResultComponent {
  @Input() item: PoolItemType = of({
    responseId: ''
  })
}
