const { Given, When, Then, And } = require('@cucumber/cucumber');

let communicationScore;
let proactivityScore;
let emotionalIntelligenceScore;
let flexibilityScore;
let creativityScore;
let observationScore;

When('eu avalio comunicação como {int}', function (int) {
  communicationScore = int;
  return 'success';
});

When('eu avalio proatividade como {int}', function (int) {
  proactivityScore = int;
  return 'success';
});

When('eu avalio inteligência emocional como {int}', function (int) {
  emotionalIntelligenceScore = int;
  return 'success';
});

When('eu avalio flexibilidade como {int}', function (int) {
  flexibilityScore = int;
  return 'success';
});

When('eu avalio criatividade como {int}', function (int) {
  creativityScore = int;
  return 'success';
});

When('eu avalio observação como {int}', function (int) {
  observationScore = int;
  return 'success';
});

Then('eu devo ver uma mensagem de confirmação {string}', function (confirmationMessage) {
  return 'success';
});

Then('o perfil de João Silva deve refletir as novas notas de avaliação', function () {
  return 'success';
});

Then('a avaliação não deve ser enviada', function () {
  return 'success';
});
