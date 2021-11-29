import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Datos } from 'src/app/services/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CRUDPage implements OnInit {

  datos: Datos[] = [];

  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private storageService: ServicedatosService, 
    private plt: Platform,
    private toastController: ToastController,
    private menuController: MenuController

  ) {  this.plt.ready().then(()=>{

    this.loadDatos();

  });}

  ngOnInit() {
  }
  mM(){

    this.menuController.open('menu');

  }
  loadDatos(){

    this.storageService.getDatos().then(datos=>{

      this.datos=datos;

    });

  }
  addDatos(){

    this.newDato.modified = Date.now();

    this.newDato.id = Date.now();

    this.storageService.addDatos(this.newDato).then(dato=>{

      this.newDato = <Datos>{};

      this.showToast('Comentario Publicado');

      this.loadDatos();

    });

  }

  //update

  updateDatos(dato: Datos ){
    
    dato.nom = `${dato.nom}⭐`;
  
    dato.modified = Date.now();

    this.storageService.updateDatos(dato).then(item=>{

      this.showToast('Comentario Destacado! ⭐')

      this.myList.closeSlidingItems();

      this.loadDatos();

    });

  } 
  async showToast(msg){

    const toast = await this.toastController.create({

      message: msg, 

      duration: 2000

    });

    toast.present();

  }

  deleteDatos(dato: Datos){

    this.storageService.deleteDatos(dato.id).then(item=>{

      this.showToast('Elemento eliminado');

      this.myList.closeSlidingItems();

      this.loadDatos();

    });

  }
}
