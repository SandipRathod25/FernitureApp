import { Component } from '@angular/core';

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.less']
})
export class SofaComponent {
  currentImage: string = "../../assets/sofa1.png";
  currentTitle = "Sofa Carnabi Red";
  currentContent = "Red ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod voluptua. At vero eos et accusam et justo duo dolores";
  sofaSet: Array<any> =
    [
      { id: 1, imgURL: "../../assets/sofa1.png", title: "Sofa Carnabi Red", content: "Red ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod voluptua. At vero eos et accusam et justo duo dolores" },
      { id: 2, imgURL: "../../assets/sofa2.png", title: "Sofa Carnabi Green", content: "Green ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod voluptua. At vero eos et accusam et justo duo dolores" },
      { id: 3, imgURL: "../../assets/sofa3.png", title: "Sofa Carnabi Blue", content: "Blue ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod voluptua. At vero eos et accusam et justo duo dolores" },
    ]

  changeImage(imageNumber: number) {
    this.currentImage = `../../assets/sofa${imageNumber}.png`;
    this.currentTitle = this.sofaSet[imageNumber - 1].title;
    this.currentContent = this.sofaSet[imageNumber - 1].content;
  }
  counter: number = 1;


  navigateLeft() {
    this.counter--;
    if (this.counter == 0) {
      this.counter = 3
    }
    this.changeImage(this.counter)
  }
  navigateRight() {
    this.counter++;
    this.changeImage(this.counter)
    if (this.counter == 3) {
      this.counter = 0
    }
  }
}