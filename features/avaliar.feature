Feature: Avaliar um colega
  Como funcionário
  Quero avaliar meus colegas
  Para que eu possa fornecer feedback sobre seu desempenho

  Scenario: Avaliar um colega com sucesso
    Given eu estou logado e no dashboard
    When eu navego para a seção "Avaliar Colega"
    And eu seleciono o colega "João Silva" da lista
    And eu avalio comunicação como 4
    And eu avalio proatividade como 5
    And eu avalio inteligência emocional como 3
    And eu avalio flexibilidade como 4
    And eu avalio criatividade como 5
    And eu avalio observação como 4
    And eu envio a avaliação
    Then eu devo ver uma mensagem de confirmação "Avaliação enviada com sucesso!"
    And o perfil de João Silva deve refletir as novas notas de avaliação

  Scenario: Tentar avaliar sem fornecer todas as notas
    Given eu estou logado e no dashboard
    When eu navego para a seção "Avaliar Colega"
    And eu seleciono o colega "Maria Souza" da lista
    And eu avalio comunicação como 5
    And eu deixo as outras notas em branco
    And eu tento enviar a avaliação
    Then eu devo ver uma mensagem de erro "Por favor, forneça notas para todas as categorias"
    And a avaliação não deve ser enviada
