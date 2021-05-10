import { royalblue, gold } from '../constants'
import { listOfAwesome } from '../../src/components/Programmers'

describe('Programmers', () => {
  const featured = () => cy.get('[id=featured]')

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Initial state. These tests should already be passing', () => {
    it('contains the list of programmers', () => {
      cy.get('.programmers .programmer')
        .then(programmers => {
          expect(programmers).to.have.length(6)
          for (let i = 0; i < 6; i++) {
            expect(programmers[i]).to.include.text(listOfAwesome[i].name)
            expect(programmers[i]).to.have.descendants('button')
          }
        })
    })
    it('the featured text and its color are what they should be', () => {
      featured()
        .contains('awesome programmer')
        .should('have.css', 'color', royalblue)
    })
  })

  describe('Programmers tests', () => {
    it('can feature a programmer and display them in the correct color', () => {
      listOfAwesome.forEach(dev => {
        cy.contains(dev.name).children('button').click()
        featured()
          .should('contain.text', dev.name)
          .should('have.css', 'color', gold)
      })
    })
  })
})
