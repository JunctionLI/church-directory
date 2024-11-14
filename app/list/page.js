"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dbGetAllPosts } from "../_service/blog-service";
import { useUserAuth } from "@/app/_utils/auth-context";
import Navigation from "../main/menu";
import Footer from "../main/footer";

export default function BlogList() {
    const { user } = useUserAuth();
    const [blogPostList, setBlogPostList] = useState([]);

    useEffect(() => {
        if (user) {
            dbGetAllPosts(user.uid, setBlogPostList);
        }
    }, [user]);

    return (
        <main className="min-h-screen bg-gray-100">
            <header>
                <Navigation />
            </header>
            <div className="mt-3 mx-auto max-w-3xl p-4">
                <section>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">Your Previous Prayers</h2>
                    <ul className="space-y-4">
                        {blogPostList.map((post) => {
                            let postUrl = `./${post.id}`;
                            return (
                                <li key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-grow">
                                            <Link href={postUrl} className="text-lg font-semibold text-blue-600 hover:underline">
                                                {post.title}
                                            </Link>
                                            <p className="text-gray-600 mt-2">{post.contents}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
            <Footer />
        </main>
    );
}
