// // File: models/User.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const User1 = sequelize.define('User', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// module.exports = User1;

// // File: models/UserType.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const UserType1 = sequelize.define('UserType', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   isPaid: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: false
//   }
// });

// module.exports = UserType1;
// const UserType = require('./UserType');

// User.belongsTo(UserType, { foreignKey: 'userTypeId', as: 'userType' });
// const User = require('./User');

// UserType.hasMany(User, { foreignKey: 'userTypeId', as: 'users' });
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const UserType = require('../models/UserType');

// // Get all users
// router.get('/users', async (req, res) => {
//   try {
//     const users = await User.findAll({
//       include: [{ model: UserType1, as: 'userType' }]
//     });
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Get user by id
// router.get('/users/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findByPk(id, {
//       include: [{ model: UserType1, as: 'userType' }]
//     });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Create user
// router.post('/users', async (req, res) => {
//   const { name, email, password, userTypeId } = req.body;
//   try {
//     const userType = await UserType1.findByPk(userTypeId);
//     if (!userType) {
//       return res.status(404).json({ message: 'User type not found' });
//     }
//     const user = await User1.create({ name, email, password, userTypeId });
//     res.json(user);
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//     }
//     });
    
//     // Update user by id
//     router.put('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, email, password, userTypeId } = req.body;
//     try {
//     const user = await User1.findByPk(id);
//     if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//     }
//     const userType = await UserType1.findByPk(userTypeId);
//     if (!userType) {
//     return res.status(404).json({ message: 'User type not found' });
//     }
//     user.name = name;
//     user.email = email;
//     user.password = password;
//     user.userTypeId = userTypeId;
//     await user.save();
//     res.json(user);
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//     }
//     });
    
//     // Delete user by id
//     router.delete('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//     const user = await User1.findByPk(id);
//     if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//     }
//     await user.destroy();
//     res.json({ message: 'User deleted successfully' });
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//     }
//     });
    
//     // Get all user types
//     router.get('/user-types', async (req, res) => {
//     try {
//     const userTypes1 = await UserType1.findAll({
//     include: [{ model: User, as: 'users' }]
//     });
//     res.json(userTypes1);
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//     }
//     });
    
//     // Get user type by id
//     router.get('/user-types/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//     const userType1 = await UserType.findByPk(id, {
//     include: [{ model: User, as: 'users' }]
//     });
//     if (!userType) {
//     return res.status(404).json({ message: 'User type not found' });
//     }
//     res.json(userType);
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//     }
//     });
    
//     // Create user type
//     router.post('/user-types', async (req, res) => {
//     const { name, description, isPaid } = req.body;
//     try {
//     const userType = await UserType.create({ name, description, isPaid });
//     res.json(userType);
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//     }
//     });
    
//     // Update user type by id
//     router.put('/user-types/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, description, isPaid } = req.body;
//     try {
//     const userType = await UserType.findByPk(id);
//     if (!userType) {
//     return res.status(404).json({ message: 'User type not found' });
//     }
//     userType.name = name;
//     userType.description = description;
//     userType.isPaid = isPaid;
//     await userType.save();
//     res.json(userType);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//         }
//         });
        
//         // Delete user type by id
//         router.delete('/user-types/:id', async (req, res) => {
//         const { id } = req.params;
//         try {
//         const userType = await UserType.findByPk(id);
//         if (!userType) {
//         return res.status(404).json({ message: 'User type not found' });
//         }
//         await userType.destroy();
//         res.json({ message: 'User type deleted successfully' });
//         } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//         }
//         });
        
//         module.exports = router;