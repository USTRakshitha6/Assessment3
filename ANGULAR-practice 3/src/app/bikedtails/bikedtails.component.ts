import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bikedtails',
  templateUrl: './bikedtails.component.html',
  styleUrls: ['./bikedtails.component.css']
})
export class BikedtailsComponent implements OnInit {

  @Input() bikedetails: any='';


  constructor() { }

  ngOnInit() {
  }

}
