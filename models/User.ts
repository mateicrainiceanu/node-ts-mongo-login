import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    hash: { type: String, required: true },
    // lastLocationLat: { type: Number, required: true},
    // lastLocationLon: { type: Number, required: true},
    // lastOnline: { type: Number, required: true }
});

const User = mongoose.model("User", userSchema);

export {userSchema};
export default User;