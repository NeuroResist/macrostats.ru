import { Link, useLocation, useParams } from "react-router-dom";
import { info } from "../constants.ts";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export const Chart = () => {
  const { id } = useParams();
  const location = useLocation(); // Получение переданного объекта из state

  const {
    full_name,
    full_units,
    second_full_units,
    seasonality,
    period,
    yaxis,
    first_date_observe,
    last_observation,
    last_date_observe,
    updated,
  } = location.state?.item; // Доступ к переданным данным

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formatDate = (date) => (date ? format(date, "dd.MM.yyyy") : "");

  console.log(startDate, endDate);

  return (
    <div className="px-20 mx-auto max-w-[1200px]">
      <section className="text-headerSection text-Bright-blue mb-14 bg-Light-gray h-[50px] flex items-center px-14 justify-between">
        <h2>{full_name}</h2>

        <div className="bg-Bright-blue text-white text-sm h-20 w-100 flex items-center justify-center">
          .xlsx
        </div>
      </section>

      <div className="px-10 flex mb-40">
        <div className="flex bg-amber-100 w-[500px] text-sm justify-between mr-[170px]">
          <ul className="flex flex-col">
            <li>last_observation:</li>
            <li className="mb-2">{last_observation}</li>
            <li>updated: {updated}</li>
          </ul>

          <ul className="flex flex-col w-[180px]">
            <li>units:</li>
            <li>{second_full_units}</li>
            <li>{seasonality}</li>
          </ul>

          <ul className="flex flex-col w-72">
            <li>period:</li>
            <li>{period}</li>
          </ul>
        </div>

        <div className="flex justify-between w-300">
          <div className="flex items-center mr-14">
            <label className="mr-10 inline-block">from:</label>

            <DatePicker
              className="bg-Light-gray h-36 max-w-100"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                if (endDate && date > endDate) {
                  setEndDate(null); // Сбросить "To" дату, если "From" больше "To"
                }
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd.MM.yyyy"
            />
          </div>

          <div className="flex items-center">
            <label className="mr-10 inline-block">to:</label>

            <DatePicker
              className="bg-Light-gray h-36 flex max-w-100"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate} // Минимальная дата для выбора в "To" — это "From"
              dateFormat="dd.MM.yyyy"
              disabled={!startDate} // Отключить выбор, если начальная дата не выбрана
            />
          </div>
        </div>
      </div>

      <div>
        {formatDate(startDate)} мне лень пока что доделать график
        {formatDate(endDate)}
      </div>
    </div>
  );
};
