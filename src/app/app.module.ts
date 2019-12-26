import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AuthenticationService } from './shared/authentication.service';
import {  MatButtonModule, MatCardModule, MatDialogModule,
   MatInputModule, MatTableModule, MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      SignUpComponent,
      LoginComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule,
      FormsModule,
      ReactiveFormsModule,
      NoopAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule
   ],
   providers: [
      AuthenticationService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
