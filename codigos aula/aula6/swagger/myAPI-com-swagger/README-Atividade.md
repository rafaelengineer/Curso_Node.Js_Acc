# Atividade: Instalação do Swagger no Node.js

## 1. Instalação de Dependências

Instalar a biblioteca swagger-jsdoc e swagger-ui-express para criar a documentação do Swagger e fornecer um UI interativo para visualizá-la:

```bash
npm install swagger-jsdoc@5.0.1 --save-exact
npm install swagger-ui-express --save
```

## 2. Configuração do Swagger

Crie um arquivo chamado **swagger.js** na raiz do projeto para configurar o Swagger.

```javascript
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API do Sequelize', // Título da sua API
      version: '1.0.0', // Versão da sua API
      description: 'Documentação da API do Sequelize', // Descrição da sua API
    },
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos de rota que você deseja documentar
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
```

## 3. Atualize o arquivo app.js

No arquivo principal **app.js**, adicione o Swagger UI para servir a interface interativa do Swagger.

A documentação do Swagger estará disponível em http://localhost:3000/api-docs.

Isso permite que você visualize e interaja com a documentação interativa da sua API.

```javascript
const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require("./routes/userRoutes");
const sequelize = require('./models/userModel.js');
const swaggerSpec = require('./swagger');

const app = express();
const port = 3000;
app.use(express.json());
app.use("/", userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync().then(() => {
  console.log("Modelo sincronizado com o banco de dados");
}).catch((err) => {
  console.error("Erro na sincronização com o banco de dados:", err);
});

app.listen(port, () => {
  console.log(`\nServer is running on port http://localhost:${port}\n`);
  console.log(`Swagger at http://localhost:${port}/api-docs\n`);
});
```

## 4. Atualize o arquivo userRoutes.js

No arquivo **userRoutes.js**, adicione a rota Swagger para servir a documentação:

```javascript
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => { 
    res.status(200).json({ message: "API teste Sequelize" }) 
});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 *         age:
 *           type: integer
 *         email:
 *           type: string
 *         updatedAt:
 *           type: string
 *         createdAt:
 *           type: string
 *     UserDTO:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 *         age:
 *           type: integer
 *         email:
 *           type: string
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria usuário
 *     description: Cria novo usuário no banco
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDTO'
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro ao buscar os usuários
 *  
 */
router.post("/users", userController.createUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro ao buscar os usuários
 * 
 */
router.get("/users", userController.getUsers);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza usuário pelo id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id do usuário
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDTO'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao atualizar o usuário
 * 
 */
router.put("/users/:id", userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Atualiza usuário pelo id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id do usuário
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Sem conteúdo. Exclusão efetuada com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao excluir o usuário
 * 
 */
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
```
