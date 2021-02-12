# Projeto_Flavio_Martins


Diante de um cenário de compra em um e-commerce escolha a forma de pagamento (débito, crédito à vista ou
crédito parcelado ou Boleto ) e desenvolva o seu teste automatizado.

Segue as considerações:

a) Esta etapa é a última onde o produto já está no carrinho e o endereço já foi informado;

b) A mensagem final da compra é: "Seu pedido foi realizado com sucesso."

c) Utilize os elementos a seguir conforme sua necessidade:


OBS: Nesse projeto fiz a escolha final de forma de pagamento como BOLETO BANCÁRIO, afim de evitar problemas na finalização e na validação do número fake 
do cartão utilizado.

# Site Escolhido Para Testes 

- https://www.marabraz.com.br/

# Ferramentas Utilizadas no Projeto 

- Sistema Operacional Windows 7 

- VSCODE     - (Editor de Código Fonte) - https://code.visualstudio.com/
- NODEjs     - https://nodejs.org/en/   - Node.js trata-se de um software open-source, cross-platform, e de um runtime de JavaScript 
- CYPRESS    - https://www.cypress.io/  - Framework de testes automatizados
- JAVASCRIPT - Linguagem de programação
 



# Pré-requisitos Para Rodar o Projeto 

1 - Ter Instalado o VSCODE (Editor de Código Fonte) - https://code.visualstudio.com/

2 - Usar os Seguintes Sistemas Operacionais - Linux, MacOs e Windows:

- Linux Ubuntu a partir da 12.04, Fedora 21 e Debian 8 (somente x64);
- MacOs a partir da 10.9 (somente x64);
- Windows a partir do 7.

3 - Você precisa ter o Node.js instalado, a partir da versão 8. - https://nodejs.org/en/

# Carregar o Projeto 

1 - Faça o download do meu projeto em questão (Projeto_IT_Singular_Analista_Qualidade_Flavio_Martins)

2 - Abra o Editor de Código VSCODE 

3 - Na Aba FILE DO VSCODE, selecione OPEN FOLDER e selecione a pasta do projeto (Projeto_IT_Singular_Analista_Qualidade_Flavio_Martins) - o projeto deverá carregar automáticamente.

4 - No Menu do topo selecione TERMINAL >> NEW TERMINAL - será apresentado um terminal prompt semelhante a esse: C:\Users\Flávio\Desktop\Avaliação Analista de Qualidade - Flávio Martins>

5 - Para execução do projeto digite o comando:        npm run test:firefox 

6 - O projeto deverá rodar no navegador FIREFOX da forma que deixei configurado, o mesmo deverá concluir até a tela de pagamento por BOLETO BANCÁRIO.


# Mudança de Navegador 

- Caso ache necessário a mudança de navegador, faça o seguinte procedimento para alteração:

- Procure pela extensão package.json >> em seguida selecione a mesma e será apresentado o código abaixo:

- Dentro do código faça a alteração de firefox >> para o navegador de sua preferência, preste atenção porque o nome do navegador escolhido é repetido duas vezes. "test:firefox": "cypress run --browser firefox --no-exit "



{

"scripts": {

    "test:firefox": "cypress run --browser firefox --no-exit "
},


"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/steps"
},


"devDependencies": {

    "cypress": "^6.3.0",
    
    "cypress-cucumber-preprocessor": "^4.0.0",
    
    "mochawesome": "^6.2.1"
}
}

# Vídeo do Teste 

- Caso queira gerar um vídeo para o teste, novamente iremos utilizar o código e procedimento acima, irei destacar abaixo para não confundir.

- Procure pela extensão package.json >> em seguida selecione a mesma e será apresentado o código abaixo:

- Dentro do código faça a alteração - DE >> "test:firefox": "cypress run --browser firefox --no-exit " PARA >> "test:firefox": "cypress run --browser firefox  " , retirando apenas o comando (--no-exit), dessa forma o mochawesome que está configurado reconhecerá e irá gerar um vídeo que estará dentro da pasta do projeto (cypress\videos).

- Caso esteja com problemas de velocidade no vídeo do teste, use o navegador GOOGLE CHROME, que o teste será gravado em uma velocidade menor.

{

"scripts": {

    "test:firefox": "cypress run --browser firefox --no-exit "
},


"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/steps"
},


"devDependencies": {

    "cypress": "^6.3.0",
    
    "cypress-cucumber-preprocessor": "^4.0.0",
    
    "mochawesome": "^6.2.1"
}
}


# Autor

- Flávio Ferreira Martins 



