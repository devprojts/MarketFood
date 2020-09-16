import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-restaurant-detaill',
  templateUrl: './restaurant-detaill.component.html'
})
export class RestaurantDetaillComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService, 
              private route: ActivatedRoute) { }

ngOnInit() {
    this.restaurantsService.restaurantsById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)

  }

}
