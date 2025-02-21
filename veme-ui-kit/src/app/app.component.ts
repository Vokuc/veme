import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';
import { InputService } from './services/input.service';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    ModalComponent,
    CardComponent,
    ButtonComponent,
    InputComponent,
    DropdownComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'veme-ui-kit';
  isModalOpen = false;
  username: string = '';

  fruits: string[] = ['Apple', 'Banana', 'Orange', 'Mango'];
  selectedFruit: string = '';
  
  constructor(private inputService: InputService) {}

  ngOnInit() {
    this.inputService.currentValue.subscribe(value => {
      this.username = value;
    });
  }

  onButtonClick() {
    alert('Button Clicked');
  }

  onInputChange(value: string) {
    console.log('Input value:', value);
  }


  onItemSelected(item: string) {
    this.selectedFruit = item;
  }
}
