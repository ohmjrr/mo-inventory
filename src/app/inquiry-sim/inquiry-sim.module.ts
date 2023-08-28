import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { InquirySimComponent } from './inquiry-sim.component';
import { InquirySimRouting } from './inquiry-sim.routing';
import { MaterialModule } from '../material/material.modules';
import { ByFileComponent } from './by-file/by-file.component';
import { CheckRequestComponent } from './check-request/check-request.component';



@NgModule({
  declarations: [InquirySimComponent,ByFileComponent, CheckRequestComponent],
  imports: [
    CommonModule,
    InquirySimRouting,
    HeaderModule,
    MaterialModule
  ]
})
export class InquirySimModule {}
