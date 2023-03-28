import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TestCsvComponent } from './test-csv/test-csv.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CsvWithComaComponent } from './csv-with-coma/csv-with-coma.component';

@NgModule({
  declarations: [
    AppComponent,

    DataTableComponent,
    TestCsvComponent,
    CsvWithComaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    NgxPaginationModule,
    
  ],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
