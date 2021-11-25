import { MantenimientoComponent } from './../../pages/sucursales/mantenimiento/mantenimiento.component';
import { StockPolloComponent } from './../../pages/sucursales/stock-pollo/stock-pollo.component';
import { Routes } from "@angular/router";


import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { SucursalesComponent } from "app/pages/sucursales/sucursales/sucursales.component";
import { TareasComponent } from 'app/pages/sucursales/tareas/tareas.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "table", component: TableComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "sucursales", component: SucursalesComponent },
  { path: "stock-pollo", component: StockPolloComponent },
  { path: "mantenimiento", component: MantenimientoComponent },
  { path: "tarea", component: TareasComponent },
];
