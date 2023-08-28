import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquirySimComponent } from './inquiry-sim.component';
import { ByCriteriaComponent } from './by-criteria/by-criteria.component';
import { ByFileComponent } from './by-file/by-file.component';
import { BySimComponent } from './by-sim/by-sim.component';
import { CheckRequestComponent } from './check-request/check-request.component';



const routes: Routes = [
  {
    path: '',
    component: InquirySimComponent,
    children: [
      {
        path: 'by-criteria',
        component: ByCriteriaComponent,
      },
      {
        path: 'by-file',
        component: ByFileComponent,
      },
      {
        path: 'by-sim',
        component: BySimComponent,
      },
      {
        path: 'check-request',
        component: CheckRequestComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquirySimRouting {}
