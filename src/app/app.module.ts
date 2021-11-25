import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { WelcomeComponent } from './pages/auth/welcome/welcome.component';
import { DialogGeneralMessageComponent } from './pages/dialog-general/dialog-general-message/dialog-general-message.component';
import { DialogGeneralConfimationComponent } from './pages/dialog-general/dialog-general-confimation/dialog-general-confimation.component';
import { MatDialogModule } from "@angular/material/dialog";
import { DialogAddStockPolloComponent } from './pages/sucursales/dialog/dialog-add-stock-pollo/dialog-add-stock-pollo.component';
import { DialogAddTicketComponent } from './pages/sucursales/dialog/dialog-add-ticket/dialog-add-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ForgotPasswordComponent,
    WelcomeComponent,
    DialogGeneralConfimationComponent,
    DialogAddStockPolloComponent,
    DialogAddTicketComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  schemas: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
