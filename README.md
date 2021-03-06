# My Secret Diary
Como foi o seu dia hoje?

## O que é o My Secret Diary?

O My Secret Diary é uma ferramenta que auxilia na codificação e decodificação de mensagens inseridas pelo usuário utilizando a metodologia da Cifra de César. Mas o que é essa cifra? É uma das mais simples e conhecidas técnicas de criptografia. É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes. Por exemplo, com uma troca de três posições, A seria substituído por D, B se tornaria E, e assim por diante. O nome do método é em homenagem a Júlio César, que o usou para se comunicar com os seus generais.

![My Secret Diary](src/images/my-secret-diary.PNG)

# Para quem foi feito o My Secret Diary?

O My Secret Diary é voltado para todos os públicos que queiram contar suas histórias, contar seus segredos e desabafar acerca de como foi seu dia, porém não confiam em apenas esconder seus diários de papel pela casa.

## Como o My Secret Diary resolve os problemas dos usuário?

Com sua função de codificar as mensagens inseriadas pelo usuário, o mesmo pode se sentir seguro, pois suas histórias estarão sempre protegidas já que foram criptografadas pelo My Secret Diary e somente poderão ser decodificadas inserindo a mensagem codificada e a chave de deslocamento correta. 

## Como usar o My Secret Diary:

É muito simples de usar, basta seguir os passos a seguir

1. Inserir a mensagem que deseja manter em segredo, ou uma mensagem que já foi codificada.
2. Escolha o deslocamento que deseja usar para codificar, ou o deslocamento correto para retomar sua mensagem original.
3. Escolha o botão "Cifrar" para transformar sua mensagem em segredo, ou o botão "Decifrar" para resgatar sua mensagem original.

## Como foi feito o My Secret Diary?

O projeto foi dividido em 4 grandes documentos:

* HTML (index.html): Aqui foi montada toda a estrutura, o esqueleto da página. Descrição do programa, instruções, caixas para inserir e receber as mensagens, caixa para escolher o deslocamento e botões para codificar e decodificar. As caixas para inserir e receber mensagens foram criadas como "textarea", sendo que a segunda é apenas para leitura. Os botões foram inseridos com "inputs" sendo os de codificar e decodificar do tipo "submit" e o botão do offset do tipo "number".

* JavaScript (index.js): Aqui foi feita toda a manipulação do DOM. 

* JavaScript (cipher.js): Neste arquivo JavaScript foram feitas as funções de codificar e decodificar as mensagens.

* CSS (style.css): Neste arquivo foi feita toda e estilização do programa.

## Para realizar o deploy, siga os passos abaixo:

1. No GitHub, entre no repositório desejado e clique em "Settings".
2. Role a página para baixo até encontrar "GitHub Pages".
3. Clique no menu suspenso "Source" e selecione uma fonte de publicação.

## Para clonar em sua máquina, segui os passos a seguir:

1. Faça um fork deste repositório e em seguida faça um clone para sua máquina digitando o comando `git clone <link do seu fork>` na sua linha de comando (CLI).
2. Abra a pasta do projeto navegando pela CLI e rode `npm install` para realizar a instalação de todas as dependências necessárias para o projeto.
