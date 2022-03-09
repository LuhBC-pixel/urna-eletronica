PROJETO URNA ELETRÔNICA

O desafio consiste em criar uma aplicação web utilizando react para simular uma votação, de maneira parecida com uma urna eletrônica. Os parâmetros são os seguintes:

Toda a configuração deverá ser feita por um arquivo JSON conforme abaixo:

{
  “codigoFinalizacao”: 0000,
  “eleitores”: [
    {
       “Id”: 1234,
       “Nome”: “Eleitor A”
    },
    {
       “Id”: 5678,
       “Nome”: “Eleitor B”
    },
    {
       “Id”: 9012,
       “Nome”: “Eleitor B”
    }
  ],
  “lanches”: [
    {
       “Id”: 11,
       “Nome”: “Hamburguer”
    },
    {
       “Id”: 22,
       “Nome”: “Pizza”
    },
    {
       “Id”: 33,
       “Nome”: “Pastel”
    }
  ],
  “bebidas”: [
    {
       “Id”: 444,
       “Nome”: “Refrigerante”
    },
    {
       “Id”: 777,
       “Nome”: “Suco”
    },
    {
       “Id”: 999,
       “Nome”: “Água”
    }
  ]
}


OBS: O candidato pode adicionar mais dados ao JSON caso queira, como fotos (URL) ou mais informações sobre os ítens.


A tela geral deve ser composta por um teclado numérico a direita, similar ao utilizado em uma urna eletrônica com as opções confirmar, branco ou corrigir, e à esquerda, uma tela que irá mudar de acordo com o momento da votação. (Apenas o lado esquerdo muda)

#TELA 1
=======
Quadrados em branco para identificação do eleitor. Após digitar no teclado numérico e clicar em confirma deverá seguir para a tela seguinte ou informar “Pessoa Não Identificada”.
// tela de identificação do eleitor

#TELA 2
=======
No cabeçalho, os dados da pessoa que está votando
No meio da tela, quadrados em branco para informar o numero do lanche.
Após digitar o número, o lanche correspondente já deve ser exibido, sendo preciso confirmar.
// tela do eleitor e seleção do lanche

#TELA 3
=======
No cabeçalho, os dados da pessoa que está votando
No meio da tela, quadrados em branco para informar a bebida.
Após digitar o número, a bebida correspondente já deve ser exibida, sendo preciso confirmar.
// tela do eleitor e seleção da bebida

#TELA 4
=======
Apenas a palavra FIM
Essa tela deve ser substituída pela tela 1 automaticamente após 3 segundos para uma nova votação.
// tela FIM

#TELA 5
=======
Acessível apenas ao ser digitado 0000 como pessoa
Exibe um pequeno relatório de quantos votos cada lanche teve, incluindo brancos e nulos
Exibe o número de pessoas que votaram
// tela de relatório

IMPORTANTE
===========
- O botão BRANCO não deve ser exibido na tela 1
- A votação em branco ou nulo deve ser  possível nas telas 2 e 3
- Uma pessoa não pode votar duas vezes (exibir erro: “PESSOA JÁ VOTOU”)


* Não será cobrado responsividade para esse projeto,
* Atenção para a componentização
* Não deve ser usado banco de dados. Utilizar Local Storage para manter os dados.
