import { Component, OnInit } from '@angular/core';
import { Categoria } from '../domain/categorias';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

categorias : Categoria[];

constructor(private categoriaService : CategoriaService){
  this.getCategorias();
}


  ngOnInit() {
  }
  
getCategorias(){
  this.categoriaService.getCategorias()
  .subscribe(response => {
    this.categorias = response;
  })
}
}
