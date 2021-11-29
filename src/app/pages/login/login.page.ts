import { Component, OnInit } from '@angular/core';
import {  ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  usuario = {
    user:'',
    pass:'',
    
  }

  constructor(
    private toastController: ToastController,
    private menuController: MenuController) { }

  ngOnInit() {
  }

  onSubmit(){
    this.showToast('Bienvenido De Vuelta! ⭐');
    console.log('submit');
    console.log(this.usuario);
    
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
