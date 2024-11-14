
"use client"
import { useState } from "react";
import Navigation from "../main/menu";
import Footer from "../main/footer";
import { useUserAuth } from "../_utils/auth-context";
import { dbAddBlogPost } from "../_service/blog-service";
import Link from "next/link";



export default function AddBlogPostPage(){

    const {user} = useUserAuth ();
    const [title,setTitle] = useState("");
    const[contents,setContents] = useState("");
    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleContentsChange = (event) => setContents(event.target.value);
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        let newBlogPost = {
            title:title,
            contents:contents,
        }
        await dbAddBlogPost(user.uid,newBlogPost);  //user.uid is given from useUserAuth - firebase
        setTitle("");
        setContents("");

        alert("Your prayer has been submitted successfully!");
    }

    return(
<main className="min-h-screen bg-gray-100">
    <Navigation />
    <div className="mt-8 mx-auto max-w-lg p-6 bg-white shadow-lg rounded-lg mb-10">
        <header className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">Pray for Today!</h1>
        </header>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Title:</label>
                <input
                    type="text"
                    onChange={handleTitleChange}
                    value={title}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter a title for your prayer"
                />
            </div>
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Contents:</label>
                <textarea
                    onChange={handleContentsChange}
                    value={contents}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    required
                    placeholder="Write your prayer here..."
                ></textarea>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add Prayer
                </button>
            </div>
        </form>
        <div className="text-center underline mt-5">
            <Link href="./list"> View all prayer </Link>
        </div>
        
    </div>
    <Footer />
</main>



    );
}