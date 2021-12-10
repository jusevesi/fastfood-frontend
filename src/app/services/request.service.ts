import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public obtenerProductos(): Promise<any> {
    const url = `${environment.apiUrl}/obtenerProductos`
    return this.http.get(url).toPromise();
  }
  public agregarProducto(producto: any): Promise<any> {
    const url = `${environment.apiUrl}/agregarProductos`
    return this.http.post(url, producto).toPromise();
  }
  public actualizarproducto(producto: any, nombreActualizar: string): Promise<any> {
    const options = { params: { nombreProducto: nombreActualizar } }
    const url = `${environment.apiUrl}/actualizarProductos`
    return this.http.put(url, producto, options).toPromise();
  }
  public borrarProducto(nombreProducto: string): Promise<any> {
    const options = { params: { nombreProducto } }
    return this.http.delete(`${environment.apiUrl}/borrarProductos`, options).toPromise();
  }

}
