import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';

const routes: Routes = [
  {path:"agregarProducto",component:FormularioProductoComponent},
  {path:"listarProductos",component:TablaProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
