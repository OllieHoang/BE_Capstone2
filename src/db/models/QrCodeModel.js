// const { Sequelize, DataTypes } = require("sequelize");
// const { POSTGRESQL_DEVELOPMENT_HOST } = require("../configs/dbconfig");
// const { User } = require("./UserModel");
// const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);


// const QrCode = sequelize.define("qrcode", {
//     qrcodeId: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true,
//         allowNull: false,
//     },
//     userId: {
//       type: DataTypes.UUID,
//       references: {
//          model: User,
//          key: 'userId'
//      },
//     }
// })
// QrCode.belongsTo(User,{foreignKey: "userId"})
// const initQrCode = async () => {
//     return QrCode.sync({ alter: true })
// }
// module.exports = { QrCode, initQrCode };

