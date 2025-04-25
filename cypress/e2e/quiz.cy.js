describe('<Quiz />', () => {
    beforeEach(()=>{cy.visit("/")
  })
    

      it('should render the start quiz button', () => {
        // see: https://on.cypress.io/mounting-react
        cy.get('button').should('be.visible').and('have.text', 'Start Quiz')
      })
    
      it('should show the first question when i click the button', () => {
          // see: https://on.cypress.io/mounting-react
          cy.get('button').should('be.visible').and('have.text', 'Start Quiz').click()
        })
  
        it('should show the next question when answer is submitted.', () => {
          // see: https://on.cypress.io/mounting-react
          cy.get('button').should('be.visible').and('have.text', 'Start Quiz').click()
          cy.get('button').contains('1').click()
        })
        it('should finish the quiz when all the questions are answered.', () => {
          // see: https://on.cypress.io/mounting-react
          cy.get('button').should('be.visible').and('have.text', 'Start Quiz').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('h2').should('be.visible').and('have.text', 'Quiz Completed').click()
        })
        it('should display score when test is over and show button to start a new quiz.', () => {
          // see: https://on.cypress.io/mounting-react
          cy.get('button').should('be.visible').and('have.text', 'Start Quiz').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('button').contains('1').click()
          cy.get('h2').should('be.visible').and('have.text', 'Quiz Completed').click()
          cy.get('.alert').should('be.visible').and('include.text', 'Your score').click()
          cy.get('button').should('be.visible').and('have.text', 'Take New Quiz').click()
  
        })
  })
    //  //first question is rendered. DONE
    //next question is rendered when answer is submitted. DONE
    //last question ends the quiz. DONE
    //when quiz is over score is rendered and user can start a new quiz. DONE