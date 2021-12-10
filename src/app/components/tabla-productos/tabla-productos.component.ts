import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {


  public productos: any [] = [];


  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.obtenerProductos();
  }

  public async obtenerProductos(){ 
   try {
     this.productos = await this.requestService.obtenerProductos();
   } catch (error) {
     console.log(error);
   } 
  }

  public actualizarProducto(producto:any){
    localStorage.setItem('producto', JSON.stringify(producto));
    this.router.navigate(["/agregarProducto"]);
  }
  
  public borrarProducto(nombre:string){
    this.requestService.borrarProducto(nombre)
    .then(response =>{
      alert(response.message);
      this.obtenerProductos();
    })
    .catch(error =>{
      console.log(error);
    })
  }

}
