import { crimson, royalblue } from '../constants'
import { normalize } from '../helpers'

describe('Moods', () => {
  const mood = () => cy.get('[id=mood]')
  const makeHappy = () => cy.get('[id=makeHappy]')
  const makeSad = () => cy.get('[id=makeSad]')
  const reset = () => cy.get('[id=resetMood]')

  const not_sure = normalize('Not sure how I feel')
  const quite_happy = normalize('Quite happy!')
  const rather_sad = normalize('Rather sad')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Initial state. These tests should already be passing', () => {
    it('contains the required elements', () => {
      mood().should('exist')
      makeHappy().should('exist')
      makeSad().should('exist')
      reset().should('exist')
    })
    it('colors and text content are what they should be', () => {
      mood().should(e => {
        expect(normalize(e.text())).to.equal(not_sure)
      })
      mood().should('have.css', 'color', crimson)
    })
  })

  describe('Moods tests', () => {
    it('can make happy', () => {
      makeHappy().click()
      mood().should(e => {
        expect(normalize(e.text())).to.equal(quite_happy)
      })
    })
    it('can make sad', () => {
      makeSad().click()
      mood().should(e => {
        expect(normalize(e.text())).to.equal(rather_sad)
      })
    })
    it('can reset the mood', () => {
      reset().click()
      mood().should(e => {
        expect(normalize(e.text())).to.equal(not_sure)
      })
    })
    it('can render the message in the correct color', () => {
      makeHappy().click()
      mood().should('have.css', 'color', royalblue)
      makeSad().click()
      mood().should('have.css', 'color', crimson)
      reset().click()
      mood().should('have.css', 'color', crimson)
    })
  })
})
