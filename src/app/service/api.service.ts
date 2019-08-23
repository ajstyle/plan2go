import { Injectable   } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

const prodUrl = 'https://pure-citadel-95030.herokuapp.com/users' ;

@Injectable()
export class ApiService {




constructor(public http: HttpClient ) { }


login(data) {

  return this.http.post(`${prodUrl}/authenticate` , data);

}

register(data) {
  return this.http.post(`${prodUrl}/register` , data);

}

}
