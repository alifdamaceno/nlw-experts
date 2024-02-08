const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const",
      ],
      correta: 0    
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2    
    },
    {
      pergunta: "Qual operador é usado para verificar igualdade em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1    
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "removeLast()",
        "pop()",
        "deleteLast()",
      ],
      correta: 1    
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dados primitivo em JavaScript?",
      respostas: [
        "string",
        "array",
        "boolean",
      ],
      correta: 1    
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "função myFunction()",
        "def myFunction()",
        "function myFunction()",
      ],
      correta: 2    
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0    
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof([]));",
      respostas: [
        "array",
        "object",
        "undefined",
      ],
      correta: 1    
    },
    {
      pergunta: "Qual método é usado para adicionar novos elementos ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0    
    },
    {
      pergunta: "Qual é a forma correta de se escrever 'Hello World!' em um alerta em JavaScript?",
      respostas: [
        "msgBox('Hello World!')",
        "alertBox('Hello World!')",
        "alert('Hello World!')",
      ],
      correta: 2    
    },
  ];
   
  const quiz = document.querySelector('#quiz') 
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt'). cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
        
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }  