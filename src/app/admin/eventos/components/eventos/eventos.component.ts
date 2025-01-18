import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: false,
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']

})
export class EventosComponent {
  conciertos = [
    { 
      img: 'https://garajedelrock.com/wp-content/uploads/2020/05/Guns-XConciertos.jpg', 
      title: 'Concierto Rock', 
      description: 'La mejor música rock en vivo.' 
    },
    { 
      img: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2023/03/29/642423f14901d.r_d.2164-2281-3216.jpeg', 
      title: 'Jazz Night', 
      description: 'Una noche de jazz inolvidable.' 
    },
    { 
      img: 'https://gnnoticias.com.ar/images/2024/11/29/taylor_large.jpg', 
      title: 'Pop Stars', 
      description: 'Tus artistas favoritos en escena.' 
    },
  ];

  cine = [
    { 
      img: 'https://sm.ign.com/t/ign_es/photo/default/90s-horror-movies-1635453980812_5e1n.1280.jpg', 
      title: 'Cine de Terror', 
      description: 'Siente el miedo en cada escena.' 
    },
    { 
      img: 'https://es.web.img3.acsta.net/newsv7/19/02/14/12/40/3572136.jpg', 
      title: 'Comedia Romántica', 
      description: 'Ríe y enamórate.' 
    },
    { 
      img: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ODMCZCPVIVG7XDNWO2O7TRMMPE.jpg', 
      title: 'Película de Acción', 
      description: 'Adrenalina pura.' 
    },
  ];

  transporte = [
    { 
      img: 'https://mitaddelmundo.gob.ec/wp-content/uploads/2023/07/quito-bus.png', 
      title: 'Viaje en Bus', 
      description: 'Explora con comodidad.' 
    },
    { 
      img: 'https://multipasajes.travel/wp-content/uploads/2021/06/velotax1.jpg', 
      title: 'Viaje Provinciales', 
      description: 'Disfruta paisajes increíbles.' 
    },
    { 
      img: 'https://www.nlarenas.com/wp-content/uploads/avianca-ecuador-vuelos-quito-nueva-new-york-ruta.webp', 
      title: 'Viaje en Avión', 
      description: 'Llega rápido y seguro.' 
    },
  ];
}
