import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.less']
})
export class SummerComponent {
  currentIndex = 0;
  cards = [
    { sale: '50%', imageSrc: '../../assets/chair1.png', productName: 'Patio Red Chair', productPrice: '150 $' },
    { sale: '70%', imageSrc: '../../assets/chair2.png', productName: 'Patio Blue Chair', productPrice: '120 $' },
    { sale: '80%', imageSrc: '../../assets/chair3.png', productName: 'Patio Grey Chair', productPrice: '170 $' },
    { sale: '50%', imageSrc: '../../assets/chair1.png', productName: 'Patio Red Chair', productPrice: '150 $' },
    { sale: '70%', imageSrc: '../../assets/chair2.png', productName: 'Patio Blue Chair', productPrice: '120 $' }
  ];
  showCards: any[] = [];
  isMobile: boolean = false;

  constructor() {
    this.checkMobile();
    this.updateCardVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobile();
    this.updateCardVisibility();
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCardVisibility();
    }
  }

  nextCard() {
    if (this.currentIndex < this.cards.length - (this.isMobile ? 1 : 2)) {
      this.currentIndex++;
      this.updateCardVisibility();
    }
  }

  updateCardVisibility() {
    this.showCards = this.cards.slice(this.currentIndex, this.currentIndex + (this.isMobile ? 1 : 2));
    if (this.showCards.length === 0 && this.cards.length > 0) {
      this.currentIndex = this.cards.length - (this.isMobile ? 1 : 2);
      this.updateCardVisibility();
    }
  }
}






// <section class="summer">
//         <div class="child-summer">
//             <div class="box">
//                 <div class="summer-content">
//                     <div *ngFor="let card of showCards; let i = index" class="card-items">
//                         <div class="card-items">
//                             <div class="sale">SALE <br>{{ card.sale }}</div>
//                             <div class="sale-items">
//                                 <img [src]="card.imageSrc" alt="">
//                                 <p>{{ card.productName }}</p>
//                                 <h2>{{ card.productPrice }}</h2>
//                                 <button class="gbl-btn">ADD TO CART</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="sale-items saleitem">
//                         <div class="card-items">
//                             <div class="background">
//                                 <div class="txt">
//                                     <h2>Summer Sale</h2>
//                                     <p class="underline-spacing">Shop Now</p>
//                                 </div>
//                                 <img src="../../assets/depositphotos_-1.png" alt="">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="arrows">
//                 <img src="../../assets/left.png" alt="" width="18px" (click)="prevCard()">
//                 <img src="../../assets/line.png" alt="" width="18px">
//                 <img src="../../assets/right.png" alt="" width="18px" (click)="nextCard()">
//             </div>
//         </div>
//     </section>