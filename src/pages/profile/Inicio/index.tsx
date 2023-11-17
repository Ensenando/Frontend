import "./Inicio.scss";

import TrofeoOro from "../../../assets/TrofeoOro.png";

export const Inicio = () => {
  return (
    <section className="Inicio bg-white w-full rounded-3xl box-border p-16 flex gap-4">
        <div className="">
          <h1 className="Inicio--Title text-3xl">Trofeos</h1>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <img className="w-full" src={TrofeoOro} alt="" />
              <div className="flex justify-around">
                <p>1</p>
                <p>4</p>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="Inicio--Title text-xl">Medallas</h3>
          <div className="flex content-stretch flex-wrap gap-4">
            <div className="w-12 h-12 bg-blue-200"></div>
            <div className="w-12 h-12 bg-blue-200"></div>
            <div className="w-12 h-12 bg-blue-200"></div>
            <div className="w-12 h-12 bg-blue-200"></div>
            <div className="w-12 h-12 bg-blue-200"></div>
          </div>
        </div>
    </section>
  );
};
