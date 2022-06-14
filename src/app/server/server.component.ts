import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .statusText{
            color: white;
        }
        .textPadding{
            padding: 5px;
        }
    `]
})

export class ServerComponent {
    serverId: number = 21;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId = Math.floor(Math.random() * 100) + 1;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getStatus(): string {
        return this.serverStatus;
    }

}
