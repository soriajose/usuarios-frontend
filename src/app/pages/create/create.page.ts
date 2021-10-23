import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: 0
  };

  constructor(private usuarioService: UsuarioService, private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  crearUsuario(){
    this.usuarioService.createUsuario(this.usuario).subscribe(
      respuesta => {
        console.log('Usuario', respuesta);
      }
    );
    this.presentToast('Se creó correctamente!');
  }

  

}
