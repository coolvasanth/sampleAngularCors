import { Component } from '@angular/core';
import { CommonApiService } from './services/common-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public commonApi:CommonApiService) { 

  }

  checkAPICall(){
    var data = {
      "useremail": "admin@gmail.com",
      "password": "1234"
    }
    this.commonApi.post("users/login", data, "json")
      .subscribe(response => {
        console.log("response is ", response)
      }, error => {
        console.log("Error is", error);
        // this.commonMessage.presentToast(error.msg, "top");
      })
  }

  title = 'my-dream-app';
}
