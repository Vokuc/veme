import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = 'Card Title';
  @Input() description: string = 'Card Description';
  @Input() imageUrl: string = 'https://via.placeholder.com/150';
  @Input() buttonText: string = 'Learn More';
  @Input() buttonType: string = 'primary';


}
