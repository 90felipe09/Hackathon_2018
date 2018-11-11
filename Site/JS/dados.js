class Instituto {
  constructor(nome, sigla, orcamentos) {
    this.nome = nome;
    this.sigla = sigla;
    this.orcamentos = orcamentos;
  }
}

class orcamentoAnual {
  constructor(outros, recursos, auxilio, servicos, manutencao, gastoTotal) {
    this.gastoTotal = gastoTotal;
    this.manutencao = manutencao;
    this.servicos = servicos;
    this.auxilio = auxilio;
    this.recursos = recursos;
    this.outros = outros;
  }
}

orcamentos = [
  new orcamentoAnual(1161447.39, 3918468.71, 1141498.47, 15938405.46, 1990771.64, 24154036.67),
  new orcamentoAnual(787830.07, 7089686.86, 1329588.54, 19008682.48, 152268.0, 28368055.95),
  new orcamentoAnual(844004.7, 2486606.43, 483372.9, 18216839.87, 127196.72, 22158020.62),
  new orcamentoAnual(1740309.58, 3057370.73, 465827.48, 17045839.94, 27755.82, 22337103.55),
  new orcamentoAnual(2055592.88, 3456597.51, 436467.46, 17915051.0, 30906.4, 23894615.25),
  new orcamentoAnual(1130872.7, 2510652.34, 747121.35, 17628643.96, 22017290.35),
  new orcamentoAnual(1631587.88, 1183455.11, 662255.97, 13416090.05, 16893389.01)
];

const fmrp = new Instituto("Faculdade de Medicina de Ribeirão Preto", "FMRP", orcamentos);

orcamentos = [
  new orcamentoAnual(513035.09, 5396749.62, 1589589.59, 7248560.87, 2518784.85, 17325866.02),
  new orcamentoAnual(362235.13, 6733747.94, 1708435.84, 15225017.63, 24029436.54),
  new orcamentoAnual(222167.7, 4726675.07, 980148.09, 11948234.63, 61630.0, 17938855.49),
  new orcamentoAnual(3745.84, 3634922.99, 945472.6, 8707152.36, 13291293.79),
  new orcamentoAnual(16078.52, 1986900.83, 931333.31, 11972378.59, 14955683.65),
  new orcamentoAnual(91520.17, 1889551.23, 1121227.29, 11400819.19, 7900.0, 14519441.4),
  new orcamentoAnual(280878.41, 731773.76, 1123916.09, 9060851.47, 11264693.23)
];

const poli = new Instituto("Escola Politécnica", "POLI", orcamentos);

orcamentos = [
  new orcamentoAnual(676265.26, 11605160.27, 529592.85, 5449541.33, 160956.57, 18611766.28),
  new orcamentoAnual(88972.54, 4681939.2, 1143289.32, 7013338.84, 3452.0, 12930991.9),
  new orcamentoAnual(595263.48, 2540662.8, 349710.55, 8679126.44, 12164763.27),
  new orcamentoAnual(160030.96, 2501762.74, 253450.47, 8994551.7, 11909795.87),
  new orcamentoAnual(3354.79, 2127703.63, 371783.05, 8788303.98, 11291145.45),
  new orcamentoAnual(1078869.56, 1231174.85, 474553.24, 10732529.3, 13517126.95),
  new orcamentoAnual(746947.75, 548711.98, 269177.41, 6285137.5, 7849974.64)
];

const fmusp = new Instituto("Faculdade de Medicina da USP", "FMUSP", orcamentos);

orcamentos = [

  new orcamentoAnual(676265.26, 11605160.27, 529592.85, 5449541.33, 160956.57, 18611766.28),
  new orcamentoAnual(88972.54, 4681939.2, 1143289.32, 7013338.84, 3452.0, 12930991.9),
  new orcamentoAnual(595263.48, 2540662.8, 349710.55, 8679126.44, 12164763.27),
  new orcamentoAnual(160030.96, 2501762.74, 253450.47, 8994551.7, 11909795.87),
  new orcamentoAnual(3354.79, 2127703.63, 371783.05, 8788303.98, 11291145.45),
  new orcamentoAnual(1078869.56, 1231174.85, 474553.24, 10732529.3, 13517126.95),
  new orcamentoAnual(746947.75, 548711.98, 269177.41, 6285137.5, 7849974.64)
];

const fflch = new Instituto("Faculdade de Filosofia, Letras e Ciências Humanas", "FFLCH", orcamentos);

orcamentos = [
  new orcamentoAnual(163956.46, 4911836.31, 951173.23, 4909191.93, 4068070.8, 15025624.06),
  new orcamentoAnual(80418.34, 6450532.43, 1467572.5, 7389822.4, 357601.44, 15745947.11),
  new orcamentoAnual(179582.93, 3373984.79, 1022651.74, 4114329.99, 122442.11, 8812991.56),
  new orcamentoAnual(537765.18, 1207456.61, 978435.67, 4344212.11, 174685.79, 7242555.36),
  new orcamentoAnual(63338.86, 2091764.02, 1167250.84, 5204992.44, 105246.21, 8632592.37),
  new orcamentoAnual(65977.62, 2414777.69, 1939597.12, 5732432.17, 883642.08, 11036426.68),
  new orcamentoAnual(471852.13, 1323803.99, 1435817.41, 3651566.25, 32400.0, 6915439.78)
];

const esalq = new Instituto("Escola Superior de Agricultura Luiz de Queiroz", "ESALQ", orcamentos);

