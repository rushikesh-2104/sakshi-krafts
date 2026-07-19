import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  form = {

    name: '',

    email: '',

    phone: '',

    message: ''

  };

  sendMessage() {

    const phone = '919326562042'; // Replace

    const text = `Hello Sakshi Krafts! 👋

Name : ${this.form.name}

Email : ${this.form.email}

Phone : ${this.form.phone}

Message :

${this.form.message}`;

    window.open(

      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,

      '_blank'

    );

  }

}