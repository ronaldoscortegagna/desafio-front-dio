import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class IconService {
  private requests = new Map<string, Promise<any>>();

  getSvgContent(url: string): Observable<string> {
    let req = this.requests.get(url);

    if (!req) {
      req = fetch(url).then(response => {
        if (response.ok) {
          return response.text();
        }

        return null;
      });

      this.requests.set(url, req);
    }

    return fromPromise(req);
  }
}