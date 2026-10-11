import { useMemo, useState } from 'react'
import {
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock3,
  DollarSign,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Scissors,
  Settings,
  Star,
  TrendingUp,
  UsersRound,
  X,
} from 'lucide-react'

const appointments = [
  { time: '09:00', period: 'AM', name: 'Marcus Thompson', service: 'Skin Fade + Beard', duration: '45 min', price: '£32', status: 'Confirmed', initials: 'MT', color: 'bg-cyan-100 text-cyan-700' },
  { time: '10:00', period: 'AM', name: 'Oliver Williams', service: 'Classic Scissor Cut', duration: '30 min', price: '£24', status: 'Confirmed', initials: 'OW', color: 'bg-violet-100 text-violet-700' },
  { time: '11:30', period: 'AM', name: 'Ethan Brooks', service: 'Skin Fade', duration: '30 min', price: '£26', status: 'Pending', initials: 'EB', color: 'bg-amber-100 text-amber-700' },
  { time: '01:00', period: 'PM', name: 'Noah Williams', service: 'Beard Trim', duration: '20 min', price: '£18', status: 'Confirmed', initials: 'NW', color: 'bg-rose-100 text-rose-700' },
]

const navigation = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Appointments', icon: CalendarDays, badge: '8' },
  { label: 'Customers', icon: UsersRound },
  { label: 'Services', icon: Scissors },
  { label: 'Reviews', icon: Star, badge: '3' },
]

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Today')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [appointmentsVisible, setAppointmentsVisible] = useState(3)
  const [checkedIn, setCheckedIn] = useState<string[]>([])

  const visibleAppointments = useMemo(() => appointments.slice(0, appointmentsVisible), [appointmentsVisible])

  function toggleCheckIn(name: string) {
    setCheckedIn((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-[#101827] text-white transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-xl bg-[#b9f000] text-[#101827]"><Scissors className="size-5" /></div><span className="font-heading text-xl font-extrabold tracking-tight">naphit<span className="text-[#b9f000]">.</span></span></div>
          <button className="rounded-lg p-2 text-slate-400 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close navigation"><X className="size-5" /></button>
        </div>
        <div className="px-4 py-8"><p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Workspace</p><nav className="flex flex-col gap-1">{navigation.map(({ label, icon: Icon, active, badge }) => <button key={label} className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${active ? 'bg-[#b9f000] font-bold text-[#101827]' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}><span className="flex items-center gap-3"><Icon className="size-[18px]" />{label}</span>{badge && <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${active ? 'bg-[#101827] text-[#b9f000]' : 'bg-white/10 text-slate-300'}`}>{badge}</span>}</button>)}</nav></div>
        <div className="mt-auto border-t border-white/10 p-4"><button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"><Settings className="size-[18px]" />Settings</button><div className="mt-3 flex items-center gap-3 rounded-xl bg-white/5 p-3"><div className="flex size-9 items-center justify-center rounded-full bg-[#d7f36c] text-xs font-bold text-[#101827]">JD</div><div className="min-w-0"><p className="truncate text-sm font-semibold">James Davis</p><p className="truncate text-xs text-slate-400">Barber & Owner</p></div><ChevronDown className="ml-auto size-4 text-slate-400" /></div></div>
      </aside>
      {sidebarOpen && <button className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close navigation overlay" />}

      <main className="lg:pl-64">
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8"><button className="rounded-lg p-2 text-slate-600 lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open navigation"><Menu className="size-5" /></button><div className="hidden lg:block"><p className="text-sm font-medium text-slate-500">Tuesday, 14 October 2025</p><h1 className="font-heading text-lg font-bold">Good morning, James</h1></div><div className="ml-auto flex items-center gap-3"><div className="relative"><button onClick={() => setShowNotifications(!showNotifications)} className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50" aria-label="Notifications"><Bell className="size-[18px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#b9f000] ring-2 ring-white" /></button>{showNotifications && <div className="absolute right-0 top-12 z-20 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"><p className="font-semibold">Notifications</p><p className="mt-3 text-sm text-slate-500">You have 3 new reviews and 1 appointment awaiting confirmation.</p></div>}</div><div className="relative"><button onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-50"><div className="flex size-9 items-center justify-center rounded-full bg-[#d7f36c] text-xs font-bold text-[#101827]">JD</div><ChevronDown className="hidden size-4 text-slate-500 sm:block" /></button>{showProfile && <div className="absolute right-0 top-12 z-20 w-44 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"><button className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50">View profile</button><button className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50">Sign out</button></div>}</div></div></header>
        <div className="mx-auto max-w-[1440px] p-5 sm:p-8"><div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-sm font-semibold text-[#6c8b00]">Tuesday, 14 October</p><h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">Your shop at a glance</h2><p className="mt-2 text-sm text-slate-500">Here&apos;s what&apos;s happening at Naphit today.</p></div><button className="flex items-center justify-center gap-2 rounded-xl bg-[#101827] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"><CalendarDays className="size-4" />Manage calendar</button></div>
          <div className="mb-8 flex gap-1 rounded-xl bg-slate-200/70 p-1 text-sm font-semibold sm:w-fit">{['Today', 'This week', 'This month'].map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-lg px-4 py-2 transition ${activeTab === tab ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}>{tab}</button>)}</div>
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Today&apos;s revenue" value="£248" change="+12.5%" icon={DollarSign} trend="vs. last Tuesday" /><StatCard label="Appointments" value="8" change="+2" icon={CalendarDays} trend="vs. last Tuesday" /><StatCard label="New customers" value="5" change="+25%" icon={UsersRound} trend="this week" /><StatCard label="Average rating" value="4.9" change="+0.2" icon={Star} trend="from 86 reviews" /></section>
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_1fr]"><section className="rounded-2xl border border-slate-200 bg-white"><div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6"><div><h3 className="font-heading text-lg font-bold">Today&apos;s appointments</h3><p className="mt-1 text-sm text-slate-500">{appointments.length} bookings scheduled</p></div><button onClick={() => setAppointmentsVisible(appointmentsVisible === appointments.length ? 3 : appointments.length)} className="flex items-center gap-1 text-sm font-bold text-[#6c8b00] hover:text-slate-950">{appointmentsVisible === appointments.length ? 'Show less' : 'View all'}<ChevronRight className="size-4" /></button></div><div className="divide-y divide-slate-100">{visibleAppointments.map((appointment) => { const isCheckedIn = checkedIn.includes(appointment.name); return <div key={appointment.name} className="flex flex-wrap items-center gap-4 p-5 sm:flex-nowrap sm:px-6"><div className="w-16 shrink-0"><p className="font-heading text-sm font-bold">{appointment.time}</p><p className="text-xs text-slate-400">{appointment.period}</p></div><div className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${appointment.color}`}>{appointment.initials}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{appointment.name}</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><Scissors className="size-3" />{appointment.service} <span className="text-slate-300">•</span> {appointment.duration}</p></div><div className="ml-auto flex items-center gap-3"><div className="text-right"><p className="text-sm font-bold">{appointment.price}</p><span className={`text-[10px] font-bold ${appointment.status === 'Pending' ? 'text-amber-600' : 'text-emerald-600'}`}>{isCheckedIn ? 'Checked in' : appointment.status}</span></div><button onClick={() => toggleCheckIn(appointment.name)} className={`hidden rounded-lg border px-3 py-2 text-xs font-bold transition sm:block ${isCheckedIn ? 'border-[#b9f000] bg-[#f4ffd0] text-[#566e00]' : 'border-slate-200 text-slate-600 hover:border-slate-400'}`}>{isCheckedIn ? 'Checked in' : 'Check in'}</button><button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50" aria-label={`More options for ${appointment.name}`}><MoreHorizontal className="size-4" /></button></div></div> })}</div></section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><div className="flex items-start justify-between"><div><h3 className="font-heading text-lg font-bold">Revenue overview</h3><p className="mt-1 text-sm text-slate-500">This week</p></div><button className="rounded-lg p-1 text-slate-400 hover:bg-slate-50" aria-label="Revenue options"><MoreHorizontal className="size-5" /></button></div><div className="mt-6 flex items-end gap-3"><p className="font-heading text-3xl font-extrabold">£1,284</p><span className="mb-1 flex items-center gap-1 text-xs font-bold text-emerald-600"><TrendingUp className="size-3" />18.4%</span></div><div className="mt-8 flex h-36 items-end gap-2 sm:gap-3">{[42, 58, 46, 72, 61, 88, 68].map((height, index) => <div key={index} className="group flex flex-1 flex-col items-center gap-2"><div className={`w-full rounded-t-md transition group-hover:bg-[#b9f000] ${index === 5 ? 'bg-[#b9f000]' : 'bg-[#dff79a]'}`} style={{ height: `${height}%` }} /><span className="text-[10px] font-semibold text-slate-400">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span></div>)}</div><div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500"><Clock3 className="size-3.5" />Updated just now</div></section></div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2"><section className="rounded-2xl border border-slate-200 bg-[#101827] p-6 text-white"><div className="flex items-start justify-between"><div><p className="text-sm font-semibold text-slate-400">Customer retention</p><h3 className="mt-2 font-heading text-2xl font-extrabold">68.4%</h3><p className="mt-1 text-xs text-[#b9f000]">+6.2% from last month</p></div><div className="flex size-11 items-center justify-center rounded-xl bg-white/10"><UsersRound className="size-5 text-[#b9f000]" /></div></div><div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-[#b9f000]" /></div><div className="mt-3 flex justify-between text-xs text-slate-400"><span>Returning customers</span><span>New customers</span></div></section><section className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex items-start justify-between"><div><p className="text-sm font-semibold text-slate-500">Your performance</p><h3 className="mt-2 font-heading text-2xl font-extrabold">Top rated barber</h3><p className="mt-1 text-xs text-slate-500">You&apos;re in the top 8% in your area.</p></div><div className="flex size-11 items-center justify-center rounded-xl bg-[#f4ffd0]"><Star className="size-5 fill-[#b9f000] text-[#8aa900]" /></div></div><div className="mt-5 flex items-center gap-4"><div className="flex -space-x-2"><div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-cyan-100 text-[10px] font-bold text-cyan-700">MT</div><div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-[10px] font-bold text-violet-700">OW</div><div className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-[10px] font-bold text-amber-700">+83</div></div><p className="text-xs text-slate-500">customers left a review this month</p></div></section></div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ label, value, change, trend, icon: Icon }: { label: string; value: string; change: string; trend: string; icon: typeof DollarSign }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/50"><div className="flex items-center justify-between"><p className="text-sm font-semibold text-slate-500">{label}</p><div className="flex size-10 items-center justify-center rounded-xl bg-[#f4ffd0] text-[#6c8b00]"><Icon className="size-[18px]" /></div></div><div className="mt-5 flex items-baseline gap-2"><p className="font-heading text-2xl font-extrabold">{value}</p><span className="text-xs font-bold text-emerald-600">{change}</span></div><p className="mt-1 text-xs text-slate-400">{trend}</p></div>
}

export default App
