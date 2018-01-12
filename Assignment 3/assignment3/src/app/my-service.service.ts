import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { RouterModule} from '@angular/router';


@Injectable()
export class MyServiceService {

  constructor(private http: Http, private _router: RouterModule) {}

fetchData() {
    this.http.get('src/assests/list-view.json').subscribe((data) => console.log(data));
  }

}
