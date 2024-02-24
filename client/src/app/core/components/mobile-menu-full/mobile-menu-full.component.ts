import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-menu-full',
  standalone: true,
  imports: [],
  templateUrl: './mobile-menu-full.component.html',
  styleUrl: './mobile-menu-full.component.scss',
})
export class MobileMenuFullComponent implements OnInit {
  observer$: Subscription;
  isOpened: boolean = false;
  constructor(private readonly _state: StateService) {}

  ngOnInit(): void {
    this.observer$ = this._state.get().subscribe((r) => {
      if (r.state === 'mobile-menu-full') this.isOpened = r.status;
    });
  }
}
