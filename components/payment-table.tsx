"use client"

import { HiCheckCircle, HiClock, HiXMark, HiArrowTopRightOnSquare } from "react-icons/hi2"

const payments = [
  {
    id: 1,
    amount: "500 USDC",
    from: "0xabc...def",
    to: "0x123...456",
    date: "2024-12-28 14:32",
    status: "paid",
    hash: "0x1234567890abcdef",
  },
  {
    id: 2,
    amount: "1,200 USDC",
    from: "0xdef...ghi",
    to: "0x789...012",
    date: "2024-12-28 12:15",
    status: "pending",
    hash: "0xabcdef1234567890",
  },
  {
    id: 3,
    amount: "750 USDC",
    from: "0x345...678",
    to: "0xabc...xyz",
    date: "2024-12-27 18:45",
    status: "paid",
    hash: "0x9876543210fedcba",
  },
  {
    id: 4,
    amount: "300 USDC",
    from: "0x901...234",
    to: "0xdef...567",
    date: "2024-12-27 10:22",
    status: "expired",
    hash: "0x1111111111111111",
  },
  {
    id: 5,
    amount: "2,000 USDC",
    from: "0x567...890",
    to: "0x012...345",
    date: "2024-12-26 16:05",
    status: "paid",
    hash: "0x2222222222222222",
  },
]

const statusConfig = {
  paid: { icon: HiCheckCircle, label: "Paid", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  pending: { icon: HiClock, label: "Pending", color: "text-amber-500", bg: "bg-amber-500/10" },
  expired: { icon: HiXMark, label: "Expired", color: "text-red-500", bg: "bg-red-500/10" },
}

export default function PaymentTable() {
  return (
    <div className="overflow-x-auto">
      <div className="bg-glass rounded-2xl border border-accent/20 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-accent/10 bg-accent/5">
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                From
              </th>
              <th className="hidden md:table-cell px-4 sm:px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                To
              </th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-accent/10">
            {payments.map((payment) => {
              const statusCfg = statusConfig[payment.status as keyof typeof statusConfig]
              const StatusIcon = statusCfg.icon
              return (
                <tr key={payment.id} className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 sm:px-6 py-4 font-semibold text-accent">{payment.amount}</td>
                  <td className="px-4 sm:px-6 py-4 font-mono text-sm text-muted-foreground">{payment.from}</td>
                  <td className="hidden md:table-cell px-4 sm:px-6 py-4 font-mono text-sm text-muted-foreground">
                    {payment.to}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-muted-foreground">{payment.date}</td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusCfg.bg}`}>
                      <StatusIcon className={`w-4 h-4 ${statusCfg.color}`} />
                      <span className={`text-xs font-medium ${statusCfg.color}`}>{statusCfg.label}</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <a
                      href={`https://aptos.world/txn/${payment.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:text-secondary transition-colors"
                    >
                      <HiArrowTopRightOnSquare className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
