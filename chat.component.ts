import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  model: {messages: ''};

  public user1: {id: '', name: '', messages: '', timeStamp: ''};

  public users1 = [];

  public user2: {id: '', name: '', messages: '', timeStamp: ''};

  public users2 = [];

  private formgroup: FormGroup;
  private messages1: '';
  private messages2: '';
  private _url1 = 'http://localhost:8080/users/save/user1';
  private _url2 = 'http://localhost:8080/users/save/user2';

  constructor(private _chatService: ChatserviceService,
    private http: HttpClient) { }

  ngOnInit() {
    this._chatService.getUser1Chat().subscribe(data => this.users1 = data
     // console.log('data: ' + JSON.stringify(data))
    );

    this._chatService.getUser2Chat().subscribe(data => this.users2 = data
      // console.log('data: ' + JSON.stringify(data))
       );
  }


saveUser1(messages1: any) {
  this.http.post(this._url1, {
    messages: messages1,
  }).subscribe(data => console.log('data : ' + JSON.stringify(data)));
 // console.log(messages1);
 
}

saveUser2(messages2: any) {
  this.http.post(this._url2, {
    messages: messages2,
  }).subscribe(data => console.log('data : ' + JSON.stringify(data)));
 // console.log(messages2);
}

}

