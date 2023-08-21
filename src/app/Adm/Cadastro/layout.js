import "../../globals.css";
import { Inter } from "next/font/google";

import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [navbar, setNavbar] = useState(false);

  const data = new Date();

  return (
    <html lang="br">
      <body className={inter.className}>
        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <img
                src="https://www.vinhobr.com.br/imagens_do_site/0A1181EA-93B7-4436-9FBE-0A0F6EE27C40.png"
                className="h-11 mr-3"
              />
            </a>
            <div className="flex lg:hidden md:hidden">
              {navbar ? (
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg border-2 border-[#d7006e] bg-[#d7006e]"
                  onClick={() => setNavbar(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg border-2 border-[#d7006e] bg-[#d7006e]"
                  onClick={() => setNavbar(true)}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </div>
            <div
              className={`${!navbar ? "hidden" : ""} w-full md:block md:w-auto`}
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-2 lg:bg-white md:bg-white border-gray-600 bg-gray-600 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/Adm/Cadastro"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="/Adm/Listar/Portal"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Portal
                  </a>
                </li>
                <li>
                  <Link
                    href="/Adm/Listar/Vinhos"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Vinhos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Adm/Listar/Degustacao"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Degustação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Adm/Listar/Usuario"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Usuários
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container px-6 mx-auto sm:container sm:px-20 md:mx-auto md:px-20 lg:px-20 lg:mx-auto">
          {children}
        </div>
        <footer className="max-w-screen mx-auto rounded-lg shadow mb-5 mt-10 bg-gray-600">
          <div className="flex items-center justify-center p-4">
            <span className="text-sm text-gray-500 sm:text-cent">
              © {data.getFullYear()} VinhoBr™ City Center Outlet . All Rights
              Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
