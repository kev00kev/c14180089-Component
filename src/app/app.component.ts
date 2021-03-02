import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

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

  namaglobal;

  note = [
    {judul:'',isi:'',tanggal:'',action:''}
  ];

  //judul = [];
  //isi = [];
  //tanggal = [];
  iJudul = '';
  iIsi = '';
  iTanggal = '';
  iAction = '';
 
  ADDNOTE(){
    this.note.push({judul:this.iJudul,isi:this.iIsi,tanggal:this.iTanggal,action:'0'});
  }
  SAVE(){

  }
}
