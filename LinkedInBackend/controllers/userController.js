import bcrypt from 'bcryptjs';
import connection from './../db.js';

const signup = async (req,res)=>
{

    const {email,password} = req.body

    if(!email || !password){

        return res.status(400).json(
            {
                error:"All feilds are required"
            })
    }

    try {

      const [currentuser] = await connection `select * from users where email = ${email}`


       if(!currentuser){
        return res.status(404).json({error:"user not found"})
       }
        
       if (currentuser.password !== password ){
        
       }
       
      

        
        
    } catch (error) {
        
    }


}

export default signup