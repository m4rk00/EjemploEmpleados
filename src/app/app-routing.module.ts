
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcercaComponent } from "./pages/acerca/acerca.component";
import { CrearEmpleadoComponent } from "./pages/crear-empleado/crear-empleado.component";
import { EditarEmpleadoComponent } from "./pages/editar-empleado/editar-empleado.component";
import { ListarEmpleadosComponent } from "./pages/listar-empleados/listar-empleados.component";

const routes: Routes = [
    {path: '',pathMatch: 'full', redirectTo: 'crear-empleado'},
    {path: 'crear-empleado', component: CrearEmpleadoComponent},
    {path: 'editar-empleado/:id', component: EditarEmpleadoComponent},
    {path: 'listar-empleados', component: ListarEmpleadosComponent},
    {path: 'acerca-de', component: AcercaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule { }