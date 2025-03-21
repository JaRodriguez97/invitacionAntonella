import { Component, ElementRef, ViewChild } from '@angular/core';
import { PublicService } from '@services/public/public.service';

@Component({
  selector: 'app-marco',
  templateUrl: './marco.component.html',
  styleUrls: ['./marco.component.css'],
})
export class MarcoComponent {
  @ViewChild('titulo') titulo!: ElementRef<any>;

  constructor(public publicService: PublicService) {
    if (!this.publicService.isPlaying()) this.publicService.playAudio();

    setTimeout(() => {
      this.titulo.nativeElement.style.animation = 'none';
      setTimeout(() => (this.titulo.nativeElement.style.opacity = 0), 2000);
    }, 3000);
  }
}
