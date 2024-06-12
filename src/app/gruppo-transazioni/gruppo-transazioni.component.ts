import { Component } from '@angular/core';
import { Transazione } from '../models/transazione';
import { TRANSAZIONI } from '../data/transazioni';

@Component({
  selector: 'app-gruppo-transazioni',
  templateUrl: './gruppo-transazioni.component.html',
  styleUrl: './gruppo-transazioni.component.css'
})
export class GruppoTransazioniComponent {
  transazioni: Transazione[] = TRANSAZIONI;
}
