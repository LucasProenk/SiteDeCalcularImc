CREATE TABLE imc (
  id INT AUTO_INCREMENT PRIMARY KEY,
  aluno_id INT,
  peso DECIMAL(5,2),
  altura DECIMAL(4,2),
  imc DECIMAL(5,2),
  FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);