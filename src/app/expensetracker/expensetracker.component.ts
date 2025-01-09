import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

export interface Item {
  title: string | null;
  amount: number | null;
  date: string | null;
  itemType: string;
  category: string;
  payMethod: string;
  description: string | null;
}

@Component({
  selector: 'app-expensetracker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './expensetracker.component.html',
  styleUrl: './expensetracker.component.css',
})
export class ExpensetrackerComponent {
  totalExpense: number = 0;
  totalIncome: number = 0;
  net: number = 0;

  title: string | null = null;
  amount: number | null = null;
  date: string | null = null;
  itemType: string = '';
  category: string = '';
  payMethod: string = '';
  description: string | null = null;

  items: Item[] = [];
  categories = [
    'Food',
    'Rent',
    'Transport',
    'Insurance',
    'Personal Care',
    'Online',
    'Household',
    'Entertainment',
    'Other',
  ];
  expenseTypes = ['Income', 'Expense'];
  paymentMethods = [
    'Cash Payment',
    'Online / EFT',
    'Credit Card',
    'Debit Card',
  ];

  add() {
    if (this.itemType && this.title && this.amount) {
      if (this.itemType == 'Income') {
        this.totalIncome += this.amount;
      } else {
        this.totalExpense += this.amount;
      }

      let item: Item = {
        title: this.title,
        amount: this.amount,
        date: this.date? this.date : new Date().toISOString(),
        itemType: this.itemType,
        category: this.category,
        payMethod: this.payMethod,
        description: this.description,
      };

      this.items.push(item);
      console.log(this.items);
      this.title = '';
      this.amount = null;
    }
  }
}
