const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_name: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    created_by: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true, // created_by alanı zorunlu olacak. Yoksa bu şemaya bir şey kayıt edilemez.
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

class Roles extends mongoose.model {}

schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema);
