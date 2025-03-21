import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  private audio: HTMLAudioElement;

  constructor(public route: Router) {
    this.audio = new Audio();
    this.audio.src = '../assets/audio.mpeg';
    this.audio.loop = true; // Para que el audio no se detenga
    this.audio.volume = 0.5;
  }

  playAudio() {
    this.audio.play().catch((error) => {
      if (
        error.name === 'NotAllowedError' &&
        error.code === 0 &&
        error.message ===
          "play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD"
      )
        this.route.navigate(['splash']);
      else console.error('Error al reproducir el audio:', error);
    });
  }

  pauseAudio() {
    this.audio.pause();
  }

  isPlaying(): boolean {
    return !this.audio.paused && this.audio.currentTime > 0;
  }
}
