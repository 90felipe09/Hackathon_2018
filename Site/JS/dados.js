class Instituto {
  constructor(nome, sigla, orcamentos) {
    this.nome = nome;
    this.sigla = sigla;
    this.orcamentos = orcamentos;
  }
}

class orcamentoAnual {
  constructor(gastoTotal, manutencao, servicos, auxilio, recursos, outros) {
    this.gastoTotal = gastoTotal;
    this.manutencao = manutencao;
    this.servicos = servicos;
    this.auxilio = auxilio;
    this.recursos = recursos;
    this.outros = outros;
  }
}

orcamentos = [
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70)
];

const poli = new Instituto("Escola Politécnica", "Poli", orcamentos);

orcamentos = [
  new orcamentoAnual(20, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70),
  new orcamentoAnual(10, 20, 30, 40, 50, 60, 70)
];

const fflch = new Instituto("Escola fflch", "fflch", orcamentos);