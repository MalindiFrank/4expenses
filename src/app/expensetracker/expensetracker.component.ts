import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-expensetracker',
  standalone: true,
  imports: [FormsModule, NgFor,NgClass],
  templateUrl: './expensetracker.component.html',
  styleUrl: './expensetracker.component.css'
})
export class ExpensetrackerComponent {

  expenses : any [] = [];
  expenseItem : string =  '';
  amount: number = 0;
  expenseType :string = ''
  totalExpense : number = 0 ;
  totalIncome :number = 0
  net : number  = 0 

  add (){

    if (this.expenseType && this.expenseItem && this.amount){
      
      if (this.expenseType == "income"){
        this.totalIncome += this.amount
        
      } else {
        this.totalExpense += this.amount
      }
      
      let expense = {
        expenseItem :this.expenseItem,
        amount:this.amount ,
        expenseType : this.expenseType
      }
      
      this.expenses.push(expense);
      console.log(this.expenses);
      this.expenseItem  =  '';
      this.amount = 0;
    }

  }

}
