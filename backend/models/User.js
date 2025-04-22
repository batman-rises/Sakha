import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema=new mongoose.Schema({
    name:{
        type:'String',
        required:true,
        trim:true,
    },
    email:{
        type:'String',
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:'String',
        required:true,
    },
    isPrvtJournal:{
        type:'Boolean',
        default:false,
    },
    selectedCategory:{
        type:'String',
        enum:['Mental Health','Physical Health'],
        default:null
    },
    issues: [String]
},{
    timestamps:true
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
  
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
  

const User=mongoose.model('User',userSchema)
export default User;