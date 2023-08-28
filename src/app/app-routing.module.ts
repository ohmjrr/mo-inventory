import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inquiry-sim',
    loadChildren: () =>
      import('./inquiry-sim/inquiry-sim.module').then(
        (m) => m.InquirySimModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
