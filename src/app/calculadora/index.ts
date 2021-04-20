/** Dentro do TypeScript esse comando faz com que a classe (neste caso) se torne pública
 *  para ser acessada pelo import. Isso quer dizer que para importar o módulo 
 *  'app/calculadora/calculadora.module' só preciso utilizar o nome da pasta sem
 *  precisar colocar o caminho completo, por exemplo. */
export * from './calculadora.module';
export * from './components';
export * from './services';
