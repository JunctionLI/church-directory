"use client"
import React from 'react';
import { useUserAuth } from '../_utils/auth-context';
import { useEffect, useState } from "react";
import BibleVerse from './verse/verse';


function Content() {

  const {user} = useUserAuth();
  const [verseData, setVerseData] = useState([]);

  async function getVerseById(){
    try {
        const response = await fetch(`https://bible-api.com/?random=verse`);
        //console.dir(response); //break up parts, looking at object
        if(!response.ok){
            console.log(response.status);
        }
        const data=await response.json();
        //console.dir(data);
        return data;
    } catch (error) {
        console.log(`Error:${error.message}`);
    }
}

useEffect(() => {
  async function fetchVerse() {
    const data = await getVerseById();
    setVerseData({
      reference: `${data.reference}`,
      text: data.text,
    });
  }
  fetchVerse();
}, []);



  return (
    <main style={{ padding: '20px' }}>
      <h2>Welcome, {user.displayName}!</h2>
      <p>Here is your daily verse:</p>
      <BibleVerse bibleVerse={verseData}/>
    </main>
  );
}

export default Content;
