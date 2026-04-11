DROP VIEW registro;

CREATE VIEW registro AS
SELECT 
  a.id,
  a.nome,
  a.email,
  i.peso,
  i.altura,
  i.imc,
  CASE 
    WHEN i.imc < 18.5 THEN 'abaixo'
    WHEN i.imc < 25 THEN 'ideal'
    ELSE 'acima'
  END AS categoria
FROM aluno a
JOIN imc i ON i.aluno_id = a.id;