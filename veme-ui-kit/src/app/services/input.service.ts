import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private inputValue = new BehaviorSubject<string>('');
  currentValue = this.inputValue.asObservable();

  updateValue(value: string) {
    this.inputValue.next(value);
  }
}
