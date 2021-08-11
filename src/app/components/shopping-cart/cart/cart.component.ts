import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  cartItems = [
    {id:1 ,productId:1, productName:1, qty:7 ,price:490},
    {id:2 , productId:2, productName:2, qty:17 ,price:477},
    {id:3 ,productId:3, productName:3, qty:8 ,price:40},
    {id:4 ,productId:4, productName:4, qty:9 ,price:40},
    {id:5 , productId:5,productName:5, qty:7 ,price:400},
    {id:6 ,productId:6, productName:6, qty:3 ,price:450},
   
  ];

cartTotal = 0

constructor() { }

  ngOnInit(): void {

    this.cartItems.forEach(item =>{
      this.cartTotal +=(item.qty * item.price)
    })
  }

}
