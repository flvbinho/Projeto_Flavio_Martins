/* global Given, Then, And, When */


import TestPage from '../pageobjects/testPage'
const projeto = new TestPage

Given("que eu acesse o site marabraz", () => {
    projeto.acessarSite();
    projeto.esperar();
})

When("seleciono o campo busca", () => {
    projeto.CampoBusca();
    projeto.esperar();
    
})

And("busco por celular samsung", () => {
    projeto.BuscoCelular();
    projeto.esperar();


})

//And("seleciono a marca samsung", () => {
   // projeto.MarcaSamsung();
   // projeto.esperar();


//})

And("seleciono o modelo", () => {
    projeto.SelecionarModelo();
    projeto.esperar();
})

And("clico no botão comprar", () => {
    projeto.ClicarComprar();
    projeto.esperar();


})

And("preencho campo cep", () => {
    projeto.PreencherCep();
    projeto.esperar();


})

And("clico em calcular frete", () => {
    projeto.CalcularFrete();
    projeto.esperar();


})

And("clico no botão finalizar compra", () => {
    projeto.FinalizaCompra();
    projeto.esperar();


})

And("preencho os campos de login e-mail e senha", () => {
    projeto.PreencherEmail();
    projeto.esperar();
    projeto.PreencherSenha();
    projeto.esperar();


})

And("clico em prosseguir", () => {
    projeto.ClicarProsseguir();
    projeto.esperar();


})

And("clico em prosseguir novamente", () => {
    projeto.ClicarProsseguirNovamente();
    projeto.esperar();


})

And("seleciono boleto bancário", () => {
    projeto.SelecionarBoleto();
    projeto.esperar();


})

Then("clico em finalizar compra", () => {
    projeto.ClicarFinalizar();
    projeto.esperar();


})