import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router, private toastController: ToastController) { }

  misUsuarios: Usuario[] = [];

  ngOnInit() {
    this.usuarioService.getAllUsuarios().subscribe(
      respuesta => {
        console.log('Respuesta', respuesta);
        this.misUsuarios = respuesta.data;
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

  eliminarUsuario(id: number){
    this.usuarioService.deleteUsuario(id).subscribe(
      respuesta => {
        console.log('Delete', respuesta);
      }
    );
    this.presentToast('Se eliminó correctamente!');
  }

  navegarUpdate(id: number){
    this.router.navigate(['update', id]);
  }

}
