import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { PracticalComponent } from './practical/practical.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

/*const appRoutes: Routes = [
  {path:"", component: },

];*/
@NgModule({
  declarations: [
    AppComponent,
    PracticalComponent,
    ConfirmComponent,
    EditComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
