import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['SR1', 'SR2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdate(event: any){
    this.serverName = event.target.value;
  }

}
