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
    "Almeida"
  ];

  var aparencia = [
    "Caolho"
  ];

  var personalidade = [
    "Muito religioso, cita passagens sagradas"
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
        document.querySelector("#txt_criatura-1").textContent = "Aberração de Carne: VD40 — SANGUE"
      }
    }

    if (elem == "Conhecimento") {
      if (NEXF <=10) {
        document.querySelector("#txt_criatura-1").textContent = "Existido: VD10 — CONHECIMENTO"
      } else if (10< NEXF && NEXF <=40) {
        document.querySelector("#txt_criatura-1").textContent = "Existido: VD10 — CONHECIMENTO"
      } else if (40< NEXF && NEXF <=60) {
        document.querySelector("#txt_criatura-1").textContent = "Vulto: VD60 — CONHECIMENTO"
      } else if (60< NEXF && NEXF <=100) {
        document.querySelector("#txt_criatura-1").textContent = "Lembrado: VD100 — CONHECIMENTO"
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
  "Invocou uma criatura de propósito", "Invocou uma criatura sem querer", "Está sequestrando inocentes",
  "Está assassinando inocentes", "Está usando um ritual ou item amaldiçoado para cometer crimes mundanos (roubo, extorsão...)",
  "Está recrutando cultistas", "Está pesquisando um ritual perigoso", "Está coletando itens amaldiçoados", "Matou um agente da Ordo Realitas"
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


}
