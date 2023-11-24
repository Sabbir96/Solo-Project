import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.css']
})
export class RestaurentsComponent {

  foods:Food[]=[];

  
}
