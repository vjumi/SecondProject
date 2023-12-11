//ações de interação com a página
const el = require ('./elements').ELEMENTS
class Login{

    acessarLogin(){

        cy.visit('')
    }

    preencherLogin(){

  //      cy.get(el.usuario).type("Admin")
    //    cy.get(el.senha).type("admin123")
      //  cy.get(el.botaoLogin).click()
        //cy.get('h1').contains('Dashboard')

    }


}

export default new Login ();