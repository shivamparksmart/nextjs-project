import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

export const getDataFromToken = (request)=>{

  try{

    const token = request.cookies.get("token")?.value || ''
   const decodedToken =  jwt.verify(token, process.env.TOKEN_SECRET)
    return decodedToken.email
  }
  catch(error){
    throw new Error(error.message)
  }



}