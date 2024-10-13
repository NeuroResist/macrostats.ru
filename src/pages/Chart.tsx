import React, { useEffect, useState } from "react";
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
import DatePicker from "react-datepicker";
import { format, parse } from "date-fns";
import { data } from "../constants.tsx"; // Предполагаю, что данные загружаются из constants.tsx

export const Chart = () => {
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

  // Функция для округления и обрезки до 6 цифр
  const trimGovernmentRevenue = (value: number) => {
    return Math.round(value / 1e6); // Обрезаем до миллионов
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

  // Модифицируем данные для графика (округляем значения government_revenue)
  const modifiedData = filteredData.map((item) => ({
    ...item,
    government_revenue: trimGovernmentRevenue(item.government_revenue),
  }));

  return (
    <div className="px-20 mx-auto max-w-[1200px]">
      <div>
        {formatDate(startDate)} — {formatDate(endDate)}
      </div>

      <div>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={modifiedData}
            margin={{ top: 10, right: 30, left: 50, bottom: 0 }} // Увеличение отступов
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              width={90} // Увеличиваем ширину оси Y
              tickFormatter={(value) => `${value}M`} // Добавляем M для обозначения миллионов
            />
            <Tooltip formatter={(value) => `${value}M`} />
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
