import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  textoBuscar: string = '';

  componentes : Componente[] = [

    {
      icon: "game-controller-outline",
      name: 'Progresion Del Terraria',
      redirecTo: '/guia1'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de Liches De Warframe',
      redirecTo: '/guia2'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de mama de Isaac',
      redirecTo: '/guia3'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de Ninguang Genshin',
      redirecTo: '/guia4'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia del Traveler Genshin',
      redirecTo: '/guia5'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de Bennet Genshin',
      redirecTo: '/guia6'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia Generica 7',
      redirecTo: '/guia7'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia Lorem Lorem',
      redirecTo: '/guia7'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia Impsum',
      redirecTo: '/guia7'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia que no es una guia',
      redirecTo: '/guia7'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de prueba',
      redirecTo: '/guia7'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia Numerica',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia 123456789',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia Misteriosa',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia que Guia las otras guias',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia Dorada (Fake)',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia Tremenda',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia Que dice que la guia de arriba huele mal',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia Copuchenta',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia CACHUPIN',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia que no vio ARCANE',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia que spoileo ARCANE a la guia de arriba',
      redirecTo: '/guia7'
    }
    ,
    {
      icon: "game-controller-outline",
      name: 'Guia que no quiere ser la ultima guia pero se resigno',
      redirecTo: '/guia7'
    }
    
    
  ]
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mM(){

    this.menuController.open('menu');

  }

  buscar( event ){
    this.textoBuscar=event.detail.value

  }
}
