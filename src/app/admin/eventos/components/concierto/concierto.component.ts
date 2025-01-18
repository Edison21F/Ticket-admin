import { Component, OnInit } from '@angular/core';

interface Seat {
  id: string;
  status: string;
  zone: string;
  buyer?: string;
}

@Component({
  selector: 'app-concierto',
  standalone: false,
  templateUrl: './concierto.component.html',
  styleUrls: ['./concierto.component.scss'],
})
export class ConciertoComponent implements OnInit {
  seats: { [zone: string]: Seat[] } = {};
  selectedSeat: Seat | null = null;

  zones = [
    { name: 'La Playa Experience', color: '#00c8ff' },
    { name: 'Yonaguni Platinum', color: '#e600ff' },
    { name: 'Dakiti Golden', color: '#ffa500' },
    { name: 'Palco', color: '#ffc300' },
    { name: 'Callaíta Fan Zone', color: '#a7ff83' },
    { name: 'Tribuna', color: '#ff5733' },
    { name: 'Preferencia', color: '#f50087' },
    { name: 'General', color: '#2d7dfc' },
  ];

  ngOnInit(): void {
    this.generateSeats();
  }

  generateSeats(): void {
    this.zones.forEach((zone) => {
      this.seats[zone.name] = Array.from({ length: 50 }, (_, i) => ({
        id: `${zone.name}-${i + 1}`,
        status: 'available',
        zone: zone.name,
      }));
    });
  }

  onSeatClick(seat: Seat): void {
    this.selectedSeat = seat;
  }

  editSelectedSeat(): void {
    if (this.selectedSeat && this.selectedSeat.status === 'sold') {
      this.selectedSeat.status = 'available';
      this.selectedSeat.buyer = undefined;
      this.resetSelection();
    }
  }

  deleteSelectedSeat(): void {
    if (this.selectedSeat) {
      this.selectedSeat.status = 'available';
      this.selectedSeat.buyer = undefined;
      this.resetSelection();
    }
  }

  private resetSelection(): void {
    this.selectedSeat = null;
  }
}
