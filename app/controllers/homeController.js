const pool = require('../../config/pool_conexao')

const exibirHome = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM registro WHERE id = ?',
      [req.session.aluno_id]
    )
    res.render('pages/home', { aluno: rows[0] })
  } catch (err) {
    console.error(err)
    res.status(500).send('Erro ao carregar home')
  }
}

module.exports = { exibirHome }