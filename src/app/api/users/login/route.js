import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();


connect()


export async function POST(request){
try{

 const reqBody = await request.json()
 const {email, password} = reqBody
 console.log(reqBody)

 //check if user exists
const user = await User.findOne({email})
console.log("user fount", user.email)
if(!user){
  return NextResponse.json({error:"user does not exists"}, {status:400})
}

//check if password is correct

const validPassword = await bcryptjs.compare(password, user.password)
if(!validPassword){
  return NextResponse.json({error:"Invalid Password"}, {status:400})
}

//create token data
const tokenData  ={
  id: user._id,
  username: user.username,
  email: user.email
}

//create toke

const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

const  response = NextResponse.json({message: "Login successful", success: true, })

response.cookies.set("token", token, {httpOnly: true})
return response;

}
catch(error) {
  console.log(error.message)
return NextResponse.json({error:error.message}, {status:500})
}


}