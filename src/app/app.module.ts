import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
//To use ngModel
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProgrammerComponent } from './programmer/programmer.component';

//services
import { ProgrammerService } from './programmer.service';
import { MessageProgrammerService } from './message-programmer.service'

//Bootstrap modals
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

//Routes
const routes: Routes = [
  {path: '', component: ProgrammerComponent },
  {path: 'add', component: ProgrammerComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProgrammerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbAlertModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProgrammerService, MessageProgrammerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
