import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const imortExportModule = [   
   CommonModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  FormsModule,
  MatListModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule
]
@NgModule({
  declarations: [],
  imports: [
    ...imortExportModule
  ],
  exports : [
    ...imortExportModule
  ]

})
export class ShareModule { }
