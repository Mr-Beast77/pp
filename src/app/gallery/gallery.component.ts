/*
** @author pixie-codes
** Gallery - carousel with screen-shots
*/
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  slideOne:string[] = ["./assets/images/slide_1.jpg","./assets/images/slide_2.jpg","./assets/images/slide_3.jpg","./assets/images/slide_4.jpg",
"./assets/images/slide_5.jpg","./assets/images/slide_6.jpg", "./assets/images/slide_7.jpg","./assets/images/slide_8.jpg","./assets/images/slide_9.jpg",
"./assets/images/slide_10.jpg","./assets/images/slide_11.jpg","./assets/images/slide_12.jpg","./assets/images/slide_13.jpg", "./assets/images/slide_14.jpg"];

  slideTwo:string[] =  ["./assets/images/slide_15.jpg","./assets/images/slide_16.jpg","./assets/images/slide_17.jpg","./assets/images/slide_18.jpg",
  "./assets/images/slide_19.jpg","./assets/images/slide_20.jpg", "./assets/images/slide_21.jpg","./assets/images/slide_22.jpg","./assets/images/slide_23.jpg",
  "./assets/images/slide_24.jpg","./assets/images/slide_25.jpg","./assets/images/slide_26.jpg","./assets/images/slide_27.jpg", "./assets/images/slide_28.jpg"];

  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  

  ngOnInit(): void {
  }
  
}
