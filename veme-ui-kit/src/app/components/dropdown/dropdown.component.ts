import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() label: string = '';
  @Input() items: string[] = [];
  @Input() selectedItem: string = '';
  @Output() itemSelected = new EventEmitter<string>();

  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
    this.isOpen = false;
  }

}
