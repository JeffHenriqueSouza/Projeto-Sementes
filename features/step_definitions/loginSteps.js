const { Given, When, Then, And } = require('@cucumber/cucumber');

Given('eu estou na página de login', function () {
  return 'success';
});

When('eu insiro meu nome de usuário como {string}', function (username) {
  return 'success';
});

When('eu insiro minha senha como {string}', function (password) {
  return 'success';
});

When('eu clico no botão de login', function () {
  return 'success';
});

Then('eu devo ser redirecionado para o dashboard', function () {
  return 'success';
});

Then('eu devo ver uma mensagem de boas-vindas {string}', function (welcomeMessage) {
  return 'success';
});
  
  Then('eu devo permanecer na página de login', function () {
    return 'success';
  });

  Then('eu devo ver uma mensagem de erro {string}', function (errorMessage) {
    return 'success';
  });
  
