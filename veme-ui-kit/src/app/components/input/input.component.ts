import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string = 'Input Label';
  @Input() placeholder: string = 'Input Placeholder';
  @Input() type: string = 'text';
  @Output() inputChange = new EventEmitter<string>()

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputChange.emit(value);
  }
}
