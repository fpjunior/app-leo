import { Component, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

meutitulo = "texto da variável meutitulo!!!"
texto1= " texto da variável texto1"
texto2 = "texto da variável texto2"

cliente = {
  id: 1,
  nome: "fulano", 
}

clientes = [
  {
    id:2,
    nome: "beltrano",
    ativo: true
  },
  {
    id:3,
    nome: "Fernando",
    ativo: false
  },
  {
    id:4,
    nome: "ciclano",
    ativo: true
  }
]

  constructor() { }

  ngOnInit() {
  }

  geraTexto(){
    return "Texto da função geraTexto()";
  }

}
