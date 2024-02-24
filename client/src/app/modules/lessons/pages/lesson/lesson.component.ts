import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent implements OnInit {
  lessonNumber;
  constructor(private readonly _router: ActivatedRoute) {}

  ngOnInit(): void {
    this.lessonNumber = this._router.snapshot.params['lesson'];
  }
}
