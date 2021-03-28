import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-exerice',
  templateUrl: './stop-exerice.component.html',
  styleUrls: ['./stop-exerice.component.css']
})
export class StopExericeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public getData) { }

  ngOnInit(): void {
  }

}
