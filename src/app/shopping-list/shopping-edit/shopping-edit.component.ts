import { Component, OnInit,EventEmitter,Output,ViewChild,ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient : Ingredient;
  @ViewChild('amountInput') amountInput : ElementRef;
  @ViewChild('nameInput')  nameInput : ElementRef;

@Output() ingredentlistener = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredents (): void{
    this.ingredient  = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
    this.ingredentlistener.emit(this.ingredient);

         
  }

}
