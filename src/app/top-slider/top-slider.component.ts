import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: []
})
export class TopSliderComponent {

  constructor() {  }

  public intervalNumber: number = 300000;
  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides: boolean = false;

  ngOnInit() {
    this.addSlide();
  }

  addSlide() {
    this.slides.push(
      {
        image: "assets/images/slider1_opt.jpg",
        heading: "slide 1",
        text: "asasd asd  asdfkjhsdf sdfhjksf sdfkljs sdf sdf sf",
        link: "http://www.google.com"
      },
      {
        image: "assets/images/slider2_opt.jpg",
        heading: "slide 2",
        text: "asasd asd  asdfkjhsdf sdfhjksf sdfkljs sdf sdf sf",
        link: "http://www.google.com"
      },
      {
        image: "assets/images/slider3_opt.jpg",
        heading: "slide 3",
        text: "asasd asd  asdfkjhsdf sdfhjksf sdfkljs sdf sdf sf",
        link: "http://www.google.com"
      },
      {
        image: "assets/images/slider4_opt.jpg",
        heading: "slide 4",
        text: "asasd asd  asdfkjhsdf sdfhjksf sdfkljs sdf sdf sf",
        link: "http://www.google.com"
      },
      {
        image: "assets/images/slider5_opt.jpg",
        heading: "slide 5",
        text: "asasd asd  asdfkjhsdf sdfhjksf sdfkljs sdf sdf sf",
        link: "http://www.google.com"
      }
    )
  }


}
