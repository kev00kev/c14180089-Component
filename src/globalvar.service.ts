import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private notes:Array<string>=[];
  constructor() { }
  public setnote(notess : Array<string>){
      this.notes = notess;
  }
  public getnote(){
    return this.notes;
  }

}