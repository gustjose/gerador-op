
// SISTEMA:

function GerarPersonagem(){
  var elementos = ["Sangue","Morte","Conhecimento","Energia"]
  
  var select1 = document.querySelector("#NEX_OP")
  var opNEX = Number(select1.value)

  var select2 = document.querySelector("#PLAY_OP")
  var opPlay = Number(select2.value)

  var NEXF = opNEX*opPlay

  var resumo = document.querySelector("#txt_resumo")


  //Sujeito:

  var sujeitos = ["Inocente Curioso","Criminoso","Pessoa Influente(magnata, político...)",
  "Bando Ocultista","Ex-agente da Ordo Realitas","Item amaldiçoado","Criatura Paranormal"
  ];

  var sujRamdom = [
    "Gabriel", "Gustavo", "Julio", "Ismael", "Aquino", "Geovane", "João", "Lucas",
    "Alex", "Ryan", "Bruno", "Flavio", "Francisco", "Rômulo", "Rômero", "Fabio", "Pedro",
    "Guilherme", "Izaias", "Luis", "Luan", "Jhonatan", "Eduardo", "Arthur", "Antonio", "Felipe",
    "Thiago", "Evandro", "Elton", "Iran", "Alisson", "Miguel", "Marcos", "Alexandre", "Alerrandro",
    "Eva", "Maria", "Cecilia", "Clara", "Simone", "Marie", "Margaret",
    "Valentina", "Rosa", "Nadia", "Joana", "Mary", "Anita", "Helen", "Amelia", "Naele",
    "Fernanda", "Catarina", "Carolina", "Angela", "Michelle", "Rita", "Nísia", "Lili",
    "Katharine", "Vitória", "Elizabeth", "Anne", "Ana", "Kelly", "Diana", "Maísa", "Olívia"
  ];

  var sobrenome = [
    "Albuquerque", "Almeida", "Alvares", "Alves", "Amorim", "Andrade", "Antunes", "Aragão", "Araújo", "Azevedo", "Barbosa", 
    "Bastos", "Batista", "Bernardes", "Botelho", "Cardoso", "Carmo", "Carvalho", "Castro", "Coelho", "Costa", "Coutinho", 
    "Couto", "Cruz", "Cunha", "Duarte", "Ferreira", "Figueiredo", "Fonseca", "Freitas", "Frota", "Furtado", "Gomes", "Gonçalves", 
    "Lopes", "Marques", "Martins", "Mendes", "Mesquita", "Monteiro", "Moraes", "Moreira", "Moura", "Neves", "Nunes", "Pereira", 
    "Pimentel", "Pires", "Ribeiro", "Rocha", "Rodrigues", "Santiago", "Santos", "Silva", "Soares", "Souza", "Simões"
  ];

  var aparencia = [
    "Caolho", "Marcas de queimadura na pele", "Sardas no rosto", "Nariz torto ou quebrado", "Cabelos coloridos", "Gago", 
    "Rosto de traços delicados", "Olheiras profundas", "Postura encurvada", "Usa roupas velhas, desbotadas ou esfarrapadas", 
    "Muito baixo", "Nariz grande", "Cicatriz no rosto", "Acima do peso", "Baixo", "Tatuagens pequenas", "Rosto angular e elegante", 
    "Postura altiva", "Magro", "Alto", "Rosto quadrado e firme", "Ombros largos", "Rosto redondo e simpático", "Nariz pequeno", 
    "Usa piercings", "Usa roupas formais", "Cabelos compridos (até os ombros)", "Tatuagens grandes à mostra", 
    "Barba ou maquiagem estilosa", "Extremamente alto", "Corte de cabelo estiloso (moicano, undercut...)", "Usa roupas de marca", 
    "Cabelos muito compridos (até a cintura)", "Tique nervoso no olho", "Calvo, careca ou cabelo raspado", 
    "Olhos grandes e expressivos", "Banguela", "Olhos de cor rara (azul, verde, âmbar...)", "Olhos de cores diferentes"
  ];

  var personalidade = [
    "Muito religioso, cita passagens sagradas", "Segue as leis ao pé da letra", "Não consegue decorar nomes próprios", 
    "está sempre arrumando o cabelo", "Enérgico, não deixa ninguém ficar parado", "Romântico e acredita no bem de todos", 
    "Ansioso e rói unhas", "Metódico e perfeccionista", "Se irrita facilmente e não leva desaforo pra casa", "Observador e curioso", 
    "Ambicioso e calculista", "Simpático e festeiro", "Pensativo e distraído", "Respeitoso e educado", 
    "Cuidadoso, pensa antes de falar", "Corajoso", "Empolgado e falastrão", "Postura altiva Sério e formal", "Inocente e otimista", 
    "Teimoso", "Desconfiado e pessimista", "Brincalhão e informal", "Tímido e modesto", "Covarde", "Impulsivo, fala antes de pensar", 
    "Grosseiro e vulgar", "Fala sem parar e com todo mundo", "Gosta de ficar sozinho", "Mandão e autoritário", "Chato e grudento", 
    "Cínico e insensível", "Orgulhoso de seu trabalho", "Sempre tenta levar vantagem", "Responsável e leva sua palavra muito a sério", 
    "Preguiçoso e fica bocejando constantemente", "Espirra ou tosse com frequência", "Gosta de cantarolar alegremente", 
    "Gosta de negociar favores", "Supersticioso, carrega amuletos de boa sorte"
  ];

  document.querySelector("#txt_criatura-1").textContent = ""

  sujtemp = sujeitos[Math.floor(Math.random() * sujeitos.length)]
  document.querySelector("#txt_sujeito").textContent = sujtemp
  document.querySelector("#tr_sujeito").textContent = sujtemp

  if(sujtemp == "Criatura Paranormal"){
    elem = elementos[Math.floor(Math.random() * elementos.length)]
    
    if (elem == "Morte") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-1").textContent = "Esqueleto de Lodo: VD10 — MORTE"
      }else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-1").textContent = "Succ: VD40 — MORTE"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-1").textContent = "Succ: VD40 — MORTE"
      } else if (60< NEXF && NEXF <=100) {
        var m_array = ["Aracnasita: VD100 — MORTE","Carniçal Preto da Morte: VD100 — MORTE"]
        var m_sorteio = m_array[Math.floor(Math.random() * m_array.length)]
        document.querySelector("#txt_criatura-1").textContent = m_sorteio
      } else if (100< NEXF && NEXF <=200) {
        var m_array2 = ["Escutado: VD120 — MORTE","Enraizado: VD120 — MORTE"]
        var m_sorteio2 = m_array2[Math.floor(Math.random() * m_array2.length)]
        document.querySelector("#txt_criatura-1").textContent = m_sorteio2
      } else if (200< NEXF && NEXF <=250) {
        document.querySelector("#txt_criatura-1").textContent = "Múmia Xipófaga: VD220 — MORTE"
      } else if (250< NEXF && NEXF <=280) {
        document.querySelector("#txt_criatura-1").textContent = "Marionete: VD280 — MORTE"
      } else if (280< NEXF && NEXF <=340) {
        var m_array3 = ["Nidere: VD340 — MORTE","Sempiternal: VD340 — MORTE"]
        var m_sorteio3 = m_array2[Math.floor(Math.random() * m_array3.length)]
        document.querySelector("#txt_criatura-1").textContent = m_sorteio3
      } else if (340< NEXF && NEXF <=380) {
        document.querySelector("#txt_criatura-1").textContent = "Ceifador Espiral: VD380 — MORTE"
      } else if (NEXF>380) {
        document.querySelector("#txt_criatura-1").textContent = "Deus da Morte: VD400 — MORTE"
      }
    }

    if (elem == "Sangue") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-1").textContent = "Zumbi de Sangue: VD10 — SANGUE"
      } else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-1").textContent = "Aberração de Carne: VD40 — SANGUE"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-1").textContent = "Aberração de Carne: VD40 — SANGUE"
      } else if (60< NEXF && NEXF <=100) {
        document.querySelector("#txt_criatura-1").textContent = "Zumbi de Sangue Bestial: VD80 — SANGUE"
      } else if (100< NEXF && NEXF <=150) {
        document.querySelector("#txt_criatura-1").textContent = "Mulher Afogada: VD120 — SANGUE"
      } else if (150< NEXF && NEXF <=200) {
        document.querySelector("#txt_criatura-1").textContent = "Enpap-x: VD180 — SANGUE"
      } else if (200< NEXF && NEXF <=250) {
        document.querySelector("#txt_criatura-1").textContent = "Zumbi de Sangue Colossal: VD240 — SANGUE"
      } else if (250< NEXF && NEXF <=280) {
        document.querySelector("#txt_criatura-1").textContent = "Minotauro: VD280 — SANGUE"
      } else if(280< NEXF && NEXF <=320) {
        document.querySelector("#txt_criatura-1").textContent = "Carente: VD320 — SANGUE"
      } else if (320< NEXF && NEXF <=340) {
        document.querySelector("#txt_criatura-1").textContent = "Kerberos: VD340 — SANGUE"
      } else if (340< NEXF && NEXF <=380) {
        document.querySelector("#txt_criatura-1").textContent = "Aniquilação: VD360 — SANGUE"
      } else if (NEXF>380) {
        document.querySelector("#txt_criatura-1").textContent = "O Diabo: VD400 — SANGUE"
      }
    }

    if (elem == "Conhecimento") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-1").textContent = "Existido: VD10 — CONHECIMENTO"
      } else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-1").textContent = "Existido: VD10 — CONHECIMENTO"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-1").textContent = "Vulto: VD60 — CONHECIMENTO"
      } else if (60< NEXF && NEXF <=80) {
        document.querySelector("#txt_criatura-1").textContent = "Parasita de Culpa: VD80 — CONHECIMENTO"
      } else if (80< NEXF && NEXF <=100) {
        document.querySelector("#txt_criatura-1").textContent = "Lembrado: VD100 — CONHECIMENTO"
      } else if (100< NEXF && NEXF <=160) {
        document.querySelector("#txt_criatura-1").textContent = "Rastreador Sombrio: VD160 — CONHECIMENTO"
      } else if (160< NEXF && NEXF <=220) {
        document.querySelector("#txt_criatura-1").textContent = "Ocioso: VD220 — CONHECIMENTO"
      } else if (220< NEXF && NEXF <=320) {
        document.querySelector("#txt_criatura-1").textContent = "Bicho-Papão: VD320 — CONHECIMENTO"
      } else if (320< NEXF && NEXF <=340) {
        document.querySelector("#txt_criatura-1").textContent = "Estrangeiro: VD340 — CONHECIMENTO"
      } else if(340< NEXF && NEXF <=360) {
        document.querySelector("#txt_criatura-1").textContent = "Silhueta: VD360 — CONHECIMENTO"
      } else if (360< NEXF && NEXF <=380) {
        document.querySelector("#txt_criatura-1").textContent = "Anjo: VD380 — CONHECIMENTO"
      } else if (NEXF>380) {
        document.querySelector("#txt_criatura-1").textContent = "Mascara do Medo: VD400 — CONHECIMENTO"
      }
    }

    if (elem == "Energia") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-1").textContent = "Anárquico: VD20 — ENERGIA"
      } else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-1").textContent = "Pertubardo de Energia: VD40 — ENERGIA"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-1").textContent = "Ciborgue: VD60 — ENERGIA"
      } else if (60< NEXF && NEXF <=100) {
        document.querySelector("#txt_criatura-1").textContent = "Anárquico Descontrolado: VD100 — ENERGIA"
      } else if (100< NEXF && NEXF <=140) {
        document.querySelector("#txt_criatura-1").textContent = "Sukkalgir: VD140 — ENERGIA"
      } else if (140< NEXF && NEXF <=200) {
        document.querySelector("#txt_criatura-1").textContent = "Viajante: VD200 — ENERGIA"
      } else if (200< NEXF && NEXF <=220) {
        document.querySelector("#txt_criatura-1").textContent = "Anomiático: VD220 — ENERGIA"
      } else if (220< NEXF && NEXF <=280) {
        document.querySelector("#txt_criatura-1").textContent = "Infecticídio: VD280 — ENERGIA"
      } else if (280< NEXF && NEXF <=320) {
        document.querySelector("#txt_criatura-1").textContent = "Teuopsia: VD320 — ENERGIA"
      } else if (320< NEXF && NEXF <=340) {
        document.querySelector("#txt_criatura-1").textContent = "Tempestuoso: VD340 — ENERGIA"
      } else if (340< NEXF && NEXF <=360) {
        document.querySelector("#txt_criatura-1").textContent = "Anomalia: VD360 — ENERGIA"
      } else if (NEXF>360) {
        document.querySelector("#txt_criatura-1").textContent = "Anomalia: VD413 — ENERGIA"
      }
    }

  }

  if(sujtemp == "Inocente Curioso" || sujtemp == "Criminoso" || sujtemp == "Pessoa Influente(magnata, político...)" || sujtemp == "Ex-agente da Ordo Realitas") {
    sujtemp2 = sujRamdom[Math.floor(Math.random() * sujRamdom.length)]
    sobren = sobrenome[Math.floor(Math.random() * sobrenome.length)]
    apar = aparencia[Math.floor(Math.random() * aparencia.length)]
    perso = personalidade[Math.floor(Math.random() * personalidade.length)]
    document.querySelector("#txt_criatura-1").textContent = sujtemp2 + " " + sobren + " " + "—" + " " + apar + "."  + " " + perso + "."
  }

