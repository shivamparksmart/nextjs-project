import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { getDataFromToken } from "@/helpers/getDataFromToken";
dotenv.config();

connect()

export async function GET(request){
  try{
    console.log('herk')
   const email= await getDataFromToken(request)
   console.log(email)
   const user = await User.findOne({email})
   console.log("user fount", user.email)
    return NextResponse.json({message:"User found", data: user}, {status:201})

  }
  catch(error){
    return NextResponse.json({error:error.message}, {status:500})
  }
}