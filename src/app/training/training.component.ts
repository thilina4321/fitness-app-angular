import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  showNew = false

  constructor(private trainingService:TrainingService) { }

  ngOnInit(): void {
    this.trainingService.subsExerice.subscribe((ex)=>{
      if(ex){
        this.showNew = true
      }else{
        this.showNew = false
      }
    })

  }

}
