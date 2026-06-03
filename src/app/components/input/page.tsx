"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function InteractiveInput() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Day");

  const emailError = emailTouched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValid = name.length > 0 && !emailError;

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-au-foreground after:content-['_*'] after:text-red-500">{t("common.nameLabel")}</label>
        <input
          type="text"
          className="flex h-10 w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={t("common.enterYourName")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-au-foreground after:content-['_*'] after:text-red-500">{t("common.email")}</label>
        <input
          type="email"
          className={`flex h-10 w-full rounded-md border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            emailError
              ? "border-red-500 focus-visible:outline-red-500"
              : isValid
              ? "border-green-500 focus-visible:outline-green-500"
              : "border-au-border focus-visible:outline-au-ring"
          }`}
          placeholder={t("common.enterYourEmail")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
        />
        {emailError && <span className="text-xs text-red-500">{t("input.invalidEmail")}</span>}
        {!emailError && isValid && <span className="text-xs text-green-500">{t("input.emailLooksGood")}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="block text-sm font-medium text-au-foreground">{t("common.period")}</label>
        <div className="inline-flex border border-au-border rounded-md overflow-hidden">
          {["Day", "Week", "Month"].map((period) => (
            <button
              key={period}
              className={`flex items-center justify-center px-4 py-2 text-sm cursor-pointer transition-colors ${
                selectedPeriod === period
                  ? "bg-au-primary text-au-primary-foreground hover:bg-au-primary"
                  : "bg-au-background text-au-foreground border-r border-au-border hover:bg-au-accent last:border-r-0"
              }`}
              onClick={() => setSelectedPeriod(period)}
            >
              {period === "Day" ? t("common.day") : period === "Week" ? t("common.week") : t("common.month")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InputPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("input.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("input.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={<InteractiveInput />}
          code={`<div x-data="{ name: '', email: '', emailTouched: false, selectedPeriod: 'Day' }" class="w-full max-w-sm space-y-4">
  <div class="flex flex-col gap-1">
    <label class="block text-sm font-medium text-gray-900">Name</label>
    <input type="text" x-model="name"
      class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      placeholder="Enter your name" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="block text-sm font-medium text-gray-900">Email</label>
    <input type="email" x-model="email" @blur="emailTouched = true"
      :class="'flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ' + (
        emailTouched && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) ? 'border-red-500 focus-visible:outline-red-500' :
        name.length > 0 && emailTouched && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) ? 'border-green-500 focus-visible:outline-green-500' :
        'border-gray-300 focus-visible:outline-black'
      )"
      placeholder="Enter your email" />
    <template x-if="emailTouched && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)">
      <span class="text-xs text-red-500">Invalid email</span>
    </template>
    <template x-if="emailTouched && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) && name.length > 0">
      <span class="text-xs text-green-500">Email looks good!</span>
    </template>
  </div>
  <div class="flex flex-col gap-1">
    <label class="block text-sm font-medium text-gray-900">Period</label>
    <div class="inline-flex border border-gray-200 rounded-md overflow-hidden">
      <button @click="selectedPeriod = 'Day'"
        :class="selectedPeriod === 'Day' ? 'bg-black text-white' : 'bg-white text-gray-900 border-r border-gray-200 hover:bg-gray-100'"
        class="flex items-center justify-center px-4 py-2 text-sm cursor-pointer transition-colors">Day</button>
      <button @click="selectedPeriod = 'Week'"
        :class="selectedPeriod === 'Week' ? 'bg-black text-white' : 'bg-white text-gray-900 border-r border-gray-200 hover:bg-gray-100'"
        class="flex items-center justify-center px-4 py-2 text-sm cursor-pointer transition-colors">Week</button>
      <button @click="selectedPeriod = 'Month'"
        :class="selectedPeriod === 'Month' ? 'bg-black text-white' : 'bg-white text-gray-900 border-r border-gray-200 hover:bg-gray-100'"
        class="flex items-center justify-center px-4 py-2 text-sm cursor-pointer transition-colors">Month</button>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.basicInput")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-au-foreground">{t("common.nameLabel")}</label>
                <input type="text" className="flex h-10 w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("common.enterYourName")} />
              </div>
            </div>
          }
          code={`<div class="flex flex-col gap-1">
  <label class="block text-sm font-medium text-gray-900">Name</label>
  <input type="text" class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter your name" />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.sizes")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm space-y-3">
              <div className="flex flex-col gap-1">
                <label className="block font-medium text-au-foreground" style={{ fontSize: "0.75rem" }}>{t("common.sm")}</label>
                <input type="text" className="flex h-8 w-full rounded-md border border-au-border bg-au-background px-2 text-xs placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("common.smallInput")} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-au-foreground" style={{ fontSize: "0.875rem" }}>{t("common.md")}</label>
                <input type="text" className="flex h-10 w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("common.mediumInput")} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="block font-medium text-au-foreground" style={{ fontSize: "1rem" }}>{t("common.lg")}</label>
                <input type="text" className="flex h-12 w-full rounded-md border border-au-border bg-au-background px-4 text-base placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("common.largeInput")} />
              </div>
            </div>
          }
          code={`<div class="flex flex-col gap-1">
  <label class="block font-medium text-gray-900">Small</label>
  <input type="text" class="flex h-8 w-full rounded-md border border-gray-300 bg-white px-2 text-xs placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50" placeholder="Small input" />
</div>

<div class="flex flex-col gap-1">
  <label class="block text-sm font-medium text-gray-900">Medium</label>
  <input type="text" class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50" placeholder="Medium input" />
</div>

<div class="flex flex-col gap-1">
  <label class="block font-medium text-gray-900">Large</label>
  <input type="text" class="flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-base placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50" placeholder="Large input" />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.validationStates")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm space-y-4">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-au-foreground after:content-['_*'] after:text-red-500">{t("common.email")}</label>
                <input type="email" className="flex h-10 w-full rounded-md border border-red-500 bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:cursor-not-allowed disabled:opacity-50" defaultValue="invalid-email" />
                <span className="text-xs text-red-500">{t("input.invalidEmail")}</span>
              </div>
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-au-foreground">{t("input.username")}</label>
                <input type="text" className="flex h-10 w-full rounded-md border border-green-500 bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:cursor-not-allowed disabled:opacity-50" defaultValue="johndoe" />
                <span className="text-xs text-green-500">{t("input.nameAvailable")}</span>
              </div>
            </div>
          }
          code={`<div class="flex flex-col gap-1">
  <label class="block text-sm font-medium text-gray-900 after:content-['_*'] after:text-red-500">Email</label>
  <input type="email" class="flex h-10 w-full rounded-md border border-red-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:cursor-not-allowed disabled:opacity-50" />
  <span class="text-xs text-red-500">Invalid email</span>
</div>

<div class="flex flex-col gap-1">
  <label class="block text-sm font-medium text-gray-900">Username</label>
  <input type="text" class="flex h-10 w-full rounded-md border border-green-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:cursor-not-allowed disabled:opacity-50" />
  <span class="text-xs text-green-500">Name available</span>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.disabled")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-au-foreground">{t("common.disabled")}</label>
                <input type="text" className="flex h-10 w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue={t("common.cannotEdit")} disabled />
              </div>
            </div>
          }
          code={`<div class="flex flex-col gap-1">
  <label class="block text-sm font-medium text-gray-900">Disabled</label>
  <input type="text" class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50" value="Cannot edit" disabled />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.textarea")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-au-foreground">{t("common.message")}</label>
                <textarea className="flex min-h-20 w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50 resize-y" placeholder={t("common.enterYourMessage")} />
              </div>
            </div>
          }
          code={`<div class="flex flex-col gap-1">
  <label class="block text-sm font-medium text-gray-900">Message</label>
  <textarea class="flex min-h-20 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 resize-y" placeholder="Enter your message..."></textarea>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.inputGroup")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-medium text-au-foreground">{t("common.period")}</label>
                <div className="inline-flex border border-au-border rounded-md overflow-hidden">
                  <button className="flex items-center justify-center px-4 py-2 text-sm bg-au-primary text-au-primary-foreground hover:bg-au-primary cursor-pointer transition-colors">{t("common.day")}</button>
                  <button className="flex items-center justify-center px-4 py-2 text-sm bg-au-background text-au-foreground border-r border-au-border hover:bg-au-accent cursor-pointer transition-colors">{t("common.week")}</button>
                  <button className="flex items-center justify-center px-4 py-2 text-sm bg-au-background text-au-foreground border-r border-au-border hover:bg-au-accent last:border-r-0 cursor-pointer transition-colors">{t("common.month")}</button>
                </div>
              </div>
            </div>
          }
          code={`<div class="flex flex-col gap-1">
  <label class="block text-sm font-medium text-gray-900">Period</label>
  <div class="inline-flex border border-gray-200 rounded-md overflow-hidden">
    <button class="flex items-center justify-center px-4 py-2 text-sm bg-black text-white hover:bg-black cursor-pointer transition-colors">Day</button>
    <button class="flex items-center justify-center px-4 py-2 text-sm bg-white text-gray-900 border-r border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors">Week</button>
    <button class="flex items-center justify-center px-4 py-2 text-sm bg-white text-gray-900 border-r border-gray-200 hover:bg-gray-100 last:border-r-0 cursor-pointer transition-colors">Month</button>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
