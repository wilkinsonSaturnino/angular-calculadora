import { inject, TestBed } from '@angular/core/testing';
import { CalculadoraModule } from '../calculadora.module';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        CalculadoraModule
      ],
      providers:[
        CalculadoraService
      ]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 2 + 2 = 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(2, 2, CalculadoraService.SOMA);
      expect(soma).toEqual(4);
    })
  );

  it('deve garantir que 3 - 1 = 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(3, 1, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(2);
    })
  );

  it('deve garantir que 2 * 3 = 6',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(2, 3, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(6);
    })
  );

  it('deve garantir que 10 / 2 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(10, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(5);
    })
  );

});
