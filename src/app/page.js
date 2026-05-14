"use client";

import { useState } from "react";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Marquee from "@/components/ui/marquee";
import NumberTicker from "@/components/ui/number-ticker";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Building2,
  Calculator,
  CheckCircle2,
  CircleDollarSign,
  Cloud,
  DatabaseZap,
  Factory,
  FileCheck2,
  Gauge,
  Headset,
  Layers3,
  LineChart,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  Phone,
  ReceiptText,
  RefreshCcw,
  Rocket,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  Warehouse,
  Workflow,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Analytics", href: "#analytics" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const trustSignals = [
  "5-Star Certified Partner",
  "TallyPrime Silver, Gold & Server",
  "GST, e-Invoice & e-Way Bill Ready",
  "Cloud, AMC & Migration Support",
];

const stats = [
  { value: 18, suffix: "+", label: "Years of Tally delivery" },
  { value: 2400, suffix: "+", label: "Businesses supported" },
  { value: 320, suffix: "+", label: "Custom modules built" },
  { value: 99, suffix: "%", label: "AMC response SLA" },
];

const products = [
  {
    name: "TallyPrime Silver",
    description: "Single-user accounting, GST compliance, inventory, payroll, banking, and day-to-day business controls.",
    icon: Calculator,
    accent: "text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300",
    points: ["1 active user", "GST reports", "Invoice automation"],
    prices: {
      perpetual: "₹22,500",
      rental: "₹750/mo",
    },
    tag: "Most Popular for Small Business",
  },
  {
    name: "TallyPrime Gold",
    description: "Multi-user TallyPrime setup for teams that need simultaneous access across finance, sales, and stores.",
    icon: Users,
    accent: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300",
    points: ["Unlimited LAN users", "Role-based access", "Branch workflows"],
    prices: {
      perpetual: "₹67,500",
      rental: "₹2,250/mo",
    },
    tag: "Best for Growing Teams",
  },
  {
    name: "TallyPrime Server",
    description: "High-performance data server for busy teams, concurrent usage, data reliability, and controlled access.",
    icon: DatabaseZap,
    accent: "text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-300",
    points: ["Fast reports", "Data monitoring", "Secure administration"],
    prices: {
      perpetual: "₹2,70,000",
      rental: "Custom",
    },
  },
  {
    name: "Tally on Cloud",
    description: "Secure remote Tally access with managed backups, permissions, uptime monitoring, and device flexibility.",
    icon: Cloud,
    accent: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40 dark:text-cyan-300",
    points: ["Remote access", "Daily backups", "Team permissions"],
    prices: {
      perpetual: "₹6,000/yr",
      rental: "₹600/mo",
    },
  },
  {
    name: "TSS Renewal",
    description: "Keep statutory updates, connected services, banking, and support benefits active without disruption.",
    icon: RefreshCcw,
    accent: "text-rose-600 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-300",
    points: ["Latest releases", "Connected GST", "Priority assistance"],
    prices: {
      perpetual: "₹4,500/yr",
      rental: "N/A",
    },
  },
  {
    name: "Mobile & BI Add-ons",
    description: "Manager-friendly dashboards, approvals, outstanding views, and mobile-ready business summaries.",
    icon: MonitorSmartphone,
    accent: "text-violet-600 bg-violet-50 dark:bg-violet-950/40 dark:text-violet-300",
    points: ["Live KPIs", "Approvals", "Sales visibility"],
    prices: {
      perpetual: "₹1,800/yr",
      rental: "₹180/mo",
    },
  },
];

