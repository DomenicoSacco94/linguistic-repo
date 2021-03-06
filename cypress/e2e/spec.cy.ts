const host = 'http://localhost:3000/linguistic-repo';

describe('Links are rendering', () => {
  it('passes', () => {
    cy.visit(host);
    cy.contains('Import TXT');
    cy.contains('Input');
    cy.contains('Read');
  });
});

describe('Input is working', () => {
  it('passes', () => {
    interceptTranslationRequest('sentence', 'sentence:EN', 'wordTranslation');
    cy.visit(host);
    cy.get('textarea').type('German sentence 1. German sentence 2');
    cy.get('.navLink').contains('Read').click();
    cy.get('div').contains('German sentence 1');
    cy.get('div').contains('German sentence 2');

    cy.get('div').get('button').contains('sentence').should('not.be.disabled');
    cy.get('div').get('button').contains('sentence').click();
    cy.wait('@wordTranslation');
    cy.get('div')
      .get('button')
      .contains('sentence:EN')
      .should('not.be.disabled');
    cy.get('div').get('button').contains('sentence:EN').click();
    cy.get('div').get('button').contains('sentence').should('not.be.disabled');
    interceptTranslationRequest(
      'German sentence 1',
      'English sentence 1',
      'sentenceTranslation'
    );
    cy.get('div').get('.paragraphButton').eq(0).click();
    cy.wait('@sentenceTranslation');
    cy.get('div').contains('English').click();
    cy.get('div').contains('English');
    cy.get('div').contains('sentence');
  });
});

describe('File upload is working', () => {
  it('passes', () => {
    interceptTranslationRequest(
      'Die Deutsche Demokratische Republik',
      'Translation of the sentence',
      'sentenceTranslation'
    );
    cy.visit(host);
    cy.get('.navLink').contains('Import TXT').click();
    attachTestFile('test.txt');
    cy.get('.navLink').contains('Read').click();
    cy.get('div').contains('Die Deutsche Demokratische Republik');
    cy.get('div').get('.paragraphButton').eq(0).click();
    cy.wait('@sentenceTranslation');
    cy.get('div').contains('Translation of the sentence');
  });
});

describe('Pagination is working', () => {
  it('passes', () => {
    cy.visit(host);
    cy.get('.navLink').contains('Import TXT').click();
    attachTestFile('longer-test.txt');
    cy.get('.navLink').contains('Read').click();
    cy.get('.paginatorButton').contains('1').click();
    cy.get('div').contains('Some final strings');
  });
});

describe('Uploading a file after the input works correctly', () => {
  it('passes', () => {
    interceptTranslationRequest(
      'Die Deutsche Demokratische Republik',
      'Translation of the sentence',
      'sentenceTranslation'
    );
    cy.visit(host);
    cy.get('textarea').type('German sentence 1. German sentence 2');
    cy.get('.navLink').contains('Read').click();
    cy.get('div').contains('German sentence 1');
    cy.get('div').contains('German sentence 2');

    cy.get('.navLink').contains('Import TXT').click();
    attachTestFile('test.txt');

    cy.get('.navLink').contains('Input').click();
    cy.get('div').contains('German sentence 1').should('not.exist');

    cy.get('.navLink').contains('Read').click();
    cy.get('div').contains('Die Deutsche Demokratische Republik');
  });
});

describe('Input text after uploading a file works correctly', () => {
  it('passes', () => {
    interceptTranslationRequest(
      'Die Deutsche Demokratische Republik',
      'Translation of the sentence',
      'sentenceTranslation'
    );
    cy.visit(host);

    cy.get('.navLink').contains('Import TXT').click();
    attachTestFile('test.txt');
    cy.get('.navLink').contains('Read').click();
    cy.get('div').contains('Die Deutsche Demokratische Republik');

    cy.get('.navLink').contains('Input').click();
    cy.get('textarea').type('German sentence 1. German sentence 2');
    cy.get('.navLink').contains('Read').click();
    cy.get('div').contains('German sentence 1');
    cy.get('div').contains('German sentence 2');
  });
});

const interceptTranslationRequest = (
  toTranslate: string,
  translated: string,
  description: string
) => {
  cy.intercept('https://translate.googleapis.com/**', {
    statusCode: 201,
    body: [[[translated, toTranslate, null, null, 1]]],
  }).as(description);
};

const attachTestFile = (fileName: string) => {
  cy.fixture(fileName).then((fileContent) => {
    cy.get('input[type="file"]').attachFile({
      fileContent: fileContent.toString(),
      fileName: fileName,
      mimeType: 'txt',
    });
  });
};
