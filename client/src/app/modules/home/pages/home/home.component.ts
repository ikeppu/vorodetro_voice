import { Component } from '@angular/core';
import { DividerComponent } from '../../../../shared/components/divider/divider.component';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from '../../components/presentation/presentation.component';
import { InfoComponent } from '../../components/info/info.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { PaymentCardComponent } from '../../components/payment-card/payment-card.component';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DividerComponent,
    PresentationComponent,
    InfoComponent,
    TimelineComponent,
    PaymentCardComponent,
    ContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
