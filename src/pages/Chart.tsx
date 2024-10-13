import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "../constants.tsx"; // Предполагаю, что данные загружаются из constants.tsx

export const Chart = () => {
  const location = useLocation();

  const {
    full_name,
    second_full_units,
    seasonality,
    period,
    last_observation,
    updated,
  } = location?.state?.item;

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [filteredData, setFilteredData] = useState(data); // Состояние для отфильтрованных данных

  // Функция для форматирования даты
  const formatDate = (date: Date | undefined) =>
    date ? format(date, "dd.MM.yyyy") : "";

  // Функция для преобразования строки в объект Date
  const parseDateString = (dateString: string) => {
    return parse(dateString, "dd.MM.yyyy", new Date());
  };

  // Фильтрация данных по диапазону дат
  useEffect(() => {
    if (startDate && endDate) {
      const filtered = data.filter((item) => {
        const itemDate = parseDateString(item.date); // Преобразуем строку в объект Date
        return itemDate >= startDate && itemDate <= endDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Если даты не выбраны, показываем все данные
    }
  }, [startDate, endDate]);

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
                setStartDate(date || undefined);
                if (endDate && date && date > endDate) {
                  setEndDate(undefined); // Сбросить конечную дату, если начальная больше конечной
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
              onChange={(date) => setEndDate(date || undefined)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd.MM.yyyy"
              disabled={!startDate}
            />
          </div>
        </div>
      </div>

      <div>
        {formatDate(startDate)} — {formatDate(endDate)}
      </div>

      <div>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="government_revenue"
              stroke="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
