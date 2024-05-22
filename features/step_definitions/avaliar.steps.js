const { Given, When, Then, And } = require('@cucumber/cucumber');

let communicationScore;
let proactivityScore;
let emotionalIntelligenceScore;
let flexibilityScore;
let creativityScore;
let observationScore;

Given('eu estou logado e no dashboard', function () {
  return 'success';
});

When('eu navego para a seção {string}', function (section) {
  return 'success';
});

When('eu seleciono o colega {string} da lista', function (colleagueName) {
  return 'success';
});

When('eu avalio {string} como {int}', function (skill, score) {

  switch (skill) {
    case 'comunicação':
      communicationScore = score;
      break;
    case 'proatividade':
      proactivityScore = score;
      break;
    case 'inteligência emocional':
      emotionalIntelligenceScore = score;
      break;
    case 'flexibilidade':
      flexibilityScore = score;
      break;
    case 'criatividade':
      creativityScore = score;
      break;
    case 'observação':
      observationScore = score;
      break;
    default:
      throw new Error(`Habilidade '${skill}' não reconhecida.`);
  }
  return 'success';
});

When('eu envio a avaliação', function () {
  return 'success';
});


Then('o perfil de {string} deve refletir as novas notas de avaliação', function (colleagueName) {
  return 'success';
});

Then('a avaliação não deve ser enviada', function () {
  return 'success';
});

Then('o perfil de João Silva deve refletir as novas notas de avaliação', function () {
  return 'success';
});

When('eu avalio comunicação como {int}', function (int) {
  communicationScore = int;
  return 'success';
});

When('eu avalio proatividade como {int}', function (int) {
  proactivityScore = int;
  return 'success';
});

Then('o perfil de {string} deve refletir as novas notas de avaliação', function (colleagueName) {
  return 'success';
});

When('eu avalio inteligência emocional como {int}', function (int) {
  
  return 'success';
});

When('eu avalio flexibilidade como {int}', function (int) {
  
  return 'success';
});

When('eu avalio criatividade como {int}', function (int) {
  
  return 'success';
});

When('eu avalio observação como {int}', function (int) {
  
  return 'success';
});

When('eu submeto a avaliação', function () {
  return 'success';
});

Then('o perfil de {string} deve refletir as novas notas de avaliação', function (colleagueName) {
  return 'success';
});

Then('eu devo ver uma mensagem de confirmação {string}', function (confirmationMessage) {
  return 'success';
});

Then('o perfil de {string} deve refletir as novas notas de avaliação', function (colleagueName) {
  return 'success';
});

When('eu deixo as outras notas em branco', function () {
  return 'success';
});

When('eu tento enviar a avaliação', function () {
  return 'success';
});
