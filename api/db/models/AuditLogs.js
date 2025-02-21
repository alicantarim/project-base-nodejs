const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String,
  },
  {
    versionKey: false, // Mongoose da bir kayıt yaptığımızda versionKey alanı kendiliğinden oluşur. Bu alanı oluşturmaması için false yaptık.
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class AuditLogs extends mongoose.model {}

schema.loadClass(AuditLogs);
module.exports = mongoose.model("audit_logs", schema);
