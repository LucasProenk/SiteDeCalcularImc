CREATE TABLE treino (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoria ENUM('ideal', 'acima', 'abaixo') NOT NULL,
  nome ENUM('A', 'B', 'C') NOT NULL,
  musculo VARCHAR(100),
  descricao TEXT
);