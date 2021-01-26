/// <reference types="Cypress" />

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseURL")

class TestPage {
    //Acessando o Site 

     acessarSite() {
         cy.visit(url)
         cy.wait(2000)
     }

     //Esperar Site 
       
     esperar() {
         cy.wait(2000)
     }

     //Validar Campos 



     CampoBusca() {
         cy.get(testelements.Busca()).type('celular samsung')
         cy.wait(2000)
     }


     BuscoCelular() {
         cy.get(testelements.Celular()).click()
         cy.wait(2000)
     }

     //MarcaSamsung() {
        // cy.get(testelements.Samsung()).contains('Samsung').click({force:true})
         //cy.wait(2000)
     //}

     SelecionarModelo() {
         cy.get(testelements.Modelo()).click()
         cy.wait(2000)
     }

     ClicarComprar() {
         cy.get(testelements.Comprar()).click()
         cy.wait(2000)
     }

     PreencherCep() {
         cy.get(testelements.Cep()).type('06040050')
         cy.wait(2000)
     }

     CalcularFrete() {
         cy.get(testelements.Frete()).click()
         cy.wait(2000)
     }

     FinalizaCompra() {
         cy.get(testelements.FinalizarCompra()).click()
         cy.wait(2000)
     }

     PreencherEmail() {
         cy.get(testelements.Email()).type('analista.qa.itsingular@gmail.com')
         cy.wait(2000)
     }

     PreencherSenha() {
         cy.get(testelements.Senha()).type('redes123')
         cy.wait(2000)
     }

     ClicarProsseguir() {
         cy.get(testelements.Prosseguir()).click()
         cy.wait(2000)
     }

     ClicarProsseguirNovamente() {
         cy.get(testelements.ProsseguirNovamente()).click()
         cy.wait(2000)
     }

     SelecionarBoleto() {
         cy.get(testelements.Boleto()).click()
         cy.wait(2000)
     }

     ClicarFinalizar() {
         cy.get(testelements.Finalizar()).click()
         cy.wait(2000)
     }

}
export default TestPage;