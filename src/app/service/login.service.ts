import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: Http, 
  	private router: Router) { }

   sendRequest() {
  	let url = "https://login.windows.net/common/oauth2/authorize?response_type=code%20id_token&scope=openid&response_mode=form_post&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Felasticetl%2Fapi%2Fv1%2Fhome&client_id=793a6e11-2f9b-47d8-bb68-baba7602fee8&resource=https%3a%2f%2fgraph.windows.net&nonce=83473c67-c535-42e2-a5b9-a6a0e3ba3ce1&site_id=500879";
  	let headers = new Headers({
  		'Content-Type' : 'application/json'
  	});
  	console.log("Inside send Request service");
  	return this.http.get(url, { headers : headers});	

  }

}
