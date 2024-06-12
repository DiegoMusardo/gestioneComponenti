import { Component, Input } from '@angular/core';
import { Transazione } from '../models/transazione';

@Component({
  selector: 'app-transazione',
  templateUrl: './transazione.component.html',
  styleUrl: './transazione.component.css'
})
export class TransazioneComponent {
  @Input()
  transazione?: Transazione;
}
