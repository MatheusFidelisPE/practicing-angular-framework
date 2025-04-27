import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { guardGuard } from './guard/guard.guard';
import { TodolistComponent } from './components/todolist/todolist.component';
import { PageErrorComponent } from './components/page-error/page-error.component';

export const routes: Routes = [
    // {
    //     path:'',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    // },    
    {
        path:'login', 
        component:LoginComponent
    }, 
    {   
        path:'', 
        component: LayoutComponent, 
        canActivate: [guardGuard],
        children:[
            {
                path: 'master',
                component: MasterComponent
            }, 
            { 
                path: 'employee',
                component: EmployeeComponent
            }, 
            { 
                path: 'todolist',
                component: TodolistComponent
            }, 
            { 
                path: 'client',
                component: ClientComponent,
                
            }, 
            { 
                path: 'client-project',
                component: ClientProjectComponent
            }
        ]
    },
    {
        path: '**',
        component:PageErrorComponent
    }
];
