import User from '../models/User.js'

export const selectCategory = async(req,res) => {
    try{
        const {category}=req.body;
        const user=await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({message :'user not found'})
        }

        user.selectedCategory=category;
        await user.save();

        res.status(200).json({message:'Category saved',category})
    }catch(err){
        res.status(500).json({message:'Server error',error:err.message})
    }
};

//export default {selectCategory}
