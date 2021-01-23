import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-example-with-routing';

  constructor(public httpClient: HttpClient){}

  sendGetRequest(){
    this.httpClient.get('https://swapi.dev/api/').subscribe((res)=>{
        console.log(res);
    });
}
}
