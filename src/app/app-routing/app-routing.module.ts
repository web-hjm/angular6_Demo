import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyNavComponent } from '../my-nav/my-nav.component';

const routes:Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'first'},
  {path: 'first', component: MyNavComponent}
] 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
