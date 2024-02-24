import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

type state = 'mobile-menu-full';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state$ = new Subject<{ state: state; status: boolean }>();

  get() {
    return this.state$.asObservable();
  }

  set(state: { state: state; status: boolean }) {
    this.state$.next(state);
  }
}
