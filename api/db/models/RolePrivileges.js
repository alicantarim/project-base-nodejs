const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true, // created_by alanı zorunlu olacak. Yoksa bu şemaya bir şey kayıt edilemez.
    },
    permission: { type: String, required: true },
    created_by: {
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

class RolePrivileges extends mongoose.model {}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privileges", schema);
