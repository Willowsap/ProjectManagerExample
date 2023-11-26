import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CreateProjectComponent } from "./projects/create-project/create-project.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "project-create", component: CreateProjectComponent},
    { path: "**", component : PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}