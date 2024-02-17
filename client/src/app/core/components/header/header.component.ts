import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matDarkMode, matLightMode } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ matDarkMode, matLightMode })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  changeTheme() {
    let currentThere = localStorage['theme'];
    if (currentThere == 'dark') {
      localStorage['theme'] = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage['theme'] = 'dark';
      document.documentElement.classList.add('dark');
    }
  }
}
