"use client";
import Image from 'next/image';
import React from 'react';
import { useUserAuth } from '../_utils/auth-context';

function Navigation() {
  const { user, firebaseSignOut } = useUserAuth();

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.dir(user);

  return (
    <main>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center p-2">
          <Image src="/res/church.svg" alt="church-logo" width={50} height={50} />
          <h1 className="text-xl font-bold ml-4">Church Directory</h1>
        </div>
        <div className="flex items-center p-2">
          {user ? (
            <p className="mr-2 text-sm">{user.displayName}</p>
          ) : (
            <p className="mr-2 text-sm">Guest</p> 
          )}
          <button
            type="button"
            onClick={handleSignOut}
            className="bg-[#020617] text-white p-1 rounded-md text-sm"
          >
            Log Out
          </button>
        </div>
      </div>
      <header className="bg-blue-400" style={{ padding: '10px', color: 'white' }}>
        <h1 className="text-center">Welcome to Church Directory</h1>
      </header>
      <nav className="flex justify-center items-center p-1 bg-gray-200 gap-10">
        <a href="./" className="hover:font-bold hover:underline">
          Home
        </a>
        <a href="./directory" className="hover:font-bold hover:underline">
          Directory
        </a>
        <a href="https://thekingsbible.com/" className="hover:font-bold hover:underline" target="_blank">
          Bible
        </a>
        <a href="./prayer" className="hover:font-bold hover:underline">
          Daily Prayer
        </a>
      </nav>
    </main>
  );
}

export default Navigation;
