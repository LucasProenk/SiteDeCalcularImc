const pool = require('../../config/pool_conexao')

const exibirLogin = (req, res) => {
  res.render('pages/login')
}

const realizarLogin = async (req, res) => {
  const { email, senha } = req.body
  try {
    const [rows] = await pool.query(
      'SELECT * FROM aluno WHERE email = ? AND senha = ?',
      [email, senha]
    )

    if (rows.length === 0) {
      return res.render('pages/login', { erro: 'Email ou senha incorretos!' })
    }

    req.session.aluno_id = rows[0].id
    req.session.nome = rows[0].nome
    res.redirect('/home')
  } catch (err) {
    console.error(err)
    res.status(500).send('Erro ao fazer login')
  }
}

module.exports = { exibirLogin, realizarLogin }