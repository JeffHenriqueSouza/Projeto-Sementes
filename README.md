================================================
DIAGRAMA DE TABELAS
================================================
Table usuarios {
  id integer [primary key]
  nome varchar
  email varchar
  password varchar 
  cargo varchar
}

Table avaliacoes {
  id integer [primary key]
  usuarioAvaliadoId integer
  comunicacao integer
  proatividade integer
  inteligenciaEmocional integer
  flexibilidade integer
  criatividade integer
  observacao integer
  comentario integer
}

Table feedback {
  id integer [primary key]
  userId varchar
  message varchar
  avaliacoesId integer
}
Ref: usuarios.id < avaliacoes.usuarioAvaliadoId
Ref: usuarios.id < feedback.userId
Ref: avaliacoes.id < feedback.avaliacoesId

================================================
