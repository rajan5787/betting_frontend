import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../services/web-socket.service'
import {Event} from '../../models/event';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'


@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QRComponent implements OnInit {

  public qrCode: string = null;
  public user: any = null; 

  constructor (
    private webSocketService: WebSocketService,
    private route: ActivatedRoute,
    private router: Router) 
  {
      this.qrCode = 'test data';
  }

  ngOnInit() {
    this.initIoConnection();
    
  }

  initIoConnection(): void {
    this.webSocketService.initSocket();

    this.webSocketService
      .sendMessage("Hello Public");

    this.webSocketService
      .getNewQrCode()
      .subscribe((qrCode: string) => {
        this.qrCode = qrCode;
        console.log(this.qrCode);
      });

    this.webSocketService
      .getNewUser()
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
        this.router.navigate(['/welcome']);
    });
    
    this.webSocketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
    });

    this.webSocketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }
}
