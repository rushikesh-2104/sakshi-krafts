import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-orders',
  imports: [FormsModule],
  templateUrl: './custom-orders.html',
  styleUrl: './custom-orders.css',
})
export class CustomOrders {

  form = {
    name: '',
    phone: '',
    category: '',
    color: '',
    budget: '',
    occasion: '',
    description: ''
  };

  sendToWhatsapp() {

    const phone = '919326562042'; // Replace with your WhatsApp number

    const message = `Hello Sakshi Krafts! 👋

I'd like to place a Custom Order.

👤 Name : ${this.form.name}

📱 Phone : ${this.form.phone}

🎁 Category : ${this.form.category}

🎨 Preferred Color : ${this.form.color}

💰 Budget : ₹${this.form.budget}

🎉 Occasion : ${this.form.occasion}

📝 Description :
${this.form.description}

I'll send my reference image after this message.

Thank you ❤️`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );

  }

}