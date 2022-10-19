module.exports = (sequelize, DataTypes) => {
  const Partner = sequelize.define(
    'Partner',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'number_id'
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'zip_code'
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      neighborhood: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complement: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
      },
    },
    {
      tableName: 'partners',
      timestamps: true,
      createdAt: 'createdAt',
      updateAt: 'updatedAt'
    },
  );

  return Partner;
};
