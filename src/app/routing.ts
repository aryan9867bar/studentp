import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FormComponent } from "./form/form.component";
import { DashboardComponent } from "./dashboard/dashboard.component";



export const router:Routes = [
   {
    path:"login",
    component:LoginComponent
   },

   {
    path:"form",
    component:FormComponent
   },
   {
    path:"dashboard",
    component:DashboardComponent
   },

   {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
   }

]