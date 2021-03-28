import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exerice } from '../exerice.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-train',
  templateUrl: './new-train.component.html',
  styleUrls: ['./new-train.component.css']
})
export class NewTrainComponent implements OnInit {

  availableExerices:Exerice[]
  isTrue = false

  onStart(form:NgForm){
    console.log(form.value.ex)
    this.traingService.getSelectedExerice(form.value.ex)
  }
  constructor(private traingService:TrainingService,
    private db:AngularFirestore) {}

  ngOnInit(): void {
    this.traingService.fetchAvailableExerices()
    this.traingService.subsFetchExerice
    .subscribe((exerices:Exerice[])=>{
      this.availableExerices = exerices
    })

  }

}
