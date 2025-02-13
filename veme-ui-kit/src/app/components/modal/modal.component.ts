import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>()

  onClose() {
    this.closeModal.emit();
  }
}
