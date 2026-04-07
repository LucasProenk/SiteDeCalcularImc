const pool = require('../../config/pool_conexao')

const exibirImc = (req, res) => {
  res.render('pages/imc')
}

const realizarImc = async (req, res) => {
  const { peso } = req.body
  const alturaM = (parseFloat(req.body.altura) / 100).toFixed(2)

  try {
    await pool.query(
      'INSERT INTO imc (aluno_id, peso, altura) VALUES (?, ?, ?)',
      [req.session.aluno_id, peso, alturaM]
    )

    // Busca o IMC calculado pelo trigger no banco
    const [rows] = await pool.query(
      'SELECT imc FROM imc WHERE aluno_id = ? ORDER BY id DESC LIMIT 1',
      [req.session.aluno_id]
    )

    res.render('pages/imc', { imcBanco: rows[0].imc })
  } catch (err) {
    console.error(err)
    res.status(500).send('Erro ao salvar IMC')
  }
}

module.exports = { exibirImc, realizarImc }