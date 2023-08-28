import { Component,HostBinding } from '@angular/core';

@Component({
  selector: 'app-inquiry-sim',
  templateUrl: './inquiry-sim.component.html',
  styleUrls: ['./inquiry-sim.component.scss']
})
export class InquirySimComponent {
  @HostBinding('class') protected readonly theme: string = 'light';

  header: string = 'screen'
}
