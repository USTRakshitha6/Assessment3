import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
bikeData: any='';
  bikes = [
    {barand:'KTM',
      img:  'https://cdn.pixabay.com/photo/2017/06/26/22/43/ktm-2445495__340.jpg',
      description:'fajakjgbkjabgkgnkgnklgml'
  },
  {
    barand:'Royal Enfield',
      img:  'https://cdn.pixabay.com/photo/2017/06/26/22/43/ktm-2445495__340.jpg',
      description:'faljflksg'
  },
  {
    barand:'TVS Apache 180',
      img:  'https://cdn.pixabay.com/photo/2017/06/26/22/43/ktm-2445495__340.jpg',
      description:'faljflksg'
  },
  {
    barand:'Bjaj Donar',
      img:  'https://cdn.pixabay.com/photo/2017/06/26/22/43/ktm-2445495__340.jpg',
      description:'faljflksg'
  },
  {
    barand:'JAWA',
      img:  'https://cdn.pixabay.com/photo/2017/06/26/22/43/ktm-2445495__340.jpg',
      description:'faljflksg'
  }];


  

  constructor() { }
  sendBike(bike){
    this.bikeData=bike;
  }

  ngOnInit() {
  }

}
