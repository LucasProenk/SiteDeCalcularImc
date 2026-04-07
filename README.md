# 💪 IMC Pro

Aplicação web para calcular e registrar o IMC (Índice de Massa Corporal) de usuários, com sistema de cadastro, login e histórico salvo no banco de dados.

## 🚀 Tecnologias

- **Node.js** — backend
- **Express** — servidor e rotas
- **EJS** — templates HTML dinâmicos
- **MySQL** — banco de dados
- **mysql2** — conexão com o banco
- **express-session** — gerenciamento de sessão
- **dotenv** — variáveis de ambiente

## ✨ Funcionalidades

- Cadastro e login de usuários
- Cálculo de IMC em tempo real no navegador
- IMC salvo automaticamente no banco via **trigger MySQL**
- Classificação visual (abaixo do peso, peso ideal, acima do peso)
- Aceita altura em **cm** (170) ou **metros** (1.70)
- Tela home com nome do usuário e IMC salvo
- View SQL (`registro`) com dados completos do aluno

## 🗄️ Banco de Dados

- Tabela `aluno` — armazena nome, email e senha
- Tabela `imc` — armazena peso, altura e IMC
- **Trigger** `calcular_imc` — calcula o IMC automaticamente no INSERT
- **View** `registro` — join entre aluno e imc

## ⚙️ Como rodar

**1. Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/calculadorimc.git
cd calculadorimc
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Crie o arquivo `.env` na raiz:**
```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=calculadorimc
```

**4. Crie o banco de dados e rode os SQLs na ordem:**
```
database/schema/aluno.sql
database/schema/imc.sql
database/schema/registro.sql
database/trigger/calcularimc.sql
```

**5. Rode o servidor:**
```bash
node app
```

**6. Acesse no navegador:**
```
http://localhost:4000
```