// Ação

var acoes = [
  "invocou uma criatura de propósito", "invocou uma criatura sem querer", "está sequestrando inocentes",
  "está assassinando inocentes", "está usando um ritual ou item amaldiçoado para cometer crimes mundanos (roubo, extorsão...)",
  "está recrutando cultistas", "está pesquisando um ritual perigoso", "está coletando itens amaldiçoados", "matou um agente da Ordo Realitas"
  ,"res10"
],

  acoestemp = acoes[Math.floor(Math.random() * acoes.length)]
  document.querySelector("#txt_acoes").textContent = acoestemp
  document.querySelector("#tr_ação").textContent = acoestemp

if (acoestemp == "res10") {
  acoes.pop();
  acoestemp1 = acoes[Math.floor(Math.random() * acoes.length)]
  acoes.splice(acoes.indexOf(acoestemp1, 1))
  acoestemp2 = acoes[Math.floor(Math.random() * acoes.length)]
  document.querySelector("#txt_acoes").textContent = acoestemp1 + " " + "e" + " " + acoestemp2
  document.querySelector("#tr_ação").textContent = acoestemp1 + " " + "e" + " " + acoestemp2
}

if (acoestemp == "Invocou uma criatura de propósito e Invocou uma criatura sem querer") {
  acoes.pop();
  acoestemp1 = acoes[Math.floor(Math.random() * acoes.length)]
  acoes.splice(acoes.indexOf(acoestemp1, 1))
  acoestemp2 = acoes[Math.floor(Math.random() * acoes.length)]
  document.querySelector("#txt_acoes").textContent = acoestemp1 + " " + "e" + " " + acoestemp2
  document.querySelector("#tr_ação").textContent = acoestemp1 + " " + "e" + " " + acoestemp2
}

