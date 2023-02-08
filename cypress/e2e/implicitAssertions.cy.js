///<reference types="cypress"/>

it('Implicit assertions', () => {
  cy.visit('http://localhost:8080/commands/assertions');

  cy.get('.table.table-bordered.assertion-table tr')
  .eq(3).then( element => {
    expect(element).to.have.class('success')
    expect(element).to.have.attr('class')
    expect(element.attr('class')).to.eq('success');
    expect(element.attr('class')).to.eql('success'); // deeply equal
    expect(element.attr('class')).to.eqls('success'); // deeply equal
    expect(element.attr('class')).to.equal('success');
    expect(element.attr('class')).to.equals('success');
  })

  // const obj = {
  //   key: 'Dima',
  //   keyObj: {
  //     key2: '1'
  //   }
  // }

  // const obj2 = {
  //   key: 'Dima',
  //   keyObj: {
  //     key2: '1'
  //   }
  // }

  // //expect(obj).to.eq(obj2);
  // expect(obj).to.eql(obj2); // deeply equal
  // expect(obj).to.eqls(obj2); // deeply equal
  // //expect(obj).to.equal(obj2);
  // //expect(obj).to.equals(obj2);

  // const obj3 = obj;

  //   expect(obj).to.eq(obj3);
  //   expect(obj).to.eql(obj3); // deeply equal
  //   expect(obj).to.eqls(obj3); // deeply equal
  //   expect(obj).to.equal(obj3);
  //   expect(obj).to.equals(obj3);

  cy.get('.table.table-bordered.assertion-table tr td')
  .eq(3)
  .then( element => {
    expect(element).to.have.text('Column content');
    expect(element).to.have.html('Column content');
    expect(element).to.contain('Column content');

    // expect(element).to.contains('Column content');
    // expect(element).to.include('Column content');

    expect(element.text()).to.contains('Column content');
    expect(element.text()).to.include('Column content');
    expect(element.text()).to.include('content');
    
    expect(element.text()).not.to.include('qweqwe');
  })

  cy.visit('http://localhost:8080/commands/querying');
  cy.get('#inputName')
  .type('Hello')
  .then( el => {
    expect(el.val()).to.be.eq('Hello');
  })

  cy.visit('http://localhost:8080/commands/traversal');

  cy.get('.traversal-disabled .btn.btn-default')
  .eq(0)
  .then( el => {
    expect(el).to.be.disabled;
  })

  cy.get('.traversal-disabled button:not([data-cypress-el="true"])')
  .eq(0)
  .then( el => {
    expect(el).to.be.disabled;
  })

})