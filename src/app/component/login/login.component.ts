import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loggedIn:boolean = false;

	sessionId: string;

  constructor(private loginService: LoginService, 
  	private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
  	this.loginService.sendRequest().subscribe(
  		res => {
  			console.log("Inside send Request");
  			console.log(res.json().responseData);

  			this.loggedIn = true;
  			console.log(this.loggedIn);
  			this.sessionId = res.json().responseData.session_id;
  			console.log(this.sessionId);
  		},
  		err => {
  			console.log(err);
  			this.loggedIn = false;
  		})
  }

}
