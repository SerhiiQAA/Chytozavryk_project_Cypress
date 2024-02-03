// / <reference types="cypress" />
describe('Wigwam', () => {
    it('Вхід в Читозаврика',() => {
        cy.visit('https://chytozavryk.top/')
        cy.get('.styles_cookies__B0VbB > .Button_button__aem_D').click()
//modal_log_in/registration
        cy.get('.Header_buttonIn__UbNpa').click()
        cy.get('.Header_buttonIn__UbNpa').should('be.visible')
        cy.url().should('include', 'signin')
        cy.get('[type="email"]').clear().type('addchild!@gmail.com')
        cy.get('[type="password"]').clear().type('Addchild!1')
        cy.get('[type="submit"]').click()  
         cy.get('.Header_button__gdEXY').click()
//parents page
         cy.url().should('include','parents')         
         cy.get('.Parents_section__2evno').should('be.visible')
         cy.get('.KidList_list__N4Reb > :nth-child(1)').should('be.visible')
//wigwam page         
         cy.get(':nth-child(1) > .KidProfile_link__VVBbt > .KidProfile_thumb__mCkOv > .KidProfile_image__8xara').click()
         cy.url().should('include','wigwam')
         cy.get('.WigwamReadBooks_wraper__scgin').should('be.visible')
        //  cy.get('.WigwamReadBooks_wraper__scgin').should('have.text','Прочитано')
         cy.get('.WigwamMyMonsters_title__yrVTJ').should('be.visible')
        //  cy.get('.WigwamMyMonsters_title__yrVTJ').should('have.text','Мої Читозаври')
         cy.get('.RecomendedBooks_rec_title__B72d_').should('be.visible')
        //  cy.get('.RecomendedBooks_rec_title__B72d_').should('have.text','Рекомендовані')
    })
})