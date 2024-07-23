import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer
      class="footer footer-center bg-base-300 text-base-content p-4 bottom-full">
      <aside>
        <p>
          Copyright © {{ year }} - All right reserved by ACME Industries Ltd
        </p>
      </aside>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
