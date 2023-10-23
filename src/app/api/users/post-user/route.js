import connectToDB from "@/database";
import User from "@/models/Users";
import { NextResponse } from "next/server";


const schema = Joi.object({
     name: Joi.string().required(),
     email: Joi.string().email().required(),
     password: Joi.string().min(6).required(),
     role: Joi.string().required(),
     category: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
   await connectToDB();
     const { name, email, password, role } = await req.json();
     //validate the schema
     const { error } = schema.validate({ name, email, password, role,category });

     if (error) {
          console.log(error);
          return NextResponse.json({
               success: false,
               message: error.details[0].message,
          });
     }
  
     try {
          //check if the user is exists or not
          const isUserAlreadyExists = await User.findOne({ email });
          console.log(isUserAlreadyExists);
          if (isUserAlreadyExists) {
               return NextResponse.json({
                    success: false,
                    message: "User is already exists. Please try with different email.",
               });
          } else {
          
               const newlyCreatedUser = await User.create({
                    name,
                    email,
                    password,
                    role,
                    category
               });

               if (newlyCreatedUser) {
                    return NextResponse.json({
                         success: true,
                         message: "Account created successfully.",
                    });
               }
          }
     } catch (error) {
          console.log("Error while new user registration. Please try again");

          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
