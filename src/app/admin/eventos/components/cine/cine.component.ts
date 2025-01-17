import { Component, OnInit } from '@angular/core';

interface Movie {
  name: string;
  price: number;
  soldSeats: string[];
}

interface Seat {
  id: string;
  status: string;
}

@Component({
  selector: 'app-cine',
  standalone: false,
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.scss']
})
export class CineComponent implements OnInit {

  movies = [
    {
      name: 'Godzilla vs Kong',
      price: 220,
      soldSeats: ['2-4', '2-5', '3-7', '3-8']
    },
    {
      name: 'Radhe',
      price: 320,
      soldSeats: ['1-4', '2-5', '4-6', '5-3']
    },
    {
      name: 'RRR',
      price: 250,
      soldSeats: ['2-3', '3-5', '4-4', '6-7']
    },
    {
      name: 'F9',
      price: 260,
      soldSeats: ['1-2', '3-4', '5-5', '6-6']
    }
  ];

  selectedMovie = this.movies[0];
  ticketPrice = this.selectedMovie.price;
  seats: Seat[][] = [];
  selectedSeatsCount = 0;
  totalPrice = 0;

  constructor() { }

  ngOnInit(): void {
    this.generateSeats();
  }

  generateSeats(): void {
    const soldSeats = this.selectedMovie.soldSeats;
    this.seats = [];
    for (let i = 1; i <= 6; i++) {
      const row: Seat[] = [];
      for (let j = 1; j <= 8; j++) {
        const seatId = `${i}-${j}`;
        let status = 'available';
        if (soldSeats.includes(seatId)) {
          status = 'sold';
        }
        row.push({
          id: seatId,
          status: status
        });
      }
      this.seats.push(row);
    }
    this.selectedSeatsCount = 0;
    this.totalPrice = 0;
  }

  onMovieChange(event: { value: Movie }): void {
    this.ticketPrice = event.value.price;
    this.selectedMovie = event.value;
    this.generateSeats();
  }

  toggleSeat(seat: Seat): void {
    if (seat.status === 'sold') {
      return;
    }
    if (seat.status === 'selected') {
      seat.status = 'available';
      this.selectedSeatsCount--;
      this.totalPrice -= this.ticketPrice;
    } else {
      seat.status = 'selected';
      this.selectedSeatsCount++;
      this.totalPrice += this.ticketPrice;
    }
  }

}