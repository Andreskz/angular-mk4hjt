import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Pez Koi';
  Siguiendo = 50001;
  Seguidores = 10002;
  cont = 0;
  strengths = [{ text: 'English', level: 'Basic' }, { text: 'HTML', level: 'High' }, { text: 'Testing', level: 'Low' }];
  
  boton(){
   this.strengths = [{ text: 'English', level: 'Basic' }, { text: 'HTML', level: 'High' }, { text: 'Testing', level: 'Low' }, { text: 'correo', level: 'Correo' }, { text: 'profesion', level: 'ingeniero' }];

   this.cont=3; 
  }
 botonuno(){
   if(this.cont==3){
this.strengths = [{ level: 'Correo',text: 'Correo' }, { text: 'profesion', level: 'ingeniero' }];
this.cont=2;
}
else if(this.cont==2) {
this.strengths = [];
this.cont=1;
this.people = [];
};

//crear un contador para que muestre y quite las propiedades
//this.cont = this.cont+1

/*/if 
(this.cont == 1){
this.strengths = [{ level: 'Correo',text: 'Correo' }, { text: 'profesion', level: 'ingeniero'}];
}
//else 
{ if(this.cont==2;
this.strengths = [{ level: 'Correo',text: 'Correo' }, { text: 'profesion', level: 'ingeniero'}];
show=false;)
}/*/
 }
 

  people = [
    {
      "name": "Vanessa M.",
      "age": 16,
      "color": 'red'
    },
    {
      "name": "Carlos Angulo",
      "age": 25,
      "color": 'green'
    },
    {
      "name": "Pez",
      "age": 21,
      "color": 'pink',
  
    }
  ];
 }

