import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }
  message: string;

  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['home']);
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        this.message = `Uuups. ${error.message}`;
        console.log('Something is wrong:', error.message);
      });
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        this.message = `Uuups. ${err.message}`;
        console.log('Something is wrong:', err.message);
      });
  }


  SignOut() {
    this.router.navigate(['/login']);
    this.angularFireAuth
      .auth
      .signOut();
  }

}
