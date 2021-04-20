import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/list'},
  {path:'list', component:ListEmpleadosComponent},
  {path:'create', component:CreateEmpleadosComponent},
  {path:'edit/:id', component:CreateEmpleadosComponent},



  {path:'**', redirectTo:'/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
