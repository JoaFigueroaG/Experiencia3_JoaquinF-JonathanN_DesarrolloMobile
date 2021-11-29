import { Component, OnInit } from '@angular/core';
import {  ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = {
    user:'',
    email:'',
    pass:'',
    nacimiento:'',
    telefono:''
  }

  constructor(private menuController: MenuController,private toastController: ToastController) { }

  ngOnInit() {
  }
  onSubmit(){
    this.showToast('Gracias Por Registrarte Con Nosotros!!! ⭐');
    console.log('submit');
    console.log(this.usuario);
  }
  mM(){

    this.menuController.open('menu');

  }

 

  async showToast(msg){

    const toast = await this.toastController.create({

      message: msg, 

      duration: 2000,
      color: "danger"

    });

    toast.present();

  }
}
