import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopExericeComponent } from '../stop-exerice/stop-exerice.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-train',
  templateUrl: './current-train.component.html',
  styleUrls: ['./current-train.component.css']
})
export class CurrentTrainComponent implements OnInit {

  constructor(private dialog:MatDialog, private trainingService:TrainingService) { }

  progress:number = 0
  timer:any


  onStop(){
    clearInterval(this.timer)
    this.dialog.open(StopExericeComponent,{data:{
      progress:this.progress
    }}).afterClosed().subscribe((result)=>{
      if(result){
        this.trainingService.cancelledActivity(this.progress)
      }else{
        this.resumeExerice()
      }
    })
  }

  ngOnInit(): void {
    this.resumeExerice()
  }

  resumeExerice(){
    this.timer= setInterval(()=>{
      this.progress = this.progress + 20;
      if(this.progress >= 100){
        this.trainingService.completedActivity()
        return clearInterval(this.timer)
      }
    },1000)
  }

}
