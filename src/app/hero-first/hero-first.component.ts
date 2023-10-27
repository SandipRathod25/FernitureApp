import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-first',
  templateUrl: './hero-first.component.html',
  styleUrls: ['./hero-first.component.less']
})
export class HeroFirstComponent {
  currentImage: string = "../../assets/title1.png";

  changeImage(imageNumber: number) {
    this.currentImage = `../../assets/title${imageNumber}.png`;
  }
}
