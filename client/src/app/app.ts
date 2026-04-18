import { Component } from '@angular/core';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { Footer } from './components/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Services, Gallery, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
