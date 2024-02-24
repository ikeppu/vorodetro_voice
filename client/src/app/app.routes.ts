import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { CabinetComponent } from './modules/cabinet/pages/cabinet/cabinet.component';
import { LessonsComponent } from './modules/lessons/pages/lessons/lessons.component';
import { LessonComponent } from './modules/lessons/pages/lesson/lesson.component';
import { FaqComponent } from './modules/faq/pages/faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  {
    path: 'personal-cabinet',
    component: CabinetComponent,
  },
  {
    path: 'personal-cabinet/lessons',
    component: LessonsComponent,
    children: [{ path: ':lesson', component: LessonComponent }],
  },
];
