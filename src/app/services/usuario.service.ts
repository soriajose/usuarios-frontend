import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../interfaces/response';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  getAllUsuarios(){
    return this.httpClient.get<Response>('http://localhost:8080/usuarios');
  }
  
  getOneUsuario(id: number){
    return this.httpClient.get<Response>('http://localhost:8080/usuarios/' + id);
  }

  createUsuario(usuario: Usuario){
    return this.httpClient.post<Response>('http://localhost:8080/usuarios', usuario);
  }

  updateUsuario(id: number, input: Usuario){
    return this.httpClient.put<Response>('http://localhost:8080/usuarios/' + id, input);
  }

  deleteUsuario(id: number){
    return this.httpClient.delete<Response>('http://localhost:8080/usuarios/' + id);
  }

}
