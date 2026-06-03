"use client";

import { useState } from "react";
import { ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, ChevronsLeftRight } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

type SortDirection = "asc" | "desc" | null;

function InteractiveTable() {
  const { t } = useI18n();

  const usersData = [
    { id: 1, name: t("common.johnDoe"), email: "john@example.com", role: t("common.admin"), status: "Active" as const },
    { id: 2, name: t("common.janeSmith"), email: "jane@example.com", role: t("common.user"), status: "Active" as const },
    { id: 3, name: t("common.bobWilson"), email: "bob@example.com", role: t("common.editor"), status: "Inactive" as const },
    { id: 4, name: t("common.aliceBrown"), email: "alice@example.com", role: t("common.user"), status: "Active" as const },
    { id: 5, name: t("common.charlieDavis"), email: "charlie@example.com", role: t("common.admin"), status: "Active" as const },
    { id: 6, name: t("common.dianaEvans"), email: "diana@example.com", role: t("common.user"), status: "Pending" as const },
    { id: 7, name: t("common.edwardFoster"), email: "edward@example.com", role: t("common.editor"), status: "Active" as const },
    { id: 8, name: t("common.fionaGreen"), email: "fiona@example.com", role: t("common.user"), status: "Inactive" as const },
    { id: 9, name: t("common.georgeHarris"), email: "george@example.com", role: t("common.admin"), status: "Active" as const },
    { id: 10, name: t("common.hannahIrving"), email: "hannah@example.com", role: t("common.user"), status: "Pending" as const },
  ];

  const statusDisplay: Record<string, string> = {
    Active: t("common.active"),
    Inactive: t("common.inactive"),
    Pending: t("common.pending"),
  };

  const [data] = useState(usersData);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortColumn(null);
        setSortDirection(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;

    const aVal = a[sortColumn as keyof typeof a];
    const bVal = b[sortColumn as keyof typeof b];

    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleRowSelection = (id: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map(row => row.id)));
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) return <ArrowUpDown className="w-4 h-4 opacity-30" />;
    return sortDirection === "asc"
      ? <ArrowUp className="w-4 h-4 text-au-foreground" />
      : <ArrowDown className="w-4 h-4 text-au-foreground" />;
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active": return "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-au-primary text-au-primary-foreground";
      case "Inactive": return "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-au-border text-au-foreground";
      case "Pending": return "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-au-secondary text-au-foreground";
      default: return "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-au-border text-au-foreground";
    }
  };

  return (
    <div className="space-y-4 w-full">
      <div className="overflow-x-auto border border-au-border rounded-lg bg-au-background">
        <table className="w-full caption-bottom text-sm">
          <thead className="border-b border-au-border bg-au-accent">
            <tr>
              <th className="h-12 px-4 text-left align-middle font-medium text-au-muted-foreground w-10">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-au-border text-au-foreground focus:ring-au-ring"
                  checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                  ref={(el) => {
                    if (el) el.indeterminate = selectedRows.size > 0 && selectedRows.size < paginatedData.length;
                  }}
                  onChange={toggleSelectAll}
                />
              </th>
              <th
                className="h-12 px-4 text-left align-middle font-medium text-au-muted-foreground cursor-pointer hover:bg-au-accent transition-colors"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  {t("common.name")} {getSortIcon("name")}
                </div>
              </th>
              <th
                className="h-12 px-4 text-left align-middle font-medium text-au-muted-foreground cursor-pointer hover:bg-au-accent transition-colors"
                onClick={() => handleSort("email")}
              >
                <div className="flex items-center gap-1">
                  {t("common.email")} {getSortIcon("email")}
                </div>
              </th>
              <th
                className="h-12 px-4 text-left align-middle font-medium text-au-muted-foreground cursor-pointer hover:bg-au-accent transition-colors"
                onClick={() => handleSort("role")}
              >
                <div className="flex items-center gap-1">
                  {t("common.role")} {getSortIcon("role")}
                </div>
              </th>
              <th
                className="h-12 px-4 text-left align-middle font-medium text-au-muted-foreground cursor-pointer hover:bg-au-accent transition-colors"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-1">
                  {t("common.status")} {getSortIcon("status")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {paginatedData.map((user) => (
              <tr
                key={user.id}
                className={`border-b border-au-border transition-colors hover:bg-au-accent ${selectedRows.has(user.id) ? "bg-au-secondary" : ""}`}
              >
                <td className="p-4 align-middle w-10">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-au-border text-au-foreground focus:ring-au-ring"
                    checked={selectedRows.has(user.id)}
                    onChange={() => toggleRowSelection(user.id)}
                  />
                </td>
                <td className="p-4 align-middle font-medium">{user.name}</td>
                <td className="p-4 align-middle">{user.email}</td>
                <td className="p-4 align-middle">{user.role}</td>
                <td className="p-4 align-middle">
                  <span className={getStatusClass(user.status)}>
                    {statusDisplay[user.status] || user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between p-3 border border-au-border rounded-lg bg-au-accent">
        <div className="flex items-center gap-4">
          <span className="text-sm text-au-muted-foreground">
            {selectedRows.size} of {data.length} selected
          </span>
          {selectedRows.size > 0 && (
            <button
              className="text-sm text-au-foreground hover:underline"
              onClick={() => setSelectedRows(new Set())}
            >
              {t("common.clearSelection")}
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-au-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-1">
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-au-border bg-au-background text-au-foreground hover:bg-au-accent h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeftRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-au-border bg-au-background text-au-foreground hover:bg-au-accent h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-au-border bg-au-background text-au-foreground hover:bg-au-accent h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-au-border bg-au-background text-au-foreground hover:bg-au-accent h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsLeftRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TablePage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("table.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("table.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock preview={<InteractiveTable />} code={`<div class="overflow-x-auto border border-gray-200 rounded-lg bg-white">
  <table class="w-full caption-bottom text-sm">
    <thead class="border-b border-gray-200 bg-gray-50">
      <tr>
        <th class="h-12 px-4 text-left align-middle font-medium text-gray-500">Name</th>
        <th class="h-12 px-4 text-left align-middle font-medium text-gray-500">Email</th>
        <th class="h-12 px-4 text-left align-middle font-medium text-gray-500">Role</th>
      </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
      <tr class="border-b border-gray-200 transition-colors hover:bg-gray-50">
        <td class="p-4 align-middle">John Doe</td>
        <td class="p-4 align-middle">john@example.com</td>
        <td class="p-4 align-middle">Admin</td>
      </tr>
    </tbody>
  </table>
</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.features")}</h2>
        <ul className="list-disc list-inside space-y-2 text-au-muted-foreground">
          <li>{t("table.columnSorting")}</li>
          <li>{t("table.pagination")}</li>
          <li>{t("table.rowSelection")}</li>
          <li>{t("table.selectAll")}</li>
          <li>{t("table.visualFeedback")}</li>
        </ul>
      </section>
    </div>
  );
}
