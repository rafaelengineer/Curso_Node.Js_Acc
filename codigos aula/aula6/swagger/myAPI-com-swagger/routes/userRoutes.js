const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => { 
    res.status(200).json({ message: "API teste Sequelize" }) 
});

// Rotas para o CRUD de usuários
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
