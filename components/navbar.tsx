"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";
import { SignupButton } from "./signup-button";

const NavBar = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div className="py-4 flex w-full justify-between bg-gray-800 px-44">
      <div className="flex gap-8">
        <a href="/">Home</a>
        <a href="/profile">Server Protected Profile</a>
        <a href="/middleware">Middleware Protected</a>
        <a href="/auth-protected">Auth Protected</a>
        <a target="_black" href="/api/data">
          Protected Api
        </a>
      </div>
      <div className="flex gap-4">
        {!user && !isLoading && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {user && !isLoading && (
          <>
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;