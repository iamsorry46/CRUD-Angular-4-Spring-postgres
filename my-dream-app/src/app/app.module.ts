import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilModule } from './mobil/mobil.module';
import { CustomerModule } from './customer/customer.module';
import { SopirModule } from './sopir/sopir.module';
import { UserModule } from './user/user.module';
import { HttpModule } from '@angular/http';

import {RouterModule,Routes} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { FormsModule } from '@angular/forms';

const appRouting : Routes =[ 
                            {path: 'login',component: LoginComponent},
                            {path: 'signup',component: SignupComponent}
                            ];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    MobilModule,
    CustomerModule,
    SopirModule,
    UserModule,
    HttpModule, 
    SharedModule, 
    RouterModule.forRoot(appRouting),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
