Feature: Realizar Compra Site Marabraz 

Scenario: Validar Pedido de Compra 

Given que eu acesse o site marabraz
When  seleciono o campo busca 
And   busco por celular samsung 
And   seleciono o modelo 
And   clico no botão comprar 
And   preencho campo cep 
And   clico em calcular frete 
And   clico no botão finalizar compra 
And   preencho os campos de login e-mail e senha 
And   clico em prosseguir 
And   clico em prosseguir novamente 
And   seleciono boleto bancário 
Then  clico em finalizar compra 
