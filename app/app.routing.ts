import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent }  from './components/home/home.component';
import { MenuComponent }  from './components/menu/menu.component';
import { OrdersComponent }  from './components/orders/orders.component';
import { AccountComponent }  from './components/account/account.component';

const appRoutes: Routes  = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "menu",
        component: MenuComponent
    },
    {
        path: "orders",
        component: OrdersComponent
    },
    {
        path: "account",
        component: AccountComponent
    }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);