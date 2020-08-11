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
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthGuardService } from './services/authService/authGuard/auth-guard.service';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuardService, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
