import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = 'Card Title';
  @Input() description: string = 'Card Description';
  @Input() imageUrl: string = 'https://via.placeholder.com/150';
  @Input() buttonText: string = 'Learn More';
  @Input() buttonType: string = 'primary';
  @Input() cardClass: string = '';
  @Output() buttonClick = new EventEmitter<void>();
}