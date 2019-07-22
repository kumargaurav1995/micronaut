import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserChat } from './chat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

private _url1 = 'http://localhost:8080/users/all/user1';
private _url2 = 'http://localhost:8080/users/all/user2';

  constructor(private http: HttpClient) { }
//<IUserChat>
  getUser1Chat(): Observable<any> {
    return this.http.get(this._url1);
  }
  getUser2Chat(): Observable<any> {
    return this.http.get(this._url2);
  }
}
