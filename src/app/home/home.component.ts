import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  email: string;
  password: string;

  ngOnInit() {
  }

  constructor(public authenticationService: AuthenticationService, private router: Router) {}

  signOut() {
    this.authenticationService.SignOut();
  }

}
