import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  // WhatsApp

  openWhatsapp() {

    window.open(
      'https://wa.me/919326562042',
      '_blank'
    );

  }

  // Instagram

  openInstagram() {

    window.open(
      'https://www.instagram.com/sakshi.krafts',
      '_blank'
    );

  }

  // Email

  sendMail() {

    window.location.href =
      'mailto:hello@sakshikrafts.com';

  }

}