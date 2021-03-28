import { Injectable } from '@angular/core';
import { Exerice } from './exerice.model';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({providedIn:'root'})
export class TrainingService{

  constructor(private db:AngularFirestore){}

  subsExerice = new Subject<Exerice>()
  subsFetchExerice = new Subject<Exerice[]>()
  subsTableData = new Subject<Exerice[]>()
  fetchSubscription:Subscription[] = []
  exerice:Exerice
  allExerice:Exerice[] = []

  availableExerices:Exerice[] = []

  fetchAvailableExerices(){
    this.fetchSubscription.push(this.db.collection('availableExerices').snapshotChanges()
    .pipe(
      map((docArray)=>{
        return docArray.map(doc=>{
          return {
            id:doc.payload.doc.id,
            name:doc.payload.doc.data().name,
            duration:doc.payload.doc.data().duration,
            calaries:doc.payload.doc.data().calaries,
          }
        })
      })
    ).subscribe((exerices)=>{
      this.availableExerices = exerices
      this.subsFetchExerice.next([...this.availableExerices])
    }))
  }

  getSelectedExerice(id:string){
    this.exerice = this.availableExerices.find((ex)=> ex.id == id)
    this.subsExerice.next({...this.exerice})
  }

  completedActivity(){
    this.sendCancelledorComplterdDataToDatabase({...this.exerice,
      state:'complete',
      date: new Date().setFullYear(new Date().getFullYear())
    })
    this.exerice = null
    this.subsExerice.next(null)
  }

  cancelledActivity(progress:number){
    this.sendCancelledorComplterdDataToDatabase({...this.exerice,
      state:'canceled',
      date: new Date().setFullYear(new Date().getFullYear()),
      calaries: this.exerice.calaries * (progress)/100,
      duration: this.exerice.duration * (progress)/100

    })
    this.exerice = null
    this.subsExerice.next(null)
  }

  fetchPastDataFromDatabase(){
    this.fetchSubscription.push(this.db.collection('pastData').valueChanges()
    .subscribe((exerices:Exerice[])=>{
      this.allExerice = exerices
      this.subsTableData.next(exerices)
    }))
  }

  cancelFetchData(){
    this.fetchSubscription.forEach((data)=>data.unsubscribe())
  }

  sendCancelledorComplterdDataToDatabase(exerice:Exerice){
    this.db.collection('pastData').add(exerice)
  }

  getCompletedOrCanceledData(){
    return this.allExerice.slice()
  }
}
