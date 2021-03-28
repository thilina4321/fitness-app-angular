import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout'
import { FormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './navigator/signup/signup.component';
import { LoginComponent } from './navigator/login/login.component';
import { TrainingComponent } from './training/training.component';
import { NewTrainComponent } from './training/new-train/new-train.component';
import { PastTrainComponent } from './training/past-train/past-train.component';
import { CurrentTrainComponent } from './training/current-train/current-train.component';
import { MaterialModule } from './material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { StopExericeComponent } from './training/stop-exerice/stop-exerice.component';
import { TrainingService} from './training/training.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    NewTrainComponent,
    PastTrainComponent,
    CurrentTrainComponent,
    WelcomeComponent,
    StopExericeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,

  ],
  providers: [TrainingService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
