import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth'
import { TrainingService } from '../training/training.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private auth:AngularFireAuth,
    private trainingService:TrainingService) { }

  authChange = new Subject<boolean>()
  isAuthenticate = false

  user:{email:string, password:string}

  logIn(authData:{email:string, password:string}){
    this.auth.signInWithEmailAndPassword(authData.email, authData.password)
    .then((user)=>{
      this.isAuthenticate = true
      this.authChange.next(true)
      this.router.navigate(['/training'])
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  logOut(){
    this.trainingService.cancelFetchData()
    this.auth.signOut()
    this.isAuthenticate = false
    this.authChange.next(false)
    this.router.navigate(['/logIn'])
    this.user = null
  }

  isAuth(){
    return this.isAuthenticate
  }
}


