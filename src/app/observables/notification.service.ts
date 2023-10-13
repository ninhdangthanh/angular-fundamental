import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string>('');

  getNotification() {
    return this.notificationSubject.asObservable();
  }

  showNotification(message: string, count: number) {
    this.notificationSubject.next(count + " " + message);
  }
}
