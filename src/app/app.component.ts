import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuth = false

  constructor(private authService:AuthService,
     private trainingService:TrainingService){}

  ngOnInit(){
    this.authService.authChange.subscribe((auth)=>{
      this.isAuth = auth
      console.log(auth)
    })


  }

  authState(){
    this.authService.logOut()

  }


}
