import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { DataService } from '../../data.service';
import { coin, rootObject } from '../../../models/data';
import { InfoCriptoComponent } from '../info-cripto/info-cripto.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, InfoCriptoComponent], // Add FormsModule to the imports array
  template: `
    <div class="card-normal rounded-box">
      <div class="card-body items-center text-center">
        <div class="flex items-center ">
          <h1 class=" text-center text-2xl font-semibold ">Criptomonedas</h1>
          <i class="icon-[tabler--clock-24] w-[64px] h-[64px] ml-1"></i>
          <h1 class=" text-center text-2xl font-bold -mb-7 -ml-0.5 ">hrs</h1>
        </div>
        <h2 class="card-title text-2xl">Ranking de las criptomonedas</h2>
        <div class="indicator">
          <span class="indicator-item badge indicator-center"
            >Elige la criptomoneda de tu interes:
          </span>

          <span class="indicator-item badge badge-secondary ">Top 10</span>

          <select
            id="cripto"
            [(ngModel)]="cripto"
            class="select select-bordered select-md lg:select-lg w-full max-w-xs">
            <option class="prose" disabled selected>
              Selecciona la criptomoneda de interes
            </option>
            @for (item of data; track $index) {
              <option [ngValue]="item" class="prose">
                {{ $index + 1 }}. {{ item.name }}
              </option>
            }
          </select>
        </div>
        @if (cripto) {
          <app-info-cripto [data]="cripto"></app-info-cripto>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class CardComponent {
  cripto!: coin;
  data: coin[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getAssets().subscribe((data: rootObject) => {
      console.log(data);
      this.data = data.data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const { cripto } = changes;
    if (cripto) {
      console.log('cripto', cripto.currentValue);
    }
  }
}
