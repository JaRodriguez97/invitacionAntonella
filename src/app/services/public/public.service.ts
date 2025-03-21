import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  autoplay: boolean = false;

  constructor() {}

  setAutoplay(value: boolean) {
    this.autoplay = value;
  }
}
