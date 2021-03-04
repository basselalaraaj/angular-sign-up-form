import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@app/_models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<object> {
    return this.http.post(`https://demo-api.now.sh/users`, user);
  }
}
