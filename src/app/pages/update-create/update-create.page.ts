import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-create',
  templateUrl: './update-create.page.html',
  styleUrls: ['./update-create.page.scss'],
})
export class UpdateCreatePage implements OnInit {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: ''
  };

  formUsuario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
  });

  constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {

    this.usuario.id = this.activatedRoute.snapshot.params['id'];

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  updateCreateUsuario(){

    console.log('Entro a UpdateCreateUsuario');

    if(this.usuario.id == 0){
      this.usuarioService.createUsuario(this.converterToUsuario()).subscribe(
        respuesta => {
          console.log('Create', respuesta.data);
          this.presentToast('Se creó correctamente!')
        }
      );
    }else{
      this.usuarioService.updateUsuario(this.usuario.id, this.converterToUsuario()).subscribe(
        respuesta => {
          console.log('Update', respuesta.data);
          this.presentToast('Se actualizó correctamente!')
        }
      );
    }
  }

  converterToUsuario(){
  
    this.usuario.nombre = this.formUsuario.get('nombre').value;
    this.usuario.apellido = this.formUsuario.get('apellido').value;
    this.usuario.dni = this.formUsuario.get('dni').value;
    
    console.log('Entro a converterToUsuario', this.usuario);
    return this.usuario;
  }

  pruebaSubmit(){
    console.log('SUBMIT');
  }

}
