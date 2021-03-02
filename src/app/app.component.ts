import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = ', Start to add note';
  constructor(
    private router : Router
  ){}
  judul = "";
  isi = "";
  tanggal = "";
 
  ADDNOTE(){
     this.router.navigate(["/halaman2"]);
  }
}
