import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvWithComaComponent } from './csv-with-coma/csv-with-coma.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = 
[
  {path:'datatTable' , component:DataTableComponent},
  {path:'testCsv' , component:CsvWithComaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ }
