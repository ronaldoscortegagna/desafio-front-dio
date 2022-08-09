import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Showroom } from './model/showroom';
import { ShowroomService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cozinha: any;
  showroomService!: ShowroomService;

  constructor( showroom : Showroom) {
    this.showroomService = this.showroomService;
   }

  ngOnInit(): void {

    this.cozinha = this.showroomService.getShowroom().subscribe((data => {
      this.cozinha = data;
      console.log(this.cozinha);
    }))
  }

}