orcamentos = [
  new orcamentoAnual(287130.91, 2804457.33, 866593.57, 4003921.98, 2094285.43, 10536455.06),
  new orcamentoAnual(25497.26, 6524069.6, 1210666.07, 6720190.86, 1061798.74, 15542222.53),
  new orcamentoAnual(56884.85, 2596500.89, 756413.19, 5521408.18, 377515.2, 9308722.31),
  new orcamentoAnual(418114.84, 1887529.92, 826339.14, 4304907.26, 648596.0, 8085487.16),
  new orcamentoAnual(54263.89, 1828664.43, 652982.66, 4723509.14, 42529.63, 7301949.75),
  new orcamentoAnual(19994.75, 2144378.83, 2076214.13, 4402917.15, 205422.08, 8848926.94),
  new orcamentoAnual(194753.31, 1346813.62, 974815.96, 3888671.75, 6424275.64)
];

const eesc = new Instituto("Escola de Engenharia de São Carlos", "EESC", orcamentos);

orcamentos = [
  new orcamentoAnual(163956.46, 4911836.31, 951173.23, 4909191.93, 4068070.8, 15025624.06),
  new orcamentoAnual(80418.34, 6450532.43, 1467572.5, 7389822.4, 357601.44, 15745947.11),
  new orcamentoAnual(179582.93, 3373984.79, 1022651.74, 4114329.99, 122442.11, 8812991.56),
  new orcamentoAnual(537765.18, 1207456.61, 978435.67, 4344212.11, 174685.79, 7242555.36),
  new orcamentoAnual(63338.86, 2091764.02, 1167250.84, 5204992.44, 105246.21, 8632592.37),
  new orcamentoAnual(65977.62, 2414777.69, 1939597.12, 5732432.17, 883642.08, 11036426.68),
  new orcamentoAnual(471852.13, 1323803.99, 1435817.41, 3651566.25, 32400.0, 6915439.78)
];

const each = new Instituto("Escola de Comunicações e Artes", "EACH", orcamentos);

orcamentos = [
  new orcamentoAnual(176285.53, 2038910.8, 460397.42, 2395119.02, 1201081.65, 6316422.42),
  new orcamentoAnual(2685.37, 3297655.07, 484847.12, 4015805.94, 694918.3, 8495911.8),
  new orcamentoAnual(1811.5, 2893821.38, 193277.31, 3521029.78, 14813.08, 6624753.05),
  new orcamentoAnual(49817.16, 3485463.36, 185717.04, 3380288.65, 93664.52, 7194950.73),
  new orcamentoAnual(31615.0, 3215976.69, 483864.3, 3923483.38, 71500.0, 7764881.37),
  new orcamentoAnual(7904.74, 3879673.69, 549827.67, 4552199.8, 1062308.5, 10051914.4),
  new orcamentoAnual(34462.88, 1722805.52, 396035.46, 3238880.63, 5421015.99)
];

const fmvz = new Instituto("Faculdade de Medicina Veterinária e Zootecnia", "FMVZ", orcamentos);

orcamentos = [

  new orcamentoAnual(744285.5, 3674899.48, 657837.78, 3091938.19, 2073100.8, 10253961.75),
  new orcamentoAnual(4199125.03, 943941.44, 6354136.95, 247551.35, 11744754.77),
  new orcamentoAnual(3009153.08, 796785.64, 4807867.29, 464994.8, 9078800.81),
  new orcamentoAnual(845.88, 811575.26, 332995.54, 3899703.09, 3635.0, 5048754.77),
  new orcamentoAnual(2826.25, 541539.5, 279987.53, 3512304.55, 158928.0, 4495585.83),
  new orcamentoAnual(5678.45, 1346956.08, 241353.44, 3201527.89, 4795515.86),
  new orcamentoAnual(308505.25, 1173255.22, 128322.25, 2301516.98, 3911599.7)
];

const institutoFisica = new Instituto("Instituto de Física", "IF", orcamentos);

orcamentos = [

  new orcamentoAnual(744285.5, 3674899.48, 657837.78, 3091938.19, 2073100.8, 10253961.75),
  new orcamentoAnual(4199125.03, 943941.44, 6354136.95, 247551.35, 11744754.77),
  new orcamentoAnual(3009153.08, 796785.64, 4807867.29, 464994.8, 9078800.81),
  new orcamentoAnual(845.88, 811575.26, 332995.54, 3899703.09, 3635.0, 5048754.77),
  new orcamentoAnual(2826.25, 541539.5, 279987.53, 3512304.55, 158928.0, 4495585.83),
  new orcamentoAnual(5678.45, 1346956.08, 241353.44, 3201527.89, 4795515.86),
  new orcamentoAnual(308505.25, 1173255.22, 128322.25, 2301516.98, 3911599.7)
];

const eca = new Instituto("Escola de Comunicações e Artes", "ECA", orcamentos);

orcamentos = [
  new orcamentoAnual(567627.61, 2713098.12, 318500.82, 2694027.98, 905651.73, 7201706.26),
  new orcamentoAnual(4092.57, 5008786.29, 412112.39, 4655588.75, 184919.68, 10265499.68),
  new orcamentoAnual(2818.43, 3773795.11, 136895.04, 3881697.75, 7795206.33),
  new orcamentoAnual(14034.33, 2172609.25, 193544.05, 3998956.42, 6379144.05),
  new orcamentoAnual(2471.68, 1658290.25, 305064.81, 3599613.43, 5565440.17),
  new orcamentoAnual(24832.58, 1637474.13, 430515.51, 3680657.24, 5773479.46),
  new orcamentoAnual(122879.71, 952480.02, 237672.03, 2877650.93, 4190682.69)
];

const icb = new Instituto("Instituto de Ciências Biomédicas", "ICB", orcamentos);

var institutos = [fmrp, poli, fmusp, fflch, esalq, eesc, each, fmvz, institutoFisica, eca, icb];