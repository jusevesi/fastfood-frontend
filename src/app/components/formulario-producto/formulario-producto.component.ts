import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss']
})
export class FormularioProductoComponent implements OnInit {

  public productoActualizar: any = null;
  public productoForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    const producto = localStorage.getItem("producto");
    this.productoActualizar = producto ? JSON.parse(producto) : null;
    this.productoForm = this.formBuilder.group({
      nombre: [this.productoActualizar?.nombre, Validators.required],
      categoria: [this.productoActualizar?.categoria, Validators.required],
      sabor: [this.productoActualizar?.sabor, Validators.required],
      precio: [this.productoActualizar?.precio, Validators.required]
    })
  }
  public agregarProducto() {
    const producto = {
      ...this.productoForm.value,
      estado: true
    }
    this.requestService.agregarProducto(producto)
      .then(response => {
        alert(response.message);
        this.router.navigate(['/listarProductos']);
      })
      .catch(error => {
        console.log(error);
      })
  }

  public actualizarProducto() {
    const producto = {
      ...this.productoForm.value,
      estado: true
    }
    this.requestService.actualizarproducto(producto, this.productoActualizar.nombre)
      .then(response => {
        alert(response.message);
        this.router.navigate(['/listarProductos']);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
