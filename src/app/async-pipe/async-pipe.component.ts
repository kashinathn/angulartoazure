import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'async-observable-pipe',
  template: '<div><code>observable|async</code>: Time: {{ time  | async }}</div>'
})
export class AsyncPipeComponent {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
