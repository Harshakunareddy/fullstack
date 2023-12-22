import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit{

  infoRecieved1: string[] = [];
  infoRecieved2: string[] = [];
  infoRecieved3: string[] = [];

  getInfoFromServiceClass1(){
    this.infoRecieved1 = this.rservice.getInfo1()
  }

  getInfoFromServiceClass2(){
    this.infoRecieved2 = this.rservice.getInfo2()
  }

  getInfoFromServiceClass3(){
    this.infoRecieved3 = this.rservice.getInfo3()
  }


  constructor(private rservice:RecordsService){

  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
