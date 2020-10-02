import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantsService } from './restaurants/restaurants.service';
import { MenuComponent } from './restaurant-detaill/menu/menu.component';
import { MenuItemComponent } from './restaurant-detaill/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detaill/shopping-cart/shopping-cart.component';
import { RestaurantDetaillComponent } from './restaurant-detaill/restaurant-detaill.component';
import { ReviewsComponent } from './restaurant-detaill/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detaill/shopping-cart/shopping-cart.service';
import { OrderService } from './order/order.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,    
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    RestaurantDetaillComponent,
    ReviewsComponent,    
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, 
              ShoppingCartService, 
              OrderService,
              {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule {}