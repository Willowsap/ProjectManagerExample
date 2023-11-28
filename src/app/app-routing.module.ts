import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CreateProjectComponent } from "./projects/create-project/create-project.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "project-create", component: CreateProjectComponent},
    { path: "login", component: LoginComponent },
    { path: "sign-up", component: SignUpComponent},
    { path: "**", component : PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}