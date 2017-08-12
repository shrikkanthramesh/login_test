import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: Http, 
  	private router: Router) { }

   sendRequest() {
  	let url = "http://localhost:8080/elasticetl/api/v1/home";
  	let headers = new Headers({
  		'Content-Type' : 'application/json'
  	});
  	console.log("Inside send Request service");
  	return this.http.get(url, { headers : headers});	

  }

}
