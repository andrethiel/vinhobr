"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Tabela({ titulo, body, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = body.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(body.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % body.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="w-full overflow-x-auto shadow-md sm:rounded-lg rounded-lg">
      <table className="w-full text-lg text-left">
        <thead className="text-xs uppercase bg-gray-600 text-white">
          <tr>
            {titulo.map((item) => (
              <th scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Ação
            </th>
          </tr>
        </thead>
        <tbody className="text-base bg-gray-300">
          {currentItems.map((item) =>
            typeof item.preco != "undefined" ? (
              <tr className="border-b">
                <th scope="row" className="px-6 py-4 whitespace-nowrap">
                  {item.nomeVinho}
                </th>
                <th class="px-6 py-4">
                  {item.preco.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </th>
                <th class="px-6 py-4">{item.pais}</th>
                <th class="px-6 py-4">
                  <a
                    href={`/Adm/Cadastro/Vinhos?Guid=${item.guid}`}
                    className="text-white font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center border-[#d7006e] bg-[#d7006e]"
                  >
                    Editar
                  </a>
                </th>
              </tr>
            ) : typeof item.valor25 != "undefined" ? (
              <tr className="border-b">
                <th scope="row" className="px-6 py-4 whitespace-nowrap">
                  {item.nomeVinho}
                </th>
                <th class="px-6 py-4">
                  {item.valor25.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </th>
                <th class="px-6 py-4">
                  {item.valor50.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </th>
                <th class="px-6 py-4">
                  {item.valor125.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </th>
                <th class="px-6 py-4">
                  <a
                    href={`/Adm/Cadastro/Degustacao?Guid=${item.guid}`}
                    className="text-white font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center border-[#d7006e] bg-[#d7006e]"
                  >
                    Editar
                  </a>
                </th>
              </tr>
            ) : (
              <tr className="border-b">
                <th scope="row" className="px-6 py-4">
                  <div className="w-10">
                    <img src={item.imagemPrincipal} />
                  </div>
                </th>
                <th scope="row" className="px-6 py-4">
                  <div className="w-10">
                    <img src={item.imagemDegustacao} />
                  </div>
                </th>
                <th scope="row" className="px-6 py-4">
                  {item.textoDegustacao}
                </th>
                <th scope="row" className="px-6 py-4">
                  <div className="w-10">
                    <img src={item.imagemVinhos} />
                  </div>
                </th>
                <th scope="row" className="px-6 py-4">
                  {item.textoVinhos}
                </th>
                <th class="px-6 py-4">
                  <a
                    href={`/Adm/Cadastro/Portal?Guid=${item.guid}`}
                    className="text-white font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center border-[#d7006e] bg-[#d7006e]"
                  >
                    Editar
                  </a>
                </th>
              </tr>
            )
          )}
        </tbody>
      </table>
      <div className="flex justify-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <span className="w-10 h-10 flex items-center justify-center ml-4 rounded-md bg-gray-600">
              <ChevronRightIcon className="text-white" />
            </span>
          }
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <span className="w-10 h-10 flex items-center justify-center mr-4 rounded-md bg-gray-600">
              <ChevronLeftIcon className="text-white" />
            </span>
          }
          renderOnZeroPageCount={null}
          onPageChange={handlePageClick}
          containerClassName="flex items-center justufy-center mt-8 mb-4"
          pageClassName="block border border-solid w-10 h-10 flex items-center justify-center rounded-md mr-4"
          activeClassName="bg-[#d7006e] text-white boder-[#d7006e]"
        />
      </div>
    </div>
  );
}
