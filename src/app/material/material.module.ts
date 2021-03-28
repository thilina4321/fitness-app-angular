import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule} from '@angular/material/button'
import { MatInputModule} from '@angular/material/input'
import { MatTabsModule} from '@angular/material/tabs'
import { MatCardModule} from '@angular/material/card'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatIconModule} from '@angular/material/icon'
import { MatSelectModule} from '@angular/material/select'
import { MatListModule} from '@angular/material/list'
import { MatDialogModule} from '@angular/material/dialog'
import { MatTableModule} from '@angular/material/table'
import { MatSortModule} from '@angular/material/sort'
import { MatPaginatorModule} from '@angular/material/paginator'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule { }
