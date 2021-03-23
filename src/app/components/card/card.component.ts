import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /* Variable for save the data info from DataService array */
  userDatas:any=[];
  
  show:boolean= true;

  action="Hide";


  constructor(private data:DataService) { }

  ngOnInit(): void {

    this.data.get().subscribe(data =>{
      this.userDatas = data;
      console.log(data)
    })
  }

  

}
