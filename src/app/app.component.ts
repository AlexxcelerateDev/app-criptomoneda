import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FooterComponent],
  template: ` <main class="container mx-auto mt-10"><app-card /></main> `,
})
export class AppComponent {
  title = 'app-criptomoneda';
}
