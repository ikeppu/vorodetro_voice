import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum CardPriceEnum {
  STANDART,
  PREMIUM,
  GODOVOJ,
}

@Component({
  selector: 'app-payment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.scss',
})
export class PaymentCardComponent {
  activeIndex: number = 0;

  cardPrice: CardPriceEnum = CardPriceEnum.STANDART;
  cardPriceEnum = CardPriceEnum;
}
