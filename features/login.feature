Feature: Login no Projeto-Sementes
  Como funcionário
  Quero fazer login na aplicação Projeto-Sementes
  Para que eu possa acessar meu dashboard e avaliar meus colegas

  Scenario: Login bem-sucedido com credenciais válidas
    Given eu estou na página de login
    When eu insiro meu nome de usuário como "usuarioValido"
    And eu insiro minha senha como "senhaValida"
    And eu clico no botão de login
    Then eu devo ser redirecionado para o dashboard
    And eu devo ver uma mensagem de boas-vindas "Bem-vindo, usuarioValido!"

  Scenario: Falha no login com credenciais inválidas
    Given eu estou na página de login
    When eu insiro meu nome de usuário como "usuarioInvalido"
    And eu insiro minha senha como "senhaInvalida"
    And eu clico no botão de login
    Then eu devo ver uma mensagem de erro "Nome de usuário ou senha inválidos"
    And eu devo permanecer na página de login
