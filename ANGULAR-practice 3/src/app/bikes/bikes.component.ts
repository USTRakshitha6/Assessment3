import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  bikeData: any='';

  bikes = [
            {
              brand: "KTM",
               img:'https://cdn.pixabay.com/photo/2015/05/20/07/57/grassland-774929__340.jpg' ,
               desciption: 'it is KTM.............'
              
            },

            {
              brand: "royal enfield",
              img:'https://cdn.pixabay.com/photo/2017/11/23/04/08/royal-enfield-2972008__340.jpg',
              desciption:'it is royal enfield.......'
            },
            {
              brand: "pulsarRS200",
              img:'https://cdn.pixabay.com/photo/2019/05/10/06/26/rs200-4192863__340.jpg',
              description: 'it is pulsar.......'
            }
          ]
            
  

  constructor() { }

  sendBike(bike){
    this.bikeData=bike;
  }

  ngOnInit() {
  }

}
