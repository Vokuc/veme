import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputService } from '../../services/input.service';

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

  constructor(private inputService: InputService) {}

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputService.updateValue(value);
  }
}
