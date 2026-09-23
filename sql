CREATE TABLE IF NOT EXISTS aluno(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cdm TEXT NOT NULL UNIQUE,
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL UNIQUE,
  login TEXT NOT NULL,
  cidade TEXT NOT NULL,
  telefone TEXT NOT NULL,
  cep TEXT NOT NULL
);

INSERT into aluno (cdm,nome,cpf,login,cidade,telefone,cep)
VALUES ('12', 'henrique da motinha', '11', '9825879827', 'foz','4588888888','0008674881987');
SELECT * FROM aluno;

CREATE TABLE IF NOT EXISTS modalidade(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  esporte TEXT NOT NULL,
  turno TEXT NOT NULL,
  turma TEXT NOT NULL,
  agenda TEXT NOT NULL UNIQUE
);

INSERT into modalidade(esporte,turno,turma,agenda)
VALUES('basquete', 'noite', '2A', 'quartafeira');
    SELECT * FROM modalidade;

CREATE TABLE IF NOT EXISTS treinador(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cdedf TEXT NOT NULL UNIQUE,
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL UNIQUE,
  login TEXT NOT NULL,
  cidade TEXT NOT NULL,
  telefone TEXT NOT NULL,
  cep TEXT NOT NULL
);

INSERT into treinador (cdedf,nome,cpf,login,cidade,telefone,cep)
VALUES ('30', 'jair', '8846286488327', '38774', 'foz','247847878','74937593709');
SELECT * FROM treinador;


CREATE TABLE IF NOT EXISTS prontuario(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  avm TEXT NOT NULL,
  am TEXT NOT NULL
);
INSERT into prontuario ( avm, am)
VALUES ( 'em dia', 'aprovada');
SELECT * FROM prontuario;

CREATE TABLE IF NOT EXISTS alunomodalidade(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  aluno_id INTEGER NOT NULL,
  modalidade_id integer not null ,
  modalidade_turno integer not null,
  modalidade_esporte integer not null,
  FOREIGN KEY(aluno_id) REFERENCES aluno(id),
  FOREIGN KEY(modalidade_id) REFERENCES modalidade(id),
  FOREIGN KEY(modalidade_turno) REFERENCES modalidade(turno),
   FOREIGN KEY(modalidade_esporte) REFERENCES modalidade(esporte)
);

	INSERT INTO alunomodalidade(aluno_id, modalidade_id, modalidade_turno, modalidade_esporte)
    	VALUES ('1','1','noite','basquete');
       SELECT * from alunomodalidade;
