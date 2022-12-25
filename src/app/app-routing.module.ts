import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogWelcomeComponent } from './blog-welcome/blog-welcome.component';

const routes: Routes = [
  { path: '', component: BlogWelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
