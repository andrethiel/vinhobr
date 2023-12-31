"use client";
import { DEGUSTACAO_EXLUIR, DEGUSTACAO_LISTAR } from "@/app/Api";
import Ahref from "@/app/Components/Ahref";
import Alerta from "@/app/Components/Alerta";
import Botao from "@/app/Components/Botao";
import { Loading } from "@/app/Components/Loading";
import Tabela from "@/app/Components/Table";
import { useEffect, useState } from "react";

export default function CadastroDegustacao() {
  useEffect(() => {
    if (dados.length == 0) {
      listar();
    }
  }, []);

  async function listar() {
    setErrors([]);
    setLoading(true);
    const response = await DEGUSTACAO_LISTAR();
    if (response.sucesso) {
      setDados(response.dados);
    }
    setLoading(false);
  }

  async function Excluir(guid) {
    const response = await DEGUSTACAO_EXLUIR(guid);
    if (response.sucesso) {
      setErrors([response.message]);
      listar();
    } else {
      setErrors([response.message, "error"]);
    }
  }

  const titulo = ["Nome Vinho", "Valor 25ml", "Valor 50ml", "Valor 125ml"];
  const [dados, setDados] = useState([]);
  const [errors, setErrors] = useState([]);

  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;

  return (
    <>
      <div className="mt-24">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between lg:flex-row :lgjustify-between xl:flex-row xl:justify-between">
          <span className="text-2xl">Lista de Degustação</span>
          <Ahref link={"/Adm/Cadastro/Degustacao"}>Cadastrar degustação</Ahref>
        </div>
      </div>
      {errors.length > 0 && <Alerta type={errors[1]}>{errors[0]}</Alerta>}
      {dados.length > 0 ? (
        <div className="mt-5">
          <Tabela
            titulo={titulo}
            body={dados}
            itemsPerPage={10}
            onClick={Excluir}
          />
        </div>
      ) : (
        <span className="text-2xl">Nenhum dado encontrado</span>
      )}
    </>
  );
}
