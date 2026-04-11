const pool = require('../../config/pool_conexao')

const exibirHome = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM registro WHERE id = ?',
      [req.session.aluno_id]
    )
    const aluno = rows[0]

    const categoria = aluno.imc < 18.5 ? 'abaixo'
                    : aluno.imc < 25    ? 'ideal'
                    : 'acima'

    const [treinos] = await pool.query(
      'SELECT * FROM treino WHERE categoria = ?',
      [categoria]
    )

    res.render('pages/home', { aluno, treinos })
  } catch (err) {
    console.error(err)
    res.status(500).send('Erro ao carregar home')
  }
}

module.exports = { exibirHome }