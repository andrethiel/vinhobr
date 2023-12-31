"use client";
import { useEffect, useState } from "react";
import { PORTAL_LISTAR_PORTAL } from "../Api";
import { Loading } from "../Components/Loading";
import "./style.css";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    listar();
  }, []);

  async function listar() {
    setLoading(true);
    const response = await PORTAL_LISTAR_PORTAL(false);
    if (response.sucesso) {
      setImagemDegustacao(response.dados.imagemDegustacao);
      setImagemVinho(response.dados.imagemVinhos);
      setTextoDegustacao(response.dados.textoDegustacao);
      setTextVinho(response.dados.textoVinhos);
    }

    setLoading(false);
  }

  const [imagemPrincipal, setImagemImagemPrincipal] = useState(null);
  const [imagemDegustacao, setImagemDegustacao] = useState(null);
  const [imagemVinho, setImagemVinho] = useState(null);
  const [textoDegustacao, setTextoDegustacao] = useState("");
  const [textVinho, setTextVinho] = useState(null);
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={loading} />;

  return (
    <div className="h-full w-full">
      <Link href="/Degustacao">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-5 ">
          <div style={{ width: "100%" }}>
            <img src={imagemDegustacao} className="rounded-lg" />
          </div>
          <div
            className="flex justify-center items-center flex-col"
            dangerouslySetInnerHTML={{
              __html: textoDegustacao,
            }}
          ></div>
        </div>
      </Link>
      <Link href="/Vinhos">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-5 gap-5">
          <div
            className="flex justify-center items-center flex-col"
            dangerouslySetInnerHTML={{
              __html: textVinho,
            }}
          ></div>
          <div>
            <img src={imagemVinho} className="rounded-lg" />
          </div>
        </div>
      </Link>
    </div>
  );
}
