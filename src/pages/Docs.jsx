import React from "react";

// css
import "../css/markdown.css";

// data
import { docsData } from "../data/docs/data";

// components
import Blum from "../components/img/Blum";
import MarkdownText from "../components/MarkdownText";

const Docs = () => {
  return (
    <>
      {/* header */}
      <header className="sticky z-10 -top-[120px] inset-x-0 bg-black pt-6 border-b-2 border-secondary">
        {/* title wrapper */}
        <div className="container">
          {/* content */}
          <div className="flex flex-col items-center gap-5">
            {/* logo */}
            <Blum size={32} fill="#fff" />

            {/* page title */}
            <h1 className="text-3xl font-bold">Ma'lumotlar</h1>

            <div className="w-full overflow-auto pb-3.5">
              <ul className="flex items-center gap-3.5 w-full">
                {docsData.map((doc) => {
                  return (
                    <li className="min-w-max shrink-0" key={doc.id}>
                      <a
                        href={"#step-" + (doc.id + 1)}
                        className="inline-block px-2 py-2.5 rounded-lg bg-white/10"
                      >
                        <span className="text-sm opacity-60">
                          {doc.id + 1}.{" "}
                        </span>
                        <span>{doc.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* warning */}
      <section className="pt-5">
        <div className="container">
          {/* content */}
          <div className="bg-red-950/35 rounded-xl p-4 md:p-5">
            <h2 className="text-red-500 font-normal mb-1">Ogohlantirish!</h2>

            {/* description */}
            <p className="!font-normal text-sm text-red-200 opacity-70">
              Hurmatli foydalanuvchi ushbu botda asosiy akkauntdan foydalanish
              tavsiya etilmaydi! Sababi akkaunt, hamyonlaringiz ban olish
              ehtimoli mavjud!
            </p>
          </div>
        </div>
      </section>

      {/* infos */}
      <div className="pb-6">
        <ul>
          {docsData.map((doc) => {
            return (
              <li
                key={doc.id}
                id={"step-" + (doc.id + 1)}
                className="group py-8 scroll-mt-16 even:bg-[#151515]"
              >
                <div className="container space-y-5">
                  {/* title */}
                  <h2 className="text-lg">
                    <span className="text-base opacity-60">{doc.id + 1}.</span>
                    <span> {doc.title}</span>
                  </h2>

                  {/* description */}
                  <MarkdownText>{doc.description}</MarkdownText>

                  {/* image */}
                  {doc.image ? (
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-auto max-w-[512px] aspect-square object-contain bg-white/5 rounded-xl border-2 border-secondary group-even:bg-black/15"
                    />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Docs;
