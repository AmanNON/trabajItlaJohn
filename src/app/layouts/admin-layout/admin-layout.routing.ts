import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { SessionGuard } from 'app/session.guard';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent, canActivate: [SessionGuard] },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [SessionGuard] },
    { path: 'table-list',     component: TableListComponent, canActivate: [SessionGuard] },
    { path: 'typography',     component: TypographyComponent, canActivate: [SessionGuard] },
    { path: 'icons',          component: IconsComponent, canActivate: [SessionGuard] },
    { path: 'maps',           component: MapsComponent, canActivate: [SessionGuard] },
    { path: 'notifications',  component: NotificationsComponent, canActivate: [SessionGuard] },
    { path: 'upgrade',        component: UpgradeComponent, canActivate: [SessionGuard] },
    {
        path:'principal', 
        loadChildren:
        '../../pages/pagina-principal/pagina-principal.module#PaginaPrincipalModule',
        canActivate: [SessionGuard]
    },
    {
        path:'calculadora', 
        loadChildren:
        '../../pages/PagCalculadora/calculadora/calculadora.module#CalculadoraModule',
        canActivate: [SessionGuard],
        
    },
    {
        path:'clientes', 
        loadChildren:
        '../../pages/PagClientes/clientes.module#ClientesModule',
        canActivate: [SessionGuard],
        
    },
    {
        path:'usuarios', 
        loadChildren:
        '../../pages/PagUsuarios/usuarios.module#UsuariosModule',
        canActivate: [SessionGuard],
        
    },
    {
        path:'formulario', 
        loadChildren:
        '../../pages/PagFormulario/formulario/formulario.module#FormularioModule',
        canActivate: [SessionGuard],
        
    }
];
