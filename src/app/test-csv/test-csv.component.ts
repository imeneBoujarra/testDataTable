import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../services/test.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-test-csv',
  templateUrl: './test-csv.component.html',
  styleUrls: ['./test-csv.component.scss']
})
export class TestCsvComponent implements OnInit {
  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent | undefined;

  reorderable: boolean = true;
  loadingIndicator: boolean = true;
  rows: any[] = [];
  columns = [
    { prop: 'id' },
    { prop: 'dateef' },
    { prop: 'credit' },
    { prop: 'debit' }
  ];
  page = {
    size: 10,
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0
  };

  constructor(private testService : TestService) { }

  ngOnInit(): void {
   // this.testService.getAll().subscribe(data=>{ this.rows = data})
  }
  onPageChange(event: any) {
    this.page.pageNumber = event;
  }

}