const services = [
  {
    title: "Implementation & Setup",
    description: "Company creation, chart of accounts, taxes, inventory groups, invoice formats, user roles, and clean go-live.",
    icon: Rocket,
  },
  {
    title: "Custom TDL Modules",
    description: "Invoice layouts, approval flows, barcode labels, industry reports, validation rules, and export formats.",
    icon: Settings,
  },
  {
    title: "GST & Compliance Desk",
    description: "GSTR reports, e-invoice readiness, e-way bill flow, reconciliations, TSS updates, and audit support.",
    icon: FileCheck2,
  },
  {
    title: "Data Migration",
    description: "Move masters, ledgers, stock items, vouchers, and opening balances from legacy tools into TallyPrime.",
    icon: Workflow,
  },
  {
    title: "Training & SOPs",
    description: "Role-wise training for owners, accountants, sales teams, stores, and branch operators with repeatable SOPs.",
    icon: BookOpenCheck,
  },
  {
    title: "AMC & Helpdesk",
    description: "Remote support, quarterly health checks, data backup review, performance tuning, and statutory update guidance.",
    icon: Headset,
  },
];

const chartBars = [
  { label: "Apr", sales: 62, receipts: 46 },
  { label: "May", sales: 78, receipts: 58 },
  { label: "Jun", sales: 71, receipts: 64 },
  { label: "Jul", sales: 90, receipts: 72 },
  { label: "Aug", sales: 84, receipts: 79 },
  { label: "Sep", sales: 96, receipts: 88 },
];

const healthMetrics = [
  { label: "GST filing readiness", value: "98%", color: "bg-emerald-500" },
  { label: "Inventory accuracy", value: "94%", color: "bg-blue-500" },
  { label: "Receivable follow-up", value: "87%", color: "bg-amber-500" },
  { label: "Backup health", value: "100%", color: "bg-cyan-500" },
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "We map your accounting, GST, inventory, branch, payroll, and approval requirements.",
  },
  {
    step: "02",
    title: "Design",
    description: "You get the right TallyPrime edition, deployment model, user roles, and customization plan.",
  },
  {
    step: "03",
    title: "Configure",
    description: "Masters, taxes, invoice formats, security, backup policies, and integrations are set up.",
  },
  {
    step: "04",
    title: "Migrate",
    description: "Opening balances, ledgers, stock items, and vouchers are moved with validation checks.",
  },
  {
    step: "05",
    title: "Train",
    description: "Teams learn practical workflows through guided sessions and quick reference SOPs.",
  },
  {
    step: "06",
    title: "Support",
    description: "AMC, compliance updates, health checks, and helpdesk support keep operations stable.",
  },
];

const industries = [
  { name: "Manufacturing", icon: Factory, detail: "BOM, job work, batches, costing, and dispatch controls." },
  { name: "Retail & POS", icon: ShoppingBag, detail: "Fast billing, barcode labels, stock ageing, and outlet reporting." },
  { name: "Distribution", icon: Warehouse, detail: "Sales routes, credit control, claims, schemes, and inventory visibility." },
  { name: "Services", icon: Building2, detail: "Project billing, receivables, payroll, AMC, and expense tracking." },
  { name: "Trading", icon: PackageCheck, detail: "Order processing, purchase planning, GST, and branch summaries." },
  { name: "Finance Teams", icon: CircleDollarSign, detail: "Banking, budgets, cash flow, MIS, and statutory reconciliation." },
];

const reviews = [
  {
    name: "Arun Mehta",
    role: "Director, precision manufacturing",
    body: "They rebuilt our TallyPrime workflow around production, GST, and dispatch. Month-end reporting is now calm instead of chaotic.",
  },
  {
    name: "Neha Krishnan",
    role: "Finance Head, retail group",
    body: "The cloud setup and custom MIS dashboards gave our owners daily visibility without calling accounts every morning.",
  },
  {
    name: "Ravi Iyer",
    role: "Partner, distribution firm",
    body: "Their support team understands real Tally problems. They fixed our inventory structure and trained the branch staff properly.",
  },
  {
    name: "Sonia Agarwal",
    role: "Founder, services company",
    body: "Clean migration, practical training, and a very polished invoice customization. We were live without business disruption.",
  },
];

