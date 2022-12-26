import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogWelcomeComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: '', component: BlogWelcomeComponent },
  { path: '**', component: BlogWelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
