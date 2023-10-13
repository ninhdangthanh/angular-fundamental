import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { HttpService } from './httpService.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './httpClient.component.html',
})
export class HttpComponent implements OnInit {
  productData!: any;
  postResponse!: any;
  putResponse!: any;
  deleteId!: number;

  constructor(
    private httpService: HttpService
  ) {
    this.getDataFromMock()
  }

  ngOnInit(): void {

  }

  getDataFromMock() {
    this.httpService.getData("https://6487d4750e2469c038fc8bea.mockapi.io/api/v1/products").subscribe(response => {
      console.log("response of get moethod ", response.status, response.body);
      this.productData = response.body
    })
  }

  postDataToMock() {
    const dataPost = {
      name: "data test",
      price: 123123,
      description: "test description",
    }
    this.httpService.postData(dataPost, "https://6487d4750e2469c038fc8bea.mockapi.io/api/v1/products")
    .subscribe((response: HttpResponse<any>) => {
      this.postResponse = response.body
      console.log("post method response", response.status, response.body);
    })
  }

  putDataToMock() {
    const dataPost = {
      name: "data put",
      price: 2222,
      description: "put description",
    }
    this.httpService.putData(dataPost, "https://6487d4750e2469c038fc8bea.mockapi.io/api/v1/products/2")
    .subscribe((response: HttpResponse<any>) => {
      this.putResponse = response.body
      console.log("put method response", response.status, response.body);

    })
  }

  deleteDataFromMock() {
    this.httpService.deleteData(`https://6487d4750e2469c038fc8bea.mockapi.io/api/v1/products/${this.deleteId}`)
    .subscribe((response: HttpResponse<any>) => {
      console.log("delete method response", response.status, response.body);
      if(response.status == 200) {
        alert("DELETE SUCCESS!!!!!")
        this.getDataFromMock()
      } else {
        alert("delete failed")
      }
    },
    error => alert("Có lỗi rồi, delete không được !!!!"))
  }
}
