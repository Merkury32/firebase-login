import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersEditComponent } from './pages/users-edit/users-edit.component';
import { FormsModule } from '@angular/forms';
import { AddUserPopupComponent } from './pages/users-edit/add-user-popup/add-user-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuardService } from './services/authService/authGuard/auth-guard.service';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8
=======
>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersEditComponent,
    AddUserPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AuthGuardService, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
