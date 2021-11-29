import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})


export class NoticiasPage implements OnInit {

  noticias: Article[] = []

  constructor(private noticiasService:NoticiasService,private menuController: MenuController) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp=>{
      console.log('noticias',resp);
      this.noticias.push(...resp.articles);
    });
  }

  mM(){

    this.menuController.open('menu');

  }
}
