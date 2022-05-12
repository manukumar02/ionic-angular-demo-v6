import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of new york city',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      3000
    ),
    new Place(
      'p2',
      'Harry F. Sinclair House',
      'The House is a mansion at the southeast corner of East 79th Street and Fifth Avenue on the Upper East Side of Manhattan.',
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Photograph_of_the_Harry_F_Sinclair_House_from_79th--NYC_%28cropped%29.jpg',
      5000
    ),
    new Place(
      'p3',
      'Harry F. Sinclair House',
      'The House is a mansion at the southeast corner of East 79th Street and Fifth Avenue on the Upper East Side of Manhattan.',
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Photograph_of_the_Harry_F_Sinclair_House_from_79th--NYC_%28cropped%29.jpg',
      5000
    ),
    new Place(
      'p4',
      'Harry F. Sinclair House',
      'The House is a mansion at the southeast corner of East 79th Street and Fifth Avenue on the Upper East Side of Manhattan.',
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Photograph_of_the_Harry_F_Sinclair_House_from_79th--NYC_%28cropped%29.jpg',
      5000
    )
  ];

  constructor() {}

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return {...this._places.find((p)=> p.id === id)};
  }
}
