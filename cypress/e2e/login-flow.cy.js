describe('Testing login store', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    const openLoginModal = () => {
        cy.closePopup()
        cy.get('.pointer.go__login').click({ force: true, multiple: true })
    }

    const login = (email, password) => {
        cy.get('.login > :nth-child(1) > input').type(email)
        cy.get('.login > button').click()
        cy.get('[style=""] > input').type(password)
        cy.get('.login > button').click()
    }

    it('should open login and fail', () => {
        openLoginModal()
        login('renan@convertr.com.br', 'convertr1233@') // wrong password
        cy.contains('.noty_body', 'Usuário ou senha inválidos')
    })

    it('should open login and success', () => {
        openLoginModal()
        login('renan@convertr.com.br', 'convertr123@')
        cy.contains('.noty_body', 'Login efetuado com sucesso')
    })
})
