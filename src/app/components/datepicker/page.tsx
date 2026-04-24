"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function InteractiveDatepicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    const prevMonthDays = getDaysInMonth(year, month - 1);
    days.push({ day: prevMonthDays - firstDay + i + 1, month: month - 1, year: year, otherMonth: true });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, month, year, otherMonth: false });
  }
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({ day: i, month: month + 1, year: year, otherMonth: true });
  }

  const today = new Date();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="au-datepicker w-full max-w-sm" ref={ref}>
      <button className="au-datepicker-trigger" onClick={() => setIsOpen(!isOpen)} data-placeholder={!selectedDate ? "true" : undefined}>
        <span>{selectedDate ? formatDate(selectedDate) : "Pick a date"}</span>
        <CalendarIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="au-datepicker-dropdown" data-state="open">
          <div className="au-datepicker-header">
            <button
              className="au-datepicker-nav-button"
              onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="au-datepicker-title">
              {MONTHS[month]} {year}
            </span>
            <button
              className="au-datepicker-nav-button"
              onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="au-datepicker-weekdays">
            {WEEKDAYS.map((day) => (
              <div key={day} className="au-datepicker-weekday">{day}</div>
            ))}
          </div>
          <div className="au-datepicker-days">
            {days.map((d, i) => {
              const date = new Date(d.year, d.month, d.day);
              const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
              const isToday = date.toDateString() === today.toDateString();
              return (
                <button
                  key={i}
                  className="au-datepicker-day"
                  data-selected={isSelected ? "true" : undefined}
                  data-today={isToday ? "true" : undefined}
                  data-other-month={d.otherMonth ? "true" : undefined}
                  onClick={() => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                  disabled={d.otherMonth}
                >
                  {d.day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DatepickerPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">DatePicker</h1>
      <p className="text-au-muted-foreground mb-8">
        A date selection component with calendar view.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add datepicker" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveDatepicker />}
          code={`function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  
  return (
    <div class="au-datepicker">
      <button class="au-datepicker-trigger" onClick={() => setOpen(!open)}>
        {selected ? formatDate(selected) : "Pick a date"}
        <CalendarIcon class="w-4 h-4" />
      </button>
      {open && (
        <div class="au-datepicker-dropdown">
          <div class="au-datepicker-header">
            <button onClick={prevMonth}>←</button>
            <span>{month} {year}</span>
            <button onClick={nextMonth}>→</button>
          </div>
          <div class="au-datepicker-weekdays">...</div>
          <div class="au-datepicker-days">
            {days.map(day => (
              <button 
                key={day}
                class="au-datepicker-day"
                data-selected={isSelected}
                onClick={() => { setSelected(day); setOpen(false); }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">CSS Classes Reference</h2>
        <div className="border border-au-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-au-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Class</th>
                <th className="text-left px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-au-border">
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker</td><td className="px-4 py-2">Container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-trigger</td><td className="px-4 py-2">Input button</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-dropdown</td><td className="px-4 py-2">Calendar dropdown</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-header</td><td className="px-4 py-2">Month/year navigation</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-title</td><td className="px-4 py-2">Current month display</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-nav</td><td className="px-4 py-2">Navigation buttons</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-weekdays</td><td className="px-4 py-2">Week day labels</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-days</td><td className="px-4 py-2">Days grid</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-day</td><td className="px-4 py-2">Single day button</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-months</td><td className="px-4 py-2">Month selection grid</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-datepicker-years</td><td className="px-4 py-2">Year selection grid</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}