if (acoestemp == "Invocou uma criatura de propósito" || acoestemp == "Invocou uma criatura sem querer") {
  elem = elementos[Math.floor(Math.random() * elementos.length)]
    
    if (elem == "Morte") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-2").textContent = "Esqueleto de Lodo: VD10 — MORTE"
      }else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-2").textContent = "Succ: VD40 — MORTE"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-2").textContent = "Succ: VD40 — MORTE"
      } else if (60< NEXF && NEXF <=100) {
        var m_array = ["Aracnasita: VD100 — MORTE","Carniçal Preto da Morte: VD100 — MORTE"]
        var m_sorteio = m_array[Math.floor(Math.random() * m_array.length)]
        document.querySelector("#txt_criatura-2").textContent = m_sorteio
      } else if (100< NEXF && NEXF <=200) {
        var m_array2 = ["Escutado: VD120 — MORTE","Enraizado: VD120 — MORTE"]
        var m_sorteio2 = m_array2[Math.floor(Math.random() * m_array2.length)]
        document.querySelector("#txt_criatura-2").textContent = m_sorteio2
      } else if (200< NEXF && NEXF <=250) {
        document.querySelector("#txt_criatura-2").textContent = "Múmia Xipófaga: VD220 — MORTE"
      } else if (250< NEXF && NEXF <=280) {
        document.querySelector("#txt_criatura-2").textContent = "Marionete: VD280 — MORTE"
      } else if (280< NEXF && NEXF <=340) {
        var m_array3 = ["Nidere: VD340 — MORTE","Sempiternal: VD340 — MORTE"]
        var m_sorteio3 = m_array2[Math.floor(Math.random() * m_array3.length)]
        document.querySelector("#txt_criatura-2").textContent = m_sorteio3
      } else if (340< NEXF && NEXF <=380) {
        document.querySelector("#txt_criatura-2").textContent = "Ceifador Espiral: VD380 — MORTE"
      } else if (NEXF>380) {
        document.querySelector("#txt_criatura-2").textContent = "Deus da Morte: VD400 — MORTE"
      }
    }

    if (elem == "Sangue") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-2").textContent = "Zumbi de Sangue: VD10 — SANGUE"
      } else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-2").textContent = "Aberração de Carne: VD40 — SANGUE"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-2").textContent = "Aberração de Carne: VD40 — SANGUE"
      } else if (60< NEXF && NEXF <=100) {
        document.querySelector("#txt_criatura-2").textContent = "Zumbi de Sangue Bestial: VD80 — SANGUE"
      } else if (100< NEXF && NEXF <=150) {
        document.querySelector("#txt_criatura-2").textContent = "Mulher Afogada: VD120 — SANGUE"
      } else if (150< NEXF && NEXF <=200) {
        document.querySelector("#txt_criatura-2").textContent = "Enpap-x: VD180 — SANGUE"
      } else if (200< NEXF && NEXF <=250) {
        document.querySelector("#txt_criatura-2").textContent = "Zumbi de Sangue Colossal: VD240 — SANGUE"
      } else if (250< NEXF && NEXF <=280) {
        document.querySelector("#txt_criatura-2").textContent = "Minotauro: VD280 — SANGUE"
      } else if(280< NEXF && NEXF <=320) {
        document.querySelector("#txt_criatura-2").textContent = "Carente: VD320 — SANGUE"
      } else if (320< NEXF && NEXF <=340) {
        document.querySelector("#txt_criatura-2").textContent = "Kerberos: VD340 — SANGUE"
      } else if (340< NEXF && NEXF <=380) {
        document.querySelector("#txt_criatura-2").textContent = "Aniquilação: VD360 — SANGUE"
      } else if (NEXF>380) {
        document.querySelector("#txt_criatura-2").textContent = "O Diabo: VD400 — SANGUE"
      }
    }

    if (elem == "Conhecimento") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-2").textContent = "Existido: VD10 — CONHECIMENTO"
      } else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-2").textContent = "Existido: VD10 — CONHECIMENTO"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-2").textContent = "Vulto: VD60 — CONHECIMENTO"
      } else if (60< NEXF && NEXF <=80) {
        document.querySelector("#txt_criatura-2").textContent = "Parasita de Culpa: VD80 — CONHECIMENTO"
      } else if (80< NEXF && NEXF <=100) {
        document.querySelector("#txt_criatura-2").textContent = "Lembrado: VD100 — CONHECIMENTO"
      } else if (100< NEXF && NEXF <=160) {
        document.querySelector("#txt_criatura-2").textContent = "Rastreador Sombrio: VD160 — CONHECIMENTO"
      } else if (160< NEXF && NEXF <=220) {
        document.querySelector("#txt_criatura-2").textContent = "Ocioso: VD220 — CONHECIMENTO"
      } else if (220< NEXF && NEXF <=320) {
        document.querySelector("#txt_criatura-2").textContent = "Bicho-Papão: VD320 — CONHECIMENTO"
      } else if (320< NEXF && NEXF <=340) {
        document.querySelector("#txt_criatura-2").textContent = "Estrangeiro: VD340 — CONHECIMENTO"
      } else if(340< NEXF && NEXF <=360) {
        document.querySelector("#txt_criatura-2").textContent = "Silhueta: VD360 — CONHECIMENTO"
      } else if (360< NEXF && NEXF <=380) {
        document.querySelector("#txt_criatura-2").textContent = "Anjo: VD380 — CONHECIMENTO"
      } else if (NEXF>380) {
        document.querySelector("#txt_criatura-2").textContent = "Mascara do Medo: VD400 — CONHECIMENTO"
      }
    }

    if (elem == "Energia") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-2").textContent = "Anárquico: VD20 — ENERGIA"
      } else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-2").textContent = "Pertubardo de Energia: VD40 — ENERGIA"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-2").textContent = "Ciborgue: VD60 — ENERGIA"
      } else if (60< NEXF && NEXF <=100) {
        document.querySelector("#txt_criatura-2").textContent = "Anárquico Descontrolado: VD100 — ENERGIA"
      } else if (100< NEXF && NEXF <=140) {
        document.querySelector("#txt_criatura-2").textContent = "Sukkalgir: VD140 — ENERGIA"
      } else if (140< NEXF && NEXF <=200) {
        document.querySelector("#txt_criatura-2").textContent = "Viajante: VD200 — ENERGIA"
      } else if (200< NEXF && NEXF <=220) {
        document.querySelector("#txt_criatura-2").textContent = "Anomiático: VD220 — ENERGIA"
      } else if (220< NEXF && NEXF <=280) {
        document.querySelector("#txt_criatura-2").textContent = "Infecticídio: VD280 — ENERGIA"
      } else if (280< NEXF && NEXF <=320) {
        document.querySelector("#txt_criatura-2").textContent = "Teuopsia: VD320 — ENERGIA"
      } else if (320< NEXF && NEXF <=340) {
        document.querySelector("#txt_criatura-2").textContent = "Tempestuoso: VD340 — ENERGIA"
      } else if (340< NEXF && NEXF <=360) {
        document.querySelector("#txt_criatura-2").textContent = "Anomalia: VD360 — ENERGIA"
      } else if (NEXF>360) {
        document.querySelector("#txt_criatura-2").textContent = "Anomalia: VD413 — ENERGIA"
      }
    }
}

