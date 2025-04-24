import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
    it('should render the start quiz button', () => {
      // see: https://on.cypress.io/mounting-react
      cy.mount(<Quiz/>)
      cy.get('button').should('be.visible').and('have.text', 'Start Quiz')
    })
  
    it('should show the first question when i click the button', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Quiz/>)
        cy.get('button').should('be.visible').and('have.text', 'Start Quiz').click()
      })

  })