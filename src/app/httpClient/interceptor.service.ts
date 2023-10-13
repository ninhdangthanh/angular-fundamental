import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Thực hiện xử lý trước khi gửi yêu cầu
    // Ví dụ: Thêm tiêu đề Authorization vào mỗi yêu cầu
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer YourAuthTokenHere',
      },
    });

    // Tiếp tục gửi yêu cầu được thay đổi
    return next.handle(modifiedRequest);
  }
}


@Injectable()
export class RemoveLastItemInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Kiểm tra xem yêu cầu có phải là phương thức GET
    if (request.method === 'GET') {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // Kiểm tra xem response.body là một mảng (array)
            if (Array.isArray(event.body)) {
              // Kiểm tra xem mảng không rỗng
              if (event.body.length > 0) {
                // Xóa phần tử cuối cùng của mảng
                event = event.clone({ body: event.body.slice(0, -1) });
              }
            }
          }
          return event;
        })
      );
    }
    return next.handle(request);
  }
}
