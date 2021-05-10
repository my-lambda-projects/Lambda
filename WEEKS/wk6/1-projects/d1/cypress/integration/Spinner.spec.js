import { normalize } from '../helpers'

describe('Spinner', () => {
  const spinner = () => cy.get('[id=spinner]')
  const toggleSpinner = () => cy.get('[id=toggleSpinner]')

  const hide_spinner = normalize('Hide Spinner')
  const show_spinner = normalize('Show Spinner')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Initial state. These tests should already be passing', () => {
    it('contains the required elements', () => {
      spinner().should('exist')
      toggleSpinner().should('exist')
    })
    it('colors and text content are what they should be', () => {
      toggleSpinner().should(e => {
        expect(normalize(e.text())).to.equal(hide_spinner)
      })
    })
  })

  describe('Spinner tests', () => {
    it('can toggle the spinner', () => {
      toggleSpinner().click()
      spinner().should('not.exist')
      toggleSpinner().click()
      spinner().should('exist')
    })
    it('can render the correct label for the button', () => {
      toggleSpinner().click()
      toggleSpinner().should(e => {
        expect(normalize(e.text())).to.equal(show_spinner)
      })
      toggleSpinner().click()
      toggleSpinner().should(e => {
        expect(normalize(e.text())).to.equal(hide_spinner)
      })
    })
  })
})
