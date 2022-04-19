import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { ForgotPasswordComponent } from "./pages/auth/forgot-password/forgot-password.component";
import { WelcomeComponent } from "./pages/auth/welcome/welcome.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
export const AppRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dasboard',
  //   pathMatch: 'full',
  // },
  {
    // el login es redirect
    path: "login",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  { path: "recuperar-contrasena", component: ForgotPasswordComponent },
  { path: "bienvenido", component: WelcomeComponent },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      },
    ],
  },
];


 // {
  //   path: "",
  //   loadChildren: () =>
  //     import("./pages/regionales/regionales.module").then(
  //       (m) => m.RegionalesModule
  //     ),
  // },
