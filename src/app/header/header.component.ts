import {
  Component,
  Input,
  HostBinding,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostBinding('class') protected readonly theme: string = 'light';
  @Input() screenname: string = '';

  constructor(private router: Router) {}


  public onTab(tab: MatTabChangeEvent): void {
    // this.router.navigateByUrl(this.tabs[tab.index].path);
    // this.title = this.tabs[tab.index].title.toUpperCase();
    // this.subtitle = this.tabs[tab.index].subtitle.toUpperCase();
    console.log('Tab index changed to: ', tab.index);
    console.log('Tab label: ', tab.tab.textLabel);
    if (tab.index === 0) {
      this.router.navigateByUrl('/inquiry-sim/by-sim');
    }else if (tab.index === 1) {
      this.router.navigateByUrl('/inquiry-sim/by-criteria');
    }else if (tab.index === 2) {
      this.router.navigateByUrl('/inquiry-sim/by-file');
    }else if (tab.index === 3){
      this.router.navigateByUrl('/inquiry-sim/check-request')
    }
}
}