import { info } from "../constants.ts";
import { Link, useLocation } from "react-router-dom";

export const MainPage = () => {
  const location = useLocation();

  return (
    <>
      <main className="space-y-20">
        {info.map((item) => (
          <section className="mx-auto w-[900px]">
            <h3 className="text-headerSection text-Bright-blue bg-Light-gray h-[50px] flex items-center pl-14">
              <Link
                to={`${location.pathname}${item.full_name}`}
                state={{ item: item }}
              >
                {item.full_name}
              </Link>
            </h3>

            <div className="text-sectionLower text-Gray-text bg-Dark-gray h-[30px] flex items-center px-14 justify-between">
              <p className="">
                <span>{item.full_units}</span>/<span>{item.period}</span>/
                <span>{item.seasonality}</span>
              </p>

              <p className="text-sectionData">
                <span>{item.first_date_observe}</span>_to_
                <span>{item.last_date_observe}</span>
              </p>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};
