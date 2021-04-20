import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  /** Define as constantes utilizadas para identificar
   * as operações de cálculo. 'readonly', no TypeScript 
   * é uma constante que não pode ser alterada.
   */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /** Método que calcula uma operação matemática, dado dois números. */
  calcular(num1: number, num2: number, operacao: string): number {

    /** Armazena o resultado da operação */
    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
