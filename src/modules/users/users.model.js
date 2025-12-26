// a data model is created from data schema(แผงผังหรือเป็นโครงของ data ของเราว่าเก็ฐอะไรบ้าง)
 import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {type: String, require: true, trim: true},
        role: {type: String, enum: ["user", "admin"], default: "user"},
        email: {type: String, require: true, unique: true, lowercase: true},
        password: {type: String, require: true, minlength: 6, select: false},
    },
    {
        timestamps: true,
    }
);

// mongodb will automatically create "users" collection (มันเติม s ให้เอง wow!)
// ตัวแปรที่เก็บ schema(แม่แบบ) จะใช้เป็น uppercase
// mongoose.model() จะนำแม่แบบนำมาใช้จริง
export const User = mongoose.model("User", userSchema);