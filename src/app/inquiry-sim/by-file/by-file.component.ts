import { Component,HostBinding } from '@angular/core';

@Component({
  selector: 'app-by-file',
  templateUrl: './by-file.component.html',
  styleUrls: ['./by-file.component.scss']
})
export class ByFileComponent {
  @HostBinding('class') protected readonly theme: string = 'light';

}
