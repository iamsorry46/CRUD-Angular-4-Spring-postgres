import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  providers: [AuthService],
  declarations: [NavComponent, FooterComponent, LoginComponent, SignupComponent],
  exports: [NavComponent, FooterComponent, LoginComponent, SignupComponent]
})
export class SharedModule {}
