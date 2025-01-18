import { Component, OnInit } from '@angular/core';

interface Movie {
  name: string;
  price: number;
  soldSeats: { id: string; buyer: string }[];
}

interface Seat {
  id: string;
  status: string;
  buyer?: string;
}

@Component({
  selector: 'app-cine',
  standalone: false,
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.scss'],
})
export class CineComponent implements OnInit {
  movies: Movie[] = [
    {
      name: 'Godzilla vs Kong',
      price: 220,
      soldSeats: [
        { id: '2-4', buyer: 'Juan Pérez' },
        { id: '3-7', buyer: 'María García' },
      ],
    },
    {
      name: 'Radhe',
      price: 320,
      soldSeats: [
        { id: '1-4', buyer: 'Carlos Rodríguez' },
        { id: '4-6', buyer: 'Ana Torres' },
      ],
    },
  ];

  selectedMovie = this.movies[0];
  ticketPrice = this.selectedMovie.price;
  seats: Seat[][] = [];
  selectedSeatsCount = 0;
  totalPrice = 0;
  seatDetails: Seat | null = null;
  selectedSeat: Seat | null = null;

  ngOnInit(): void {
    this.generateSeats();
  }

  generateSeats(): void {
    const soldSeats = this.selectedMovie.soldSeats;
    this.seats = Array.from({ length: 6 }, (_, rowIndex) =>
      Array.from({ length: 8 }, (_, colIndex) => {
        const seatId = `${rowIndex + 1}-${colIndex + 1}`;
        const soldSeat = soldSeats.find((s) => s.id === seatId);
        return {
          id: seatId,
          status: soldSeat ? 'sold' : 'available',
          buyer: soldSeat?.buyer,
        };
      })
    );
  }

  onMovieChange(event: { value: Movie }): void {
    this.selectedMovie = event.value;
    this.ticketPrice = event.value.price;
    this.generateSeats();
  }

  onSeatClick(seat: Seat): void {
    this.seatDetails = seat;
    this.selectedSeat = seat;
  }

  editSelectedSeat(): void {
    if (this.selectedSeat) {
      this.selectedSeat.status = 'available';
      this.selectedSeat.buyer = undefined;
      this.updateSoldSeats();
    }
  }

  deleteSelectedSeat(): void {
    if (this.selectedSeat) {
      // Cambiar estado a disponible
      this.selectedSeat.status = 'available';
      this.selectedSeat.buyer = undefined;

      // Remover de la lista de asientos vendidos
      this.selectedMovie.soldSeats = this.selectedMovie.soldSeats.filter(
        (seat) => seat.id !== this.selectedSeat?.id
      );

      // Actualizar detalles y generar nueva matriz de asientos
      this.seatDetails = null;
      this.selectedSeat = null;
      this.generateSeats();
    }
  }

  private updateSoldSeats(): void {
    this.selectedMovie.soldSeats = this.seats
      .flat()
      .filter((seat) => seat.status === 'sold')
      .map((seat) => ({
        id: seat.id,
        buyer: seat.buyer || '',
      }));
  }
}
