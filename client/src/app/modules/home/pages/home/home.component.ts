import { Component } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
