"use client";

import { useUserAuth } from "@/app/_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetBlogPost } from " ../_services/blog-service";


export default function BlogPostPage({params}){


    const {user} = useUserAuth();

    const[blogPost, setBlogPost]= useState({});

    useEffect( () => {

        if(user){
            dbGetBlogPost(user.uid,params.postid, setBlogPost);
        }

    },[user]);


    return(
        <main>
            <header>
                <h1>
                    {blogPost.title}
                </h1>
            </header>
            <article>
                <p>{blogPost.contents}</p>
            </article>
        </main>
    );
}