// Local

var local = [
  "Escola (Habitado)","Escola (Desabitado)","Hospital (Habitado)","Hospital (Desabitado)","Vilarejo (Habitado)",
  "Vilarejo (Desabitado)","Fazenda (Habitado)","Fazenda (Desabitado)","Mata Fechada","Becos de Metropole","Arranha-céu (Habitado)",
  "Arranha-céu (Desabitado)","Grande loja de departamento (Habitado)","Grande loja de departamento (Desabitado)","Esgoto",
  "Zona industrial da cidade (Habitado)","Zona industrial da cidade (Desabitado)","Shopping center (Habitado)","Shopping center (Desabitado)",
  "Orfanato (Habitado)","Orfanato (Desabitado)","Museu (Habitado)","Museu (Desabitado)","Cemitério","Delegacia ou base militar",
  "Mansão (Habitado)","Mansão (Desabitado)","Antiga sede da Ordo Realitas","Navio (Habitado)","Navio (Desabitado)","Ilha remota","res20"
];

localtemp = local[Math.floor(Math.random() * local.length)]
  document.querySelector("#txt_local").textContent = localtemp
  document.querySelector("#tr_local").textContent = localtemp

  if (localtemp == "res20") {
    local.pop();
    localtemp1 = local[Math.floor(Math.random() * local.length)]
    local.splice(local.indexOf(localtemp1, 1))
    localtemp2 = local[Math.floor(Math.random() * local.length)]
    document.querySelector("#txt_local").textContent = localtemp1 + " " + "e" + " " + localtemp2
    document.querySelector("#tr_local").textContent = localtemp1 + " " + "e" + " " + localtemp2
  }

