describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });

  describe('Swiper Gallery Test', function () {
    it('Checks if next slide contains "United Kingdom" and previous slide contains "Italy', function () {
      cy.visit('http://localhost:3000');
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
      cy.get('.swiper-button-prev').click({ force: true });
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('contain', 'Italy');
    });
  });

  describe('Swiper Gallery Test', function () {
    it('Checks title and content for each slide', function () {
      cy.visit('http://localhost:3000');
      cy.get(".swiper-slide-active .card-description").find('h1').should('have.text',"Rome")
      cy.get(".swiper-slide-active .card-description").find('p').should('have.text',"Italy")
      cy.get('.swiper-button-next').click({ force: true });
      cy.wait(2000);
      cy.get(".swiper-slide-active .card-description").find('h1').should('have.text',"London")
      cy.get(".swiper-slide-active .card-description").find('p').should('have.text',"United Kingdom")
      cy.get('.swiper-button-next').click({ force: true });
      cy.wait(2000);
      cy.get(".swiper-slide-active .card-description").find('h1').should('have.text',"Paris")
      cy.get(".swiper-slide-active .card-description").find('p').should('have.text',"France")
    });
  });

});