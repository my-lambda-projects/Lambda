import { crimson, royalblue } from '../constants'

describe('Input', () => {
  const input = () => cy.get('[id=input]')
  const output = () => cy.get('[id=output]')
  const reset = () => cy.get('[id=resetInput]')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Initial state. These tests should already be passing', () => {
    it('contains the required elements', () => {
      input().should('exist')
      output().should('exist')
      reset().should('exist')
    })
    it('texts and input value are what it should be', () => {
      input().should('have.value', '')
      output().should('contain', '')
    })
  })

  describe('Input tests', () => {
    it('can type in the input', () => {
      input().type('abc').should('have.value', 'abc')
    })
    it('output renders correctly in all caps', () => {
      input().type('ABC')
      output().should('contain', 'ABC')
      input().clear()
      input().type('abc')
      output().should('contain', 'ABC')
    })
    it('output renders in the correct color depending on string length', () => {
      input().type('0123456789')
      output().should('have.css', 'color', royalblue)
      input().type('x')
      output().should('have.css', 'color', crimson)
    })
  })
})
