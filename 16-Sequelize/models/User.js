/**
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(20),
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