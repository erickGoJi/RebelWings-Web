
import { MantenimientoComponent } from './../../pages/sucursales/mantenimiento/mantenimiento.component';
import { StockPolloComponent } from './../../pages/sucursales/stock-pollo/stock-pollo.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { SucursalesComponent } from 'app/pages/sucursales/sucursales/sucursales.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TareasComponent } from 'app/pages/sucursales/tareas/tareas.component';
import { DasboardRegionalComponent } from 'app/pages/dasboard-regional/dasboard-regional.component';
import { DasboardSupervisorComponent } from 'app/pages/dasboard-supervisor/dasboard-supervisor.component';
// import { DashboardAsistenciasComponent } from 'app/pages/sucursales/dashboard-asistencias/dashboard-asistencias.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,

  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    SucursalesComponent,
    StockPolloComponent,
    MantenimientoComponent,
    TareasComponent,
    DasboardRegionalComponent,
    DasboardSupervisorComponent,
    // DashboardAsistenciasComponent
  ],
})
export class AdminLayoutModule {}
