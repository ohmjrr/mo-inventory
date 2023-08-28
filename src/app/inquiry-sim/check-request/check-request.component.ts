import { Component,HostBinding } from '@angular/core';

@Component({
  selector: 'app-check-request',
  templateUrl: './check-request.component.html',
  styleUrls: ['./check-request.component.scss']
})
export class CheckRequestComponent {
  @HostBinding('class') protected readonly theme: string = 'light';
  
}
