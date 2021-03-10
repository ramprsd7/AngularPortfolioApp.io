import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeprofileComponent } from './homeprofile/homeprofile.component';

const routes: Routes = [
  { path : '' , component : HomeprofileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
