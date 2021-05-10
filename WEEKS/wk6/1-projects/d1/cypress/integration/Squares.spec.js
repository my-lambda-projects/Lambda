describe('Squares', () => {
  const sqA = () => cy.get('[id=sqA]')
  const sqB = () => cy.get('[id=sqB]')
  const sqC = () => cy.get('[id=sqC]')
  const sqD = () => cy.get('[id=sqD]')

  const squares = [sqA, sqB, sqC, sqD]

  beforeEach(() => {
    cy.visit('/')
  })

  describe('Initial state. These tests should already be passing', () => {
    it('contains the squares', () => {
      sqA().should('exist')
      sqB().should('exist')
      sqC().should('exist')
      sqD().should('exist')
    })
    it('the styles and classnames on squares are what they should be', () => {
      squares.forEach(sq => {
        sq()
          .should('have.css', 'border', '2px dashed rgb(0, 0, 0)')
          .should('not.have.css', 'background-color', 'rgb(144, 238, 144)')
          .should('have.class', 'square')
          .should('not.have.class', 'active')
      })
    })
  })

  describe('Squares tests', () => {
    function check(idx) {
      squares[idx]().click() // activating a square
      squares[idx]()
        .should('have.css', 'border', '3px solid rgb(0, 0, 0)')
        .should('have.css', 'background-color', 'rgb(144, 238, 144)')
        .should('have.class', 'active')
        .should('have.class', 'square')
      squares.filter((sq, i) => i !== idx)
        .forEach(sq => {
          sq()
            .should('have.css', 'border', '2px dashed rgb(0, 0, 0)')
            .should('not.have.css', 'background-color', 'rgb(144, 238, 144)')
            .should('not.have.class', 'active')
            .should('have.class', 'square')
        })
      squares[idx]().click() // deactivating a square
      squares.forEach(sq => {
        sq()
          .should('have.css', 'border', '2px dashed rgb(0, 0, 0)')
          .should('not.have.css', 'background-color', 'rgb(144, 238, 144)')
          .should('have.class', 'square')
          .should('not.have.class', 'active')
      })
    }
    it('can activate and deactivate each square', () => {
      squares.forEach((_, i) => check(i))
    })
  })
})
