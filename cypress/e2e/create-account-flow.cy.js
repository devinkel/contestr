const { Chance } = require("chance")
const fields = require("../support/formRegisterFields.js")
const fakerDatas = new Chance()

describe('Testing create account', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    const openLoginModal = () => {
        cy.closePopup()
        cy.get('.pointer.go__login').click({ force: true })
    }

    const openCreateAccountModal = () => {
        cy.closePopup()
        cy.get('.pointer.go__create-account').click({ force: true })
    }

    const login = (email) => {
        cy.get('.login > :nth-child(1) > input').type(email)
        cy.get('.login > button').click()
        cy.contains('CPF / CNPJ')

    }

    const registerForm = () => {
        cy.get('.customer-floater .create .customer-create input[name]').each(($input) => {
            const inputName = $input.attr('name');
            const action = fields[inputName];

            if (action) {
                cy.wrap($input).type(action());
            }
        });

        cy.get('.customer-floater button[type=submit]').contains('Criar conta').click({ multiple: true });

        cy.contains('.noty_body', 'Conta criada com sucesso', { timeout: 10000 });

    };

    it('if email doesn`t exist in db, should open new user form', () => {
        openLoginModal()
        login(fakerDatas.email({ domain: "convertr.teste.com" }))
        registerForm()
    })

    it('should create account when click in create-account modal', () => {
        openCreateAccountModal()
        registerForm()
    })
})