import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { MyOrdersComponent } from './pages/my-order/my-order.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component: ProductsComponent
    },
    {
        path:'create-order',
        component:CreateOrderComponent 
    },
    {
        path:'my-order',
        component:MyOrdersComponent 
    }

];
