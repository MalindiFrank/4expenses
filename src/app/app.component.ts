import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgStyle, NgClass, NgIf, NgFor } from '@angular/common';
;import { ExpensetrackerComponent } from './expensetracker/expensetracker.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgStyle, NgClass, NgIf, NgFor, ExpensetrackerComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title : string = 'expense-tracker';
  greeting: string = 'Hello  world';
  isDisable: boolean = true;

  username: string = '';

  isActive: boolean = true;
  showContent : boolean =  true ;

  nums : any [ ] = [1, 3, 5,, 60 , 35];



  dynamicCss = {
    color: 'blue',
    fontSize: '2rem',
  };

  onClick() {
    alert(this.username);
  }

  toogle() {
    if (this.isActive) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
