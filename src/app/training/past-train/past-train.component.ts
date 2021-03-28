import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TrainingService } from '../training.service';
import { Exerice } from '../exerice.model';
import { MatSort, matSortAnimations } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-past-train',
  templateUrl: './past-train.component.html',
  styleUrls: ['./past-train.component.css']
})
export class PastTrainComponent implements OnInit, AfterViewInit {

  constructor(private trainingExerice:TrainingService) { }

  ngOnInit(): void {
    this.trainingExerice.fetchPastDataFromDatabase()
    this.trainingExerice.subsTableData.subscribe((exerices:Exerice[])=>{
      this.dataSource.data = exerices
    })
  }

  applyFilter(value:string){
    this.dataSource.filter = value.trim().toLowerCase()
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  dataSource = new MatTableDataSource<Exerice>()
  @ViewChild(MatSort) sort
  @ViewChild(MatPaginator) paginator
  displayedColumns = ['date', 'name', 'duration', 'calaries', 'state']

}
