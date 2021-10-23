import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: 0
  };

  constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
   
    this.usuarioService.getOneUsuario(this.activatedRoute.snapshot.params['id']).subscribe(
      respuesta => {
        console.log('Update', respuesta);
        this.usuario = respuesta.data;
      }
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  actualizarUsuario(){
    this.usuarioService.updateUsuario(this.usuario.id, this.usuario).subscribe(
      respuesta => {
        console.log('Update', respuesta);
        this.presentToast('Se actualizó correctamente!');
      }
    );
  }

}
