import "./index.css";

function App() {
  const info = [
    {
      full_name: "producer_price_index_(ppi)",
      full_units: "percent",
      second_full_units: "Index 100 = 01.01.2015",
      seasonality: "not_seasonally_adjusted",
      period: "quarterly",
      yaxis: "Index 100 = 01.01.2015",
      first_date_observe: "01.03.2015",
      last_date_observe: "01.12.2023",
      last_observation: "151.848% (01.12.2023)",
      updated: "29.09.2024",
    },
    {
      full_name: "government_revenue",
      full_units: "rubles",
      second_full_units: "cum_rub_start_of_y",
      seasonality: "not_seasonally_adjusted",
      period: "monthly",
      yaxis: "rubles",
      first_date_observe: "01.01.2006",
      last_date_observe: "01.08.2024",
      last_observation: "13485725841279.1rub. (01.08.2024)",
      updated: "29.09.2024",
    },
    {
      full_name: "consumer_price_index_(cpi)",
      full_units: "percent",
      second_full_units: "percent_change_from_q_ago",
      seasonality: "not_seasonally_adjusted",
      period: "quarterly",
      yaxis: "percent_change",
      first_date_observe: "01.03.2015",
      last_date_observe: "01.12.2023",
      last_observation: "2.69% (01.12.2023)",
      updated: "29.09.2024",
    },
  ];

  return (
    <>
      <header className="h-[120px] w-full bg-Dark-blue text-white px-10 pt-34 mb-20">
        <h1 className="text-header mb-1">rmd</h1>
        <h2 className="ml-8 text-headerDescription tracking-wider">
          russian_macro_data.csv
        </h2>
      </header>

      <main className="space-y-20">
        {info.map((item) => (
          <section className="mx-auto w-[900px]">
            <h3 className="text-headerSection text-Bright-blue bg-Light-gray h-[50px] flex items-center pl-14">
              {item.full_name}
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
}

export default App;
