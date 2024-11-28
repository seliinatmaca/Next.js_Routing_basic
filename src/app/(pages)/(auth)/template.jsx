"use client";
// Layout bileşenleri birer HOC olarak tanımlanır yanib,r children propu alır ve onu döndürür.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Layout = ({ children }) => {
  const [name, setName] = useState("");
  //urlden mevcut sayfa yolunu alır

  const path = usePathname();

  console.log(path);

  return (
    <div className="w-full flex justify-beetween gap-5">
      <nav className="flex flex-col gap-4 text-[20px] border rounded nav">
        <label>Merhaba, {name}</label>
        <input
          className="text-black"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Link className={path === "/login" && "active"} href="/login">
          Giriş Yap
        </Link>
        <Link className={path === "/signup" && "active"} href="/signup">
          Kayıt Ol
        </Link>
        <Link className={path === "/forgatpass" && "active"} href="/forgatpass">
          Şifremi Unuttum
        </Link>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
