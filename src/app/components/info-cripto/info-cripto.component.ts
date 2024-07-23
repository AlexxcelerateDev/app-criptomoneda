import { Component, Input, SimpleChange } from '@angular/core';
import { coin } from '../../../models/data';
import { FormControl } from '@angular/forms';
import { CurrencyPipe, DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-info-cripto',
  standalone: true,
  imports: [JsonPipe, DecimalPipe, CurrencyPipe],
  template: `
    @if (!isVisible) {
      <table class="mt-10 table-lg prose animate-fade-down animate-ease-out">
        <tbody>
          <tr>
            <th>Rank</th>
            <td>{{ data.rank }}</td>
          </tr>
          <tr>
            <th>Nombre</th>
            <td>{{ data.name }}</td>
          </tr>
          <tr>
            <th>Suministro</th>
            <td>{{ data.supply | currency: 'USD' : 'symbol' : '1.0-2' }}</td>
          </tr>
          <tr>
            <th>Precio</th>
            <td>{{ data.priceUsd | currency: 'USD' : 'symbol' : '1.0-2' }}</td>
          </tr>
          <tr>
            <th>Capitalización de Mercado</th>
            <td>
              {{ data.marketCapUsd | currency: 'USD' : 'symbol' : '1.0-2' }}
            </td>
          </tr>
          <tr>
            <th>Volumen en 24 horas</th>
            <td>
              {{ data.volumeUsd24Hr | currency: 'USD' : 'symbol' : '1.0-2' }}
            </td>
          </tr>
        </tbody>
      </table>
    }
  `,
  styles: ``,
})
export class InfoCriptoComponent {
  isVisible = false;
  @Input() data!: coin;
  toggleComponent() {
    this.isVisible = true;
    setTimeout(() => (this.isVisible = false));
    console.log('InfoCriptoComponent toggled');
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log('InfoCriptoComponent changed', changes);
    if (changes['data']) {
      this.toggleComponent();
    }
  }
}