const faqs = [
  {
    question: "Can you help us choose between Silver, Gold, Server, and Cloud?",
    answer: "Yes. We review users, locations, data size, concurrent activity, and remote access needs before recommending the edition and deployment model.",
  },
  {
    question: "Do you customize invoices and reports in TallyPrime?",
    answer: "Yes. We build TDL-based invoice formats, MIS reports, approval rules, validation checks, exports, labels, and industry-specific workflows.",
  },
  {
    question: "Can you migrate old accounting data safely?",
    answer: "Yes. We migrate masters, ledgers, stock items, vouchers, balances, and opening inventory with validation checkpoints before go-live.",
  },
  {
    question: "Do you provide support after implementation?",
    answer: "Yes. AMC includes remote helpdesk, statutory update guidance, backup checks, performance review, and team support.",
  },
];

const footerLinks = [
  {
    title: "Products",
    links: ["TallyPrime Silver", "TallyPrime Gold", "TallyPrime Server", "Tally on Cloud"],
  },
  {
    title: "Services",
    links: ["Implementation", "Customization", "Data Migration", "Training"],
  },
  {
    title: "Resources",
    links: ["GST Checklist", "Invoice Formats", "Backup Guide", "AMC Support"],
  },
];

function SectionHeader({ eyebrow, title, description, align = "center" }) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-4",
        align === "center" ? "text-center" : "text-left mx-0"
      )}
    >
      <p className="text-sm font-semibold uppercase text-blue-600 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-neutral-950 dark:text-white md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function BrandMark({ inverse = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 shrink-0 grid-cols-2 gap-1 rounded-lg bg-blue-600 p-2 shadow-lg shadow-blue-600/20">
        <span className="rounded-sm bg-white" />
        <span className="rounded-sm bg-white/55" />
        <span className="col-span-2 rounded-sm bg-white/85" />
      </div>
      <div className="leading-none">
        <div className={cn("text-xl font-extrabold", inverse ? "text-white" : "text-neutral-950 dark:text-white")}>
          TallyPro
        </div>
        <div className="text-xs font-bold uppercase text-blue-600 dark:text-cyan-300">Solutions</div>
      </div>
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-5 top-12 hidden w-32 rounded-lg border border-emerald-200 bg-white p-3 shadow-xl shadow-emerald-900/10 dark:border-emerald-500/20 dark:bg-neutral-950 md:block">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-200">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          GST Ready
        </div>
        <div className="h-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50">
          <div className="h-2 w-full rounded-full bg-emerald-500" />
        </div>
      </div>
      <div className="absolute -right-4 bottom-14 hidden w-36 rounded-lg border border-amber-200 bg-white p-3 shadow-xl shadow-amber-900/10 dark:border-amber-500/20 dark:bg-neutral-950 sm:block">
        <div className="mb-1 text-xs text-neutral-500 dark:text-neutral-400">Receivables</div>
        <div className="text-xl font-bold text-neutral-950 dark:text-white">₹42.8L</div>
        <div className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
          <TrendingUp className="h-3 w-3" />
          18% faster
        </div>
      </div>
      <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-2xl shadow-blue-950/10 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-4 dark:border-neutral-800">
          <div>
            <p className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">Tally command center</p>
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white">Live Business Snapshot</h3>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-xs font-semibold text-neutral-700 dark:border-neutral-800 dark:text-neutral-200">
            <Gauge className="h-4 w-4 text-blue-600" />
            Synced today
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Sales", "₹1.82Cr", "blue"],
            ["Stock", "12,480", "emerald"],
            ["GST Due", "3 days", "amber"],
          ].map(([label, value, tone]) => (
            <div key={label} className="rounded-lg border border-neutral-100 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{label}</p>
              <p className="mt-1 text-xl font-bold text-neutral-950 dark:text-white">{value}</p>
              <div
                className={cn(
                  "mt-3 h-1.5 rounded-lg",
                  tone === "blue" && "bg-blue-500",
                  tone === "emerald" && "bg-emerald-500",
                  tone === "amber" && "bg-amber-500"
                )}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-neutral-100 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-neutral-950 dark:text-white">Sales vs Receipts</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">TallyPrime ledger movement</p>
            </div>
            <LineChart className="h-5 w-5 text-blue-600 dark:text-cyan-300" />
          </div>
          <div className="flex h-44 items-end gap-3">
            {chartBars.map((bar) => (
              <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-36 w-full items-end justify-center gap-1">
                  <div
                    className="w-full max-w-4 rounded-t-sm bg-blue-500"
                    style={{ height: `${bar.sales}%` }}
                  />
                  <div
                    className="w-full max-w-4 rounded-t-sm bg-emerald-400"
                    style={{ height: `${bar.receipts}%` }}
                  />
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-100 p-4 dark:border-neutral-800">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white">
              <ReceiptText className="h-4 w-4 text-amber-500" />
              e-Invoice Queue
            </div>
            <div className="space-y-2 text-sm">
              {["IRN generated", "Pending approval", "Rejected check"].map((item, index) => (
                <div key={item} className="flex items-center justify-between text-neutral-600 dark:text-neutral-300">
                  <span>{item}</span>
                  <span className="font-semibold text-neutral-950 dark:text-white">{[128, 6, 1][index]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-neutral-100 p-4 dark:border-neutral-800">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white">
              <PackageCheck className="h-4 w-4 text-emerald-500" />
              Inventory Alerts
            </div>
            <div className="space-y-2">
              {["Fast moving", "Reorder today", "Slow stock"].map((item, index) => (
                <div key={item}>
                  <div className="mb-1 flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{item}</span>
                    <span>{[76, 42, 18][index]}%</span>
                  </div>
                  <div className="h-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                    <div
                      className={cn(
                        "h-1.5 rounded-lg",
                        index === 0 && "bg-emerald-500",
                        index === 1 && "bg-amber-500",
                        index === 2 && "bg-blue-500"
                      )}
                      style={{ width: `${[76, 42, 18][index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white">Finance Health Dashboard</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">A clear MIS layer over your TallyPrime data.</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
            <BarChart3 className="h-4 w-4" />
            Live graph view
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-900">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">Cash Flow Trend</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-300">+21%</span>
            </div>
            <svg viewBox="0 0 320 170" className="h-44 w-full" role="img" aria-label="Cash flow trend graph">
              <defs>
                <linearGradient id="cashFlow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.36" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path d="M0 130 C45 110 54 78 92 86 C134 95 133 45 177 56 C217 67 219 29 258 40 C289 48 301 30 320 24 L320 170 L0 170 Z" fill="url(#cashFlow)" />
              <path d="M0 130 C45 110 54 78 92 86 C134 95 133 45 177 56 C217 67 219 29 258 40 C289 48 301 30 320 24" fill="none" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
              <path d="M0 146 C42 138 68 118 105 124 C142 131 159 96 196 103 C235 111 258 78 320 82" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 8" />
            </svg>
          </div>
          <div className="rounded-lg bg-neutral-50 p-4 dark:bg-neutral-900">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">Outstanding Ageing</span>
              <span className="text-xs text-amber-600 dark:text-amber-300">₹42.8L</span>
            </div>
            <div className="space-y-4">
              {[
                ["0-30 days", 86, "bg-emerald-500"],
                ["31-60 days", 54, "bg-blue-500"],
                ["61-90 days", 34, "bg-amber-500"],
                ["90+ days", 18, "bg-rose-500"],
              ].map(([label, value, color]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-300">{label}</span>
                    <span className="font-semibold text-neutral-950 dark:text-white">{value}%</span>
                  </div>
                  <div className="h-2 rounded-lg bg-white dark:bg-neutral-800">
                    <div className={cn("h-2 rounded-lg", color)} style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {healthMetrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-semibold text-neutral-950 dark:text-white">{metric.label}</span>
              <span className="text-sm font-bold text-neutral-950 dark:text-white">{metric.value}</span>
            </div>
            <div className="h-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <div className={cn("h-2 rounded-lg", metric.color)} style={{ width: metric.value }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTAButton({ href, children, variant = "primary" }) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700",
        variant === "secondary" &&
          "border border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
      )}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [billingCycle, setBillingCycle] = useState("perpetual"); // "perpetual" or "rental"

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="hidden border-b border-blue-500/20 bg-blue-600 text-white md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm font-medium">
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4" />
              Tally Certified implementation, customization, cloud and AMC support
            </span>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-cyan-100">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>
          </div>
        </div>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#home" aria-label="TallyPro Solutions home">
            <BrandMark />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-300 dark:hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <CTAButton href="#contact">Get Demo</CTAButton>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-screen w-full overflow-hidden pt-36 md:pt-44">
        <AnimatedGridPattern
          numSquares={36}
          maxOpacity={0.12}
          duration={3}
          repeatDelay={1}
          className="[mask-image:linear-gradient(to_bottom,white,transparent)] text-blue-500/30 dark:text-cyan-300/20"
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/40 dark:text-cyan-200">
              <Sparkles className="h-4 w-4" />
              5-Star TallyPrime partner for modern finance teams
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-black leading-[1.08] text-neutral-950 dark:text-white sm:text-5xl lg:text-7xl">
                Professional TallyPrime solutions that make business data move faster.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                Buy, implement, customize, host, train, and support TallyPrime with one expert team. We turn accounting, GST, inventory, and management reporting into a dependable operating system.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-3 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="#products">
                Explore products <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton href="#analytics" variant="secondary">
                View dashboards
              </CTAButton>
            </div>
          </div>
          <HeroDashboard />
        </div>
      </section>

      <section aria-label="Business metrics" className="border-y border-neutral-200 bg-neutral-50 py-10 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-neutral-200 bg-white p-5 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <div className="text-3xl font-black text-blue-600 dark:text-cyan-300 md:text-4xl">
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </div>
              <p className="mt-2 text-sm font-semibold text-neutral-600 dark:text-neutral-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-b border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-950">
        <Marquee pauseOnHover className="[--duration:26s]">
          {["Manufacturing", "Retail", "Distribution", "Services", "Trading", "Finance", "GST", "Inventory", "Payroll", "Cloud"].map((item) => (
            <div key={item} className="mx-3 flex min-w-40 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-3 text-sm font-bold text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
              {item}
            </div>
          ))}
        </Marquee>
      </section>

      <section id="products" className="w-full bg-white px-4 py-24 dark:bg-neutral-950 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeader
            eyebrow="TallyPrime products"
            title="Choose the right Tally stack before you scale."
            description="From a single accountant to multi-branch teams, every setup includes practical guidance, clean configuration, and support that understands real business operations."
          />
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-800 dark:bg-neutral-900">
              <button
                onClick={() => setBillingCycle("perpetual")}
                className={cn(
                  "rounded-full px-6 py-2 text-sm font-bold transition-all",
                  billingCycle === "perpetual"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                )}
              >
                Perpetual License
              </button>
              <button
                onClick={() => setBillingCycle("rental")}
                className={cn(
                  "rounded-full px-6 py-2 text-sm font-bold transition-all",
                  billingCycle === "rental"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                )}
              >
                Rental / Monthly
              </button>
            </div>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {billingCycle === "perpetual" 
                ? "One-time payment for lifetime usage with 1 year TSS." 
                : "Flexible monthly payments for growing businesses."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              const price = product.prices[billingCycle];
              
              if (price === "N/A" && billingCycle === "rental") return null;

              return (
                <article 
                  key={product.name} 
                  className={cn(
                    "group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-950",
                    product.tag && "border-blue-200 dark:border-blue-900/50 ring-1 ring-blue-100 dark:ring-blue-900/20"
                  )}
                >
                  {product.tag && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                      {product.tag}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className={cn("flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner", product.accent)}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-neutral-950 dark:text-white">
                        {price}
                      </div>
                      <div className="text-[10px] font-bold uppercase text-neutral-500 dark:text-neutral-400">
                        {price === "Custom" ? "Contact for Quote" : (billingCycle === "perpetual" ? "+ 18% GST" : "Incl. Support")}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-white">{product.name}</h3>
                    <p className="mt-3 min-h-[84px] text-sm leading-6 text-neutral-600 dark:text-neutral-300">{product.description}</p>
                  </div>

                  <ul className="mt-8 flex-1 space-y-4">
                    {product.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-800">
                    <button className={cn(
                      "w-full rounded-xl py-3 text-sm font-black transition-all",
                      product.tag 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700" 
                        : "bg-neutral-100 text-neutral-950 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                    )}>
                      {price === "Custom" ? "Contact Sales" : "Get Started"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="w-full border-y border-neutral-200 bg-neutral-50 px-4 py-24 dark:border-neutral-800 dark:bg-neutral-900/40 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <SectionHeader
              eyebrow="Complete service desk"
              title="Everything your Tally system needs after the license is purchased."
              description="We keep the implementation practical: account structure, compliance readiness, user adoption, custom reports, and long-term support are all handled together."
              align="left"
            />
            <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white">Production go-live checklist</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Built for fewer errors on launch day.</p>
                </div>
              </div>
              <div className="grid gap-3">
                {["Tax ledgers verified", "User security mapped", "Backup schedule active", "Reports signed off"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                    <span>{item}</span>
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="analytics" className="w-full bg-white px-4 py-24 dark:bg-neutral-950 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeader
            eyebrow="Graphs and MIS"
            title="Turn Tally data into visual decisions owners can read in seconds."
            description="The dashboard concepts below show the type of Tally-related graphs we can surface: sales, receipts, outstanding ageing, GST readiness, inventory movement, and backup health."
          />
          <AnalyticsPanel />
        </div>
      </section>

      <section id="process" className="w-full border-y border-neutral-200 bg-neutral-50 px-4 py-24 dark:border-neutral-800 dark:bg-neutral-900/40 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeader
            eyebrow="Implementation process"
            title="A disciplined six-step path from messy data to reliable operations."
            description="Each phase has a clear owner, validation point, and output so the deployment feels controlled instead of improvised."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {process.map((item) => (
              <article key={item.step} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-3xl font-black text-blue-100 dark:text-blue-900">{item.step}</span>
                  <Layers3 className="h-5 w-5 text-blue-600 dark:text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="w-full bg-white px-4 py-24 dark:bg-neutral-950 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Industry coverage"
            title="Tally workflows tailored to the way your team actually works."
            description="We tune reports, ledgers, inventory logic, voucher controls, and training to your industry instead of handing over a generic installation."
            align="left"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article key={industry.name} className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 dark:bg-neutral-950 dark:text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-neutral-950 dark:text-white">{industry.name}</h3>
                  </div>
                  <p className="leading-7 text-neutral-600 dark:text-neutral-300">{industry.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="w-full border-y border-neutral-200 bg-neutral-950 px-4 py-24 text-white dark:border-neutral-800 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase text-cyan-300">Why TallyPro</p>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              A senior Tally partner for teams that cannot afford accounting downtime.
            </h2>
            <p className="text-lg leading-8 text-neutral-300">
              Our work spans license consulting, statutory setup, TDL customization, cloud access, training, and support. The goal is simple: fewer manual corrections, faster monthly closure, and management reports people can trust.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: LockKeyhole, title: "Secure", text: "Roles, backups, access, and data discipline." },
                { icon: ShieldCheck, title: "Compliant", text: "GST, e-invoice, e-way bill, and TSS readiness." },
                { icon: Gauge, title: "Fast", text: "Cleaner masters, better reports, faster daily work." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                    <Icon className="mb-4 h-6 w-6 text-cyan-300" />
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-300">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Support coverage</h3>
            <p className="mt-2 text-neutral-300">A practical support layer for finance teams, owners, and operators.</p>
            <div className="mt-6 space-y-4">
              {[
                ["Remote helpdesk", "Quick fixes, guidance, and configuration checks."],
                ["Quarterly review", "Data health, backup status, user access, and report review."],
                ["Compliance updates", "TSS renewals, statutory changes, and filing readiness."],
                ["Owner MIS", "Sales, cash flow, stock, outstanding, and branch summaries."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2 font-bold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    {title}
                  </div>
                  <p className="text-sm leading-6 text-neutral-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full overflow-hidden bg-white px-4 py-24 dark:bg-neutral-950 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeader
            eyebrow="Client feedback"
            title="Trusted by teams that live inside Tally every day."
            description="The best Tally project is the one that feels boring after launch: stable data, clear reports, and fewer support escalations."
          />
          <div className="relative">
            <Marquee pauseOnHover className="[--duration:34s]">
              {reviews.map((review) => (
                <figure key={review.name} className="mx-3 w-80 shrink-0 rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
                  <blockquote className="leading-7 text-neutral-700 dark:text-neutral-200">&ldquo;{review.body}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-neutral-950 dark:text-white">{review.name}</div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">{review.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section id="faq" className="w-full border-y border-neutral-200 bg-neutral-50 px-4 py-24 dark:border-neutral-800 dark:bg-neutral-900/40 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Questions"
            title="Clear answers before you make a Tally decision."
            description="If your team has a specific workflow, we can usually validate the best approach during the first consultation."
            align="left"
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
                <h3 className="font-bold text-neutral-950 dark:text-white">{faq.question}</h3>
                <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full bg-white px-4 py-24 dark:bg-neutral-950 sm:px-6">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold uppercase text-blue-600 dark:text-cyan-300">Get a free consultation</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-neutral-950 dark:text-white md:text-5xl">
              Ready to make TallyPrime cleaner, faster, and easier to manage?
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              Share your current setup, team size, pain points, and compliance needs. We will recommend the right product, deployment model, customization plan, and support package.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="tel:+919876543210">
                <Phone className="h-4 w-4" />
                Call now
              </CTAButton>
              <CTAButton href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20TallyPrime%20solutions." variant="secondary">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </CTAButton>
            </div>
          </div>
          <div className="border-t border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950 lg:border-l lg:border-t-0">
            <div className="space-y-5">
              {[
                { icon: Phone, title: "Phone", text: "+91 98765 43210" },
                { icon: Mail, title: "Email", text: "info@tallypartner.com" },
                { icon: MapPin, title: "Location", text: "Serving businesses across India" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.title === "Phone" ? "tel:+919876543210" : item.title === "Email" ? "mailto:info@tallypartner.com" : "#contact"}
                    className="flex items-center gap-4 rounded-lg border border-neutral-200 p-4 transition-colors hover:border-blue-300 dark:border-neutral-800 dark:hover:border-cyan-600/50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">{item.title}</div>
                      <div className="font-bold text-neutral-950 dark:text-white">{item.text}</div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="mt-8 rounded-lg bg-neutral-50 p-5 dark:bg-neutral-900">
              <h3 className="font-bold text-neutral-950 dark:text-white">Consultation checklist</h3>
              <ul className="mt-4 space-y-3 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                {["Number of users and branches", "Current Tally version or accounting tool", "Reports or invoices you want improved", "Cloud or local access preference"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-neutral-800 bg-neutral-950 px-4 py-12 text-neutral-300 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div className="space-y-5">
              <BrandMark inverse />
              <p className="max-w-sm leading-7 text-neutral-400">
                TallyPrime sales, implementation, customization, cloud, analytics, training, and AMC support for growing businesses.
              </p>
            </div>
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#contact" className="text-sm text-neutral-400 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 TallyPro Solutions. All rights reserved.</p>
            <p>TallyPrime is a trademark of its respective owner. Services provided by an independent Tally partner.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
