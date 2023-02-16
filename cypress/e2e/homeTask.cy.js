///<reference types="cypress"/>

import * as testData from '../fixtures/example.json' ///щоб використати дату з окремого файлу .json 

const pageUrl = 'https://sanitarskyi-ngx-admin.herokuapp.com';


describe('Test toast', () => {

  beforeEach('Open page with form', () => {
    cy.visit(`${pageUrl}`);

    cy.get(':nth-child(3) > nb-card-body > .theme-preview').click();

    cy.get ('[title="Modal & Overlays"]').click();

    cy.get('[title="Toastr"]').click();

    cy.get('.row div:contains("Position") button');
  })

  let firstDrop = '.row div:contains("Position") button';
  let secondDrop = '.row div:contains("Toast type:") button';
  let showToast = 'button.mat-ripple.status-basic';

  function selectTheDropdownAndValue (dropdownLocator, value) {
    cy.get(dropdownLocator).click();
    cy.get(`[ng-reflect-value="${value}"]`).click();
  }

  function fillTheField(attr, data) {
    cy.get(attr).clear().type(data);
  }

  const testData = [ 
    {
      position: 'top-right',
      title: 'title 1',
      content: 'primary text',
      time: '2000',
      type: 'primary'
    },
    {
      position: 'top-left',
      title: 'title 2',
      content: 'success text',
      time: '3000',
      type: 'success'
    },
    {
      position: 'bottom-left',
      title: 'title 3',
      content: 'info text',
      time: '4000',
      type: 'info'
    },
    {
      position: 'bottom-right',
      title: 'title 4',
      content: 'warning text',
      time: '5000',
      type: 'warning'
    },
  
  ];
  
  
  const expectedResult = [ 
  {
    icon: 'email',   
    title: testData[0].title, 
    content: testData[0].content, 
    color: 'rgb(233, 29, 99)',          
    position: true
  },
  {
    icon: 'checkmark',   
    title: testData[1].title, 
    content: testData[1].content, 
    color: 'rgb(96, 175, 32)',          
    position: true
  },
  {
    icon: 'question-mark',   
    title: testData[2].title, 
    content: testData[2].content, 
    color: 'rgb(4, 149, 238)',          
    position: true
  },
  {
    icon: 'alert-triangle',   
    title: testData[3].title, 
    content: testData[3].content, 
    color: 'rgb(255, 159, 5)',          
    position: true
  }
  
  ]
  
  for (let i=0; i<testData.length; i++) {
  it(`Check toast: position ${testData[i].position}, type ${testData[i].type}`, () => {
    //create new toast
    selectTheDropdownAndValue(firstDrop,testData[i].position);
    fillTheField ('[name="title"]',testData[i].title);
    fillTheField ('[name="content"]',testData[i].content);
    fillTheField ('[name="timeout"]',testData[i].time); 
    selectTheDropdownAndValue(secondDrop,testData[i].type);
    cy.get(`${showToast}`).click();
    
    //check toast params
   cy.get(`nb-toast.status-${testData[i].type}`).should('be.visible')
    .then(el => {
      //expect(el.parent()).to.have.css('');
      expect(el).to.have.class(`status-${testData[i].type}`);
      expect(el.find('.title.subtitle')).to.include.text(expectedResult[i].title);
      expect(el.find('.message')).to.include.text(expectedResult[i].content);
      expect (el).to.have.class('has-icon');
      expect (el).to.have.css('background-color').eq(expectedResult[i].color);
      expect (el.find('g').last()).to.have.attr('data-name').eq(expectedResult[i].icon);
    })
  })
  }
})




