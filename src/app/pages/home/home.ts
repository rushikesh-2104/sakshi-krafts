import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Categories } from "../../components/categories/categories";
import { BestSellers } from "../../components/best-sellers/best-sellers";
import { About } from '../about/about';
import { Testimonials } from "../../components/testimonials/testimonials";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";


@Component({
  selector: 'app-home',
  imports: [Hero, Categories, BestSellers, About, Testimonials, Footer, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
