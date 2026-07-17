import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  // WhatsApp

  openWhatsapp() {

    window.open(
      'https://wa.me/917208553533',
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