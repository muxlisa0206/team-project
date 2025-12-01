import { FaArrowRightLong, FaSun } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import CatalogCard from "../../components/catalog-card/CatalogCard";

const CatalogPage = () => {
  const [dark, setDark] = useState(false);

  function changeMode() {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  }
  return (
    <div className="dark:bg-[#3B3937]">
      <main>
        <section>
          <div className="container mx-auto px-3 pl-10 pr-7">
            <div className="pt-55 lg:pt-35 flex gap-5">
              <Link
                className="text-[13px] sm:text-[15px] text-[#B1B0AF]"
                to="/"
              >
                Главная
              </Link>
              <p className="text-[15px] text-[#B1B0AF]">-</p>
              <Link
                className="text-[13px] sm:text-[15px] text-[#B1B0AF]"
                to="/catalog"
              >
                Каталог
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[50px] text-[#3B3937] dark:text-white font-semibold sm:text-[64px]">
                Каталог
              </h1>
              <div className="pt-5 lg:pt-10">
                <button onClick={changeMode}>
                  {dark ? (
                    <FaSun className="text-yellow-400 text-[24px]" />
                  ) : (
                    <FaMoon className="text-[24px]" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="pt-8 flex flex-col items-center gap-10 sm:grid grid-cols-2 lg:flex lg:flex-row">
                <CatalogCard
                  title1={"Межкомнатные"}
                  title2={"дверы"}
                  src={"/eshik2.png"}
                />
                <CatalogCard title1={"Мебель"} title2={""} src={"/mebel.png"} />
                <CatalogCard
                  title1={"Стеновые панели"}
                  title2={"«Буазери»"}
                  src={"/krovat.png"}
                />
              </div>
              <div className="flex flex-col items-center gap-10 pb-22 md:flex md:flex-row">
                <CatalogCard
                  title1={"Лестницы"}
                  title2={""}
                  src={"/zina.png"}
                />
                <CatalogCard
                  title1={"Лестницы"}
                  title2={""}
                  src={"/zina.png"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CatalogPage;
