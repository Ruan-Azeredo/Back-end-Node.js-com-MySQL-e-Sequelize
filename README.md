# Back-end Node.js com MySQL e Sequelize

## Começando com o Node.js:
Instalando Pacotes
```bash
# Para criar o package.json
npm init

# Para instalar o express
npm install express

# Para instalar o nodemon
npm install nodemon

# Para instalar o pacote do MySQL
npm install mysql2

# Para instalar o Sequelize
npm install sequelize
npm install -D sequelize-cli
```

Para ver os comando do Sequelize:
```bash
npx sequalize -h
```

Para criar as pastar `config`, `migrations`, `models` e `seeders`:
```bash
npx sequalize init
```

## Relação da aplicação com o MySQL

### Database -> Migrate

- O arquivo **config.json** que é criado dentro da pasta config é o arquivo que irá <br> encontrar e fazer a conexão em .json com o banco de dados
- É importante conferir a criação do DB
```JS
"database": "database_development",
```
- O arquivo `.sequelizerc` é resonsavel por definir os caminhos tanto para o banco <br> de dados quanto para onde devem ser geradas as **migrations** na aplicação
- A migrate é a tabela do banco, para cria-la utiliza-se o comando do terminal: 
```bash
migrate:create --name=
# Exemplo:
migrate:create --name=create-users
```
- A migrate gerada apresenta um rascunho da estrutura da migration com o **up** e <br> **down**, cada coluna do banco deve receber suas respectivas caracteristicas, como no exemplo:
```JS
async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
```

### Migrate -> Model

- Dentro da pasta **Models** deve-se criar o model(s) especifico(s) para a(s) <br> respectiva(s) migration(s), o model no ORM é o elemento qu faz a conexão da <br> aplicação com o Banco de dados, por esse mesmo motivo, depois de criado ele deve ser <br> referenciado no **config.json** para receber a referencia do banco
- Exemplo de model:
```JS
const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
```

## Controllers e Rotas

### Model -> Controller

- A paste de **Controllers** deve ser criada, para que o(s) controller(s) dentro dela <br> se comunique(m) com o(s) respectivos(s) Model(s), Deve existir uma função <br> que define a ação(como *store* por exemplo), e que receberá os parâmetros de <br> requisição e resposta
- Para fazer uma requisição que fará uma ação sobre o DB, deve-se seguir a estrutura <br> de chamada:
```JS
const {} = req.body;
// Exemplo:
const { name, email } = req.body;
```
