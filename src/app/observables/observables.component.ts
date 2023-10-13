import { Component, OnInit } from "@angular/core";
import { ApiObservableCreatingService, MyObservableService, MyObservableServiceFrom } from "./observable-example.component";
import { Observable, from, interval, map, of, reduce, switchMap, tap } from "rxjs";
import { NotificationService } from "./notification.service";


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html'
})
export class ObservablesComponent implements OnInit {
  private apiMockUrl = "https://6487d4750e2469c038fc8bea.mockapi.io/api/v1/products";
  dataNew!: any;
  dataFrom!: any;
  data!: any;
  subscription: any;
  observable!: Observable<any>;
  observableData$ = from([6, 7, 8, 9]);
  notificationMessage$ = this.notificationService.getNotification();
  count: number = 0;


  constructor(private myObservableService : MyObservableService,
    private myObservableServiceFrom: MyObservableServiceFrom,
    private apiObservableCreatingService: ApiObservableCreatingService,
    private notificationService: NotificationService) {}

  ngOnInit(): void {
    // Tạo một observable sử dụng interval từ RxJS. Nó sẽ phát ra một số nguyên mỗi giây.
    // const myObservable = interval(1000);

    // // Đăng ký theo dõi observable và xử lý giá trị được phát ra.
    // this.subscription = myObservable.subscribe((value) => {
    //   console.log("value from ng on init", value);
    // });

  }

  showNotification() {
    this.notificationService.showNotification('Đây là thông báo từ Observable.', this.count);
    this.count ++
  }

  createObservableNew () {
    // create observable with new keyword
    this.myObservableService.myObservable.subscribe((result) => {
      this.dataNew = result;
      console.log("first observables", result);
      console.log("first observables endddddddđ");
    });
  }

  createObservableFrom () {
    // create observable with from
    this.myObservableServiceFrom.myObservableFrom.subscribe((result) => {
      this.dataFrom = result;
      console.log("form creating observables", result);
      console.log("form creating observables endddddddđ");
    });
  }

  createObservableAPI () {
    // create observable to get api
    this.apiObservableCreatingService.get("https://6487d4750e2469c038fc8bea.mockapi.io/api/v1/products").subscribe((result) => {
      this.data = result;
      console.log("api observables", typeof(result), result);
      console.log("api observables endddddddđ");
    });
  }

  createListAPIWithPipeAndObservable () {
    console.log("createListAPIWithPipeAndObservable");
    this.observable = this.apiObservableCreatingService.get(this.apiMockUrl).pipe(
      map((data: any) => {
        return data.map((item: any) => ({
          ...item,
          name: item.name + " --- " + item.price
        }));
      })
    )
  }
}