// Aliado

var aliado = [
  "Civil alheio ao paranormal","Civil exposto ao paranormal","Antigo conhecido de um dos agentes","Outro agente da Ordo Realitas (Na Ativa)","Outro agente da Ordo Realitas (Aposentado)"
];

aliadotemp = aliado[Math.floor(Math.random() * aliado.length)]
  document.querySelector("#txt_aliado").textContent = aliadotemp
  document.querySelector("#tr_aliado").textContent = aliadotemp

// Objeto

var objeto = [
  "Equipamento","Ingrediente para um ritual poderoso (máscara ritualística, gema rara...)","Equipamento com 1d3–1 modificações",
  "Artefato com grande valor para a Ordem (tomo antigo, relíquia ancestral...)","Item amaldiçoado"
];

var objtipo = ["Arma","Proteção","Equipamento geral/acessório"];

objetotemp = objeto[Math.floor(Math.random() * objeto.length)]
  document.querySelector("#txt_objeto").textContent = objetotemp
  document.querySelector("#tr_objeto").textContent = objetotemp

if (objetotemp == "Equipamento" || objetotemp == "Equipamento com 1d3–1 modificações" || objetotemp == "Item amaldiçoado") {
  objtipotemp = objtipo[Math.floor(Math.random() * objtipo.length)]
  document.querySelector("#txt_objeto-1").textContent = objtipotemp
}

// Evento

var evento = ["o aparecimento de uma/outra criatura paranormal de grande poder", "a chegada de reforços inimigos", "uma doença paranormal/maldição afetando o aliado", "civis se revoltando contra eles", "a revelação de que o aliado era o vilão", "a revelação de que as ações do inimigo eram justificadas", "perda de seus equipamentos (por furto, falha tecnológica...)", "ter que proteger um civil", "perda de comunicação com a Ordo Realitas e acesso ao sistema de crédito", "agentes da lei os importunando", "um desastre (incêndio, tempestade, furacão, blecaute, agitação civil...)", "o aparecimento de um antigo inimigo"];

eventotemp = evento[Math.floor(Math.random() * evento.length)]
  document.querySelector("#txt_evento").textContent = eventotemp
  document.querySelector("#tr_evento").textContent = eventotemp

}
