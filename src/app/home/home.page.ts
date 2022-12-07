import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public slideOpts = {
    slidesPerView: 2.5,
    spaceBetween:0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

  }
  
  constructor() { }

  ngOnInit() {
  }

}
