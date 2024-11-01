/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataType} DataTypes
 */
const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "users", 
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            pw: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            userid: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
        },
    );
};

module.exports = User;

