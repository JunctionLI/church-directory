import Link from "next/link";
import DirectoryList from "./directory-list";
import Navigation from "../main/menu";

export default function DirectoryDisplay(){
    return(
        <main className="text-center ">
            <Navigation/>
            <h1 className=" text-4xl font-bold my-8">Directory List</h1>
            <DirectoryList/>
            <Link href="./" className="italic hover:underline hover:text-green-400">Back to Main</Link>
        </main>
    );
}