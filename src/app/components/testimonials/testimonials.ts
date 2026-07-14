import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
testimonials = [
  {
    name:'Neha Sharma',
    image:'/images/user1.jpg',
    review:'Absolutely in love with the bouquet!'
  },
  {
    name:'Priya Mehta',
    image:'/images/user2.jpg',
    review:'The custom keychain was so cute'
  },
  {
    name:'Ananya Verma',
    image:'/images/user3.jpg',
    review:'Best handmade gifts ever'
  }
]
}
