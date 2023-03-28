import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { TestService } from '../services/test.service';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-csv-with-coma',
  templateUrl: './csv-with-coma.component.html',
  styleUrls: ['./csv-with-coma.component.scss']
})
export class CsvWithComaComponent implements OnInit {

  reorderable: boolean = true;
  loadingIndicator: boolean = true;
  rows: any;
  columns = [];
  ColumnMode = ColumnMode;
    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file!: File; // Variable to store file
  
  constructor(private testService : TestService) { }

  ngOnInit(): void {
   
    
  }


readDataRows()
{
    this.testService.getData(this.file).subscribe((data : any) =>{
    console.log(data);
    this.rows = data});
}

readDataColumns()
{ 

  this.testService.getAllAttributes(this.file).subscribe((headers :any)=> {
  this.columns = headers.map((data: any) => {return {name: data , prop :data}}) ;
});
}

onChange(event:any) {
  this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
  this.loading = !this.loading;
  console.log(this.file);
  this.readDataColumns();
  this.readDataRows();
          
}

}


