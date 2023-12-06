import React, { useState } from "react";
import { Header } from "./Header";

const Login = () =>{
    const [isSignInform,setIsSignInForm]=useState(true);

    const togggleSignInform = () =>{
        setIsSignInForm(!isSignInform)
    }

    return(
        <div>
        <Header />
           <img alt="logo"  className="absolute"
           src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
           <div>
            <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold py-4">{isSignInform? "sign In":"Sign Up"}</h1>

                {!isSignInform &&(
                    <input className="p-4 my-4 w-full bg-gray-700"
                 type="text"
                  placeholder="Full Name"/>
                )}
                <input className="p-4 my-4 w-full bg-gray-700"
                 type="text"
                  placeholder="email"></input>
                <input className="p-4 my-4 w-full bg-gray-700"
                type="password"
                 placeholder="password"></input>
                <button className="p-4 my-6 bg-red-700 rounded-lg w-full">{isSignInform?"Sign In":"Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={togggleSignInform}>
                    {
                        isSignInform ? "New to Netflix? sign Up Now": "Alredy registerd? Sogn In Now"
                    }
                </p>
            </form>
           </div>
        </div>
    )
}

export default Login;