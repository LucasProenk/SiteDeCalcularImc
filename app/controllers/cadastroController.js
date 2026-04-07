const pool = require('../../config/pool_conexao') // ✅

const exibirCadastro = (req, res) => {
  res.render('pages/cadastro')
}

const realizarCadastro = async (req, res) => {
  const { nome, email, senha } = req.body
  try {
    const [result] = await pool.query(
      'INSERT INTO aluno (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    )
    req.session.aluno_id = result.insertId
    req.session.nome = nome
    res.redirect('/imc')
  } catch (err) {
    console.error(err)
    res.status(500).send('Erro ao cadastrar')
  }
}

module.exports = { exibirCadastro, realizarCadastro }