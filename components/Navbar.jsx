"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "@node_modules/next/image";
import { signOut, signIn, useSession, getProviders } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  const [Providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          height={30}
          width={30}
          alt="logo"
          className="object-contain"
        />
        <p className="logo_text">PromptApp</p>
      </Link>
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              <p>Create Post</p>
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile" className="nav_link">
              <Image
                src={session.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {Providers &&
              Object.values(Providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  key={provider.id}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 black_btn w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {Providers &&
              Object.values(Providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  key={provider.id}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
