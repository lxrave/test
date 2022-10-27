import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFormComponent } from "./components/app-form/app-form.component";
import { FormResolver } from "./services/FormResolver";

const routes: Routes = [
  {
    path: 'form',
    component: AppFormComponent,
    resolve: {
      formInitialData: FormResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
