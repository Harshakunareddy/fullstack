import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1:string[] = ["adam",'123',"abc.net"]
  info2:string[] = ["adam2",'1234',"abc5.net"]
  info3:string[] = ["adam3",'1235',"abc6.net"]

  getInfo1():string[]{
    return this.info1
  }

  getInfo2():string[]{
    return this.info2
  }

  getInfo3():string[]{
    return this.info3
  }
  constructor() { }
}
