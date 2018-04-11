import { Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/clientes';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : Cliente[];

  constructor(private clienteService : ClienteService){
    this.getClientes();
  }
  
  ngOnInit() {
  }
    getClientes(){
      this.clienteService.getClientes()
      .subscribe(response => {
        this.clientes = response;
      })
  
  }
}