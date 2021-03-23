import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  dataUser=[{id:1,name:'Daniel Catalin',img:'../images/perfil.jpg',email:'daniel.catalin@outlook.es',phone:"+34642412483",
             location:'Madrid, MAD',city:"Coslada",street:'Private info',interactions:'10',
             distance:"12,9 km",time:"43 min",price:"34,20EUR",energy:"12,4 kwh"},
             
             {id:2,name:'Mona Lisa',img:'../images/mona.jpg',email:'mona.lisa@outlook.es',phone:"+55534124222",
             location:'Manhattan, NY',city:"Chicago",street:'Barbara Street',interactions:'8',
             distance:"9,3 km",time:"31 min",price:"25,5EUR",energy:"10,4 kwh"}
            ];

  constructor() { }

  /* Get Method for return info from dataUser array, used into CardComponent to subscribe and HTML binding */
  get(){
    return of(this.dataUser);
  }
}
