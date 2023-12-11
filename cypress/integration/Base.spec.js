/// <reference types="cypress"/>
/// <reference path="../support/commands.js" />
import Login from '../support/pages/Login';

describe('ProjetoBase', () => {Cypress.on('uncaught:exception', (err, runnable) => {return false;});



  it('Realizar Login com sucesso', () => {


    describe('Realizar Login com sucesso', () => {

      Login.acessarLogin()
      //Login.preencherLogin()
      Login.preencherloginfalho()

    })

    });
    
});
