import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  activeIndex: number = 0;
  isOpened: boolean = false;

  constructor(private readonly _state: StateService) {}

  openMenu() {
    this.isOpened = !this.isOpened;
    this._state.set({ state: 'mobile-menu-full', status: this.isOpened });
  }
}
