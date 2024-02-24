import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss',
})
export class LessonsComponent {}
