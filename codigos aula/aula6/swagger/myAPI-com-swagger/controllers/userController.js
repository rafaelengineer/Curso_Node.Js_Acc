const User = require("../models/userModel");

// Funções de controle para o modelo de usuário

// Create (POST)
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar o usuário" });
  }
};

// Read (GET)
const getUsers = async (req, res) => {
  // Implementar aqui
  res.status(200).json({ mensagem: "Não implementado!" })
};

// Update (PUT)
const updateUser = async (req, res) => {
  // Implementar aqui
  res.status(200).json({ mensagem: "Não implementado!" })
};

// Delete (DELETE)
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId); // find by primary key, busca um usuario pela chave primária
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    await user.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir o usuário" });
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
