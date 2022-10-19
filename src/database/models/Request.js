module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define(
    'Request',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        foreygnKey: true,
        allowNull: false,
        field: 'user_id'
      },
      productId: {
        type: DataTypes.INTEGER,
        foreygnKey: true,
        allowNull: false,
        field: 'product_id'
      },
      departmentId: {
        type: DataTypes.INTEGER,
        foreygnKey: true,
        allowNull: false,
        field: 'department_id'
      },
      partnerId: {
        type: DataTypes.INTEGER,
        foreygnKey: true,
        allowNull: false,
        field: 'partner_id'
      },
      cretateAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updateAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'update_id'
      },
    },
    {
      tableName: 'requests',
      timestamps: true,
      createdAt: 'createdAt',
      updateAt: 'updateAt'
    },
  );

  return Request;
};
