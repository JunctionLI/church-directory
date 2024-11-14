"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import MainPage from "./main/page";
import Image from "next/image";


export default function Home() {

  const {user,gitHubSignIn} = useUserAuth();

    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    console.dir(user);

  return (
    <main>    
      { user ? (
         
              <div >
                <MainPage />
              </div>

            ): (
                <div className="text-center">
                  <div>
                    <h1 className=" text-4xl font-bold my-8">Welcome to church directory! </h1>
                  </div>
                  <p className="p-5">Please log in here to explore more information.</p>
                  <button  type="button" onClick={handleSignIn} className="bg-[#020617] text-white p-3"><Link href="/login">Log in</Link></button> 
                </div>
            ) }
    </main>
  );
}
