const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true, // created_by alanı zorunlu olacak. Yoksa bu şemaya bir şey kayıt edilemez
    },
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false, // Mongoose da bir kayıt yaptığımızda versionKey alanı kendiliğinden oluşur. Bu alanı oluşturmaması için false yaptık.
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class UserRoles extends mongoose.model {}

schema.loadClass(UserRoles);
module.exports = mongoose.model("user_roles", schema);
