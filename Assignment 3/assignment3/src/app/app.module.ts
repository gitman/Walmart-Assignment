import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import 'hammer-timejs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MyServiceService } from './my-service.service';
import { LoginComponent } from './login/login.component';


export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

const routes: Routes = [
  {
    path: 'list',
    component: ListViewComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyServiceService, { provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
