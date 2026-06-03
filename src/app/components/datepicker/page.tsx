"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function InteractiveDatepicker() {
  const { t } = useI18n();
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
    <div className="relative inline-block w-full max-w-sm" ref={ref}>
      <button
        className="flex h-10 w-full items-center justify-between rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring"
        onClick={() => setIsOpen(!isOpen)}
        data-placeholder={!selectedDate ? "true" : undefined}
      >
        <span>{selectedDate ? formatDate(selectedDate) : t("common.select")}</span>
        <CalendarIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-1 w-72 rounded-md border border-au-border bg-au-background p-3 shadow-md" data-state="open">
          <div className="flex items-center justify-between mb-2">
            <button
              className="inline-flex items-center justify-center rounded-md p-1 hover:bg-au-accent"
              onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium">
              {MONTHS[month]} {year}
            </span>
            <button
              className="inline-flex items-center justify-center rounded-md p-1 hover:bg-au-accent"
              onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            {WEEKDAYS.map((day) => (
              <div key={day} className="inline-flex items-center justify-center w-8 h-8 text-xs text-au-muted-foreground">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d, i) => {
              const date = new Date(d.year, d.month, d.day);
              const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
              const isToday = date.toDateString() === today.toDateString();
              return (
                <button
                  key={i}
                  className={`inline-flex items-center justify-center rounded-md w-8 h-8 text-sm hover:bg-au-accent ${
                    isSelected ? "bg-au-primary text-au-primary-foreground hover:bg-au-primary" : ""
                  } ${
                    isToday ? "border border-au-border" : ""
                  } ${
                    d.otherMonth ? "text-au-muted-foreground" : ""
                  }`}
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
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("datePicker.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("datePicker.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={<InteractiveDatepicker />}
          code={`<div x-data="{ open: false, selected: null, month: new Date().getMonth(), year: new Date().getFullYear() }"
  @click.outside="open = false" class="relative inline-block w-full max-w-sm">
  <button @click="open = !open"
    class="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
    <span x-text="selected ? selected : 'Pick a date'">Pick a date</span>
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
  </button>
  <div x-show="open" class="absolute z-50 mt-1 w-72 rounded-md border border-gray-200 bg-white p-3 shadow-md">
    <div class="flex items-center justify-between mb-2">
      <button @click="month = month - 1; if(month < 0) { month = 11; year = year - 1; }"
        class="inline-flex items-center justify-center rounded-md p-1 hover:bg-gray-100">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <span class="text-sm font-medium" x-text="['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][month] + ' ' + year"></span>
      <button @click="month = month + 1; if(month > 11) { month = 0; year = year + 1; }"
        class="inline-flex items-center justify-center rounded-md p-1 hover:bg-gray-100">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
    <div class="grid grid-cols-7 gap-1 mb-1">
      <template x-for="day in ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']" :key="day">
        <div class="inline-flex items-center justify-center w-8 h-8 text-xs text-au-muted-foreground" x-text="day"></div>
      </template>
    </div>
    <div class="grid grid-cols-7 gap-1">
      <template x-for="(d, i) in days" :key="i">
        <button @click="selected = d; open = false"
          class="inline-flex items-center justify-center rounded-md w-8 h-8 text-sm hover:bg-gray-100"
          x-text="d"></button>
      </template>
    </div>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
