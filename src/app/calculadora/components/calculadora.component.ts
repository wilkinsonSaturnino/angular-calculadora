import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string = '';
  private numero2: string = '';
  private resultado: number = 0;
  private operacao: string = '';
  
  constructor(private calculadoraService: CalculadoraService) {
  }

  /** Implementação da Interface OnInit. É executado sempre que o componente é criado. */
  ngOnInit() {
    this.limpar();
  }

  /** Inicializa todos os valores para os valores padrão. */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = '';
    this.resultado = 0;
    this.operacao = '';
  }

  /** Adiciona o número selecionado para o cálculo posteriormente. */
  adicionarNumero(numero: string): void {
    if (this.operacao === '') {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /** Retorna o valor concatenado. Trata o separador decimal. */
  concatenarNumero(numAtual: string, numConcat: string): string {
    //Caso contenha apenas '0' ou null, inicializa o valor
    if (numAtual === '0') {
      numAtual = '';
    }

    // Se o primeiro dígito é '.' concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    //Caso '.' digitado e já contenha um '.' apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1 ) {
      return numAtual;
    }
    
    return numAtual + numConcat;
  }

  /** Executa a lógica quando um operador for selecionado.
   *  Caso já possua uma operação selecionada, executa a 
   *  operação anterior, e define a nova operação.
   */
  definirOperacao(operacaoSelecionada: string): void {
    // Apenas define a operação, caso não exista uma.
    if (this.operacao === '') {
      this.operacao = operacaoSelecionada;
      return;
    }

    /** Caso operação definida e número 2 selecionado,
     *  efetua o cálculo da operação.
     */
    if (this.numero2 !== '') {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacaoSelecionada;
      this.numero1 = this.resultado.toString();
      this.numero2 = '';
      this.resultado = 0;
    }
  }

  /** Efetua o cálculo de uma operação. */
  calcular(): void {
    if (this.numero2 === '') {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  /** Retorna o valor a ser exibido na tela da calculadora. */
  get display(): string {
    if (this.resultado !== 0) {
      return this.resultado.toString();
    }
    if (this.numero2 !== '') {
      return this.numero1 + this.operacao + this.numero2;
    }
    if (this.operacao !== '') {
      return this.numero1 + this.operacao;
    }    
    return this.numero1;
  }

}
