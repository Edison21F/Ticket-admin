import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface Seat {
  id: string;
  status: 'available' | 'occupied';
  passenger?: string;
  purchaseDate?: Date;
}

@Component({
  selector: 'app-transporte',
  standalone: false,
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.scss'],
  animations: [
    trigger('seatAnimation', [
      state('available', style({
        transform: 'scale(1)',
      })),
      state('occupied', style({
        transform: 'scale(1)',
      })),
      transition('available => occupied', [
        animate('0.5s', style({ backgroundColor: '#ff6161', transform: 'scale(1.1)' })),
        animate('0.5s', style({ transform: 'scale(1)' })),
      ]),
      transition('occupied => available', [
        animate('0.5s', style({ backgroundColor: '#90ee90', transform: 'scale(1.1)' })),
        animate('0.5s', style({ transform: 'scale(1)' })),
      ]),
    ])
  ]
})
export class TransporteComponent implements OnInit {
  seats: Seat[] = [];
  selectedSeat: Seat | null = null;
  passengerName: string = '';

  ngOnInit(): void {
    this.generateSeats();
  }

  generateSeats(): void {
    const totalSeats = 40; // 10 filas, 4 asientos por fila
    for (let i = 1; i <= totalSeats; i++) {
      this.seats.push({
        id: `Asiento-${i}`,
        status: i % 5 === 0 ? 'occupied' : 'available', // Algunos asientos ocupados
        passenger: i % 5 === 0 ? `Pasajero ${i}` : undefined,
        purchaseDate: i % 5 === 0 ? new Date() : undefined,
      });
    }
  }

  onSeatClick(seat: Seat): void {
    // Modo administrador: permitir acciones en asientos ocupados y disponibles
    this.selectedSeat = seat;
  }

  occupySeat(): void {
    if (this.selectedSeat && this.selectedSeat.status === 'available' && this.passengerName.trim()) {
      this.selectedSeat.status = 'occupied';
      this.selectedSeat.passenger = this.passengerName.trim();
      this.selectedSeat.purchaseDate = new Date();
      this.passengerName = ''; // Reiniciamos el campo
      this.resetSelection();
    } else {
      // Puedes utilizar un mensaje más amigable o un componente de mensaje de PrimeNG
      alert('Por favor, ingresa el nombre del pasajero.');
    }
  }

  releaseSeat(): void {
    if (this.selectedSeat && this.selectedSeat.status === 'occupied') {
      this.selectedSeat.status = 'available';
      this.selectedSeat.passenger = undefined;
      this.selectedSeat.purchaseDate = undefined;
      this.resetSelection();
    }
  }

  getSeatTooltip(seat: Seat): string {
    if (seat.status === 'occupied') {
      return `${seat.id}\nOcupado por: ${seat.passenger}\nFecha: ${seat.purchaseDate?.toLocaleString()}`;
    }
    return `${seat.id}\nDisponible`;
  }

  resetSelection(): void {
    this.selectedSeat = null;
    this.passengerName = '';
  }
  
}
