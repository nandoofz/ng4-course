import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Server ';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 500);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server (' + this.serverName + ') was created';
  }
}
