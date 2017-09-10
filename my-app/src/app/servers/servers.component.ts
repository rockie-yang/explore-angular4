import { Component, OnInit } from '@angular/core';
// import {setTimeout} from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  serverCreationStatus = 'No Server Created';
  serverName = 'server name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created';
  }

  ngOnInit() {
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    // this.serverName = (<HTMLInputElement>event.target).value;
  }
}
