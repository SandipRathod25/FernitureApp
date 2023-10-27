import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent {
  cards: Array<any> = [
    {
      img: "../../assets/ia_-5.png"
    },
    {
      img: "../../assets/ia_-4.png"
    },
    {
      img: "../../assets/ia_-6.png"
    },
    {
      img: "../../assets/ia_-17.png"
    },
    {
      img: "../../assets/ia_-20.png"
    },
    {
      img: "../../assets/ia_-21.png"
    },
    {
      img: "../../assets/ia_400000240.png"
    },
    {
      img: "../../assets/ia_300000021.png"
    },
    {
      img: "../../assets/ia_300000008.png"
    },
  ]
}
