const orders = [
  {
    id: "#ORD-7291",
    customer: "Elena Martinez",
    product: "Wireless Headphones",
    amount: "$129.99",
    status: "Delivered",
    date: "Mar 5, 2026",
  },
  {
    id: "#ORD-7290",
    customer: "James Okoro",
    product: "Smart Watch Pro",
    amount: "$349.00",
    status: "Processing",
    date: "Mar 5, 2026",
  },
  {
    id: "#ORD-7289",
    customer: "Sofia Chen",
    product: "Yoga Mat Premium",
    amount: "$59.99",
    status: "Shipped",
    date: "Mar 4, 2026",
  },
  {
    id: "#ORD-7288",
    customer: "Lucas Bernard",
    product: "Coffee Maker Deluxe",
    amount: "$199.50",
    status: "Delivered",
    date: "Mar 4, 2026",
  },
  {
    id: "#ORD-7287",
    customer: "Aisha Patel",
    product: "Running Shoes X1",
    amount: "$145.00",
    status: "Cancelled",
    date: "Mar 3, 2026",
  },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-50 text-solea-success",
  Processing: "bg-solea-secondary-50 text-solea-secondary-700",
  Shipped: "bg-blue-50 text-solea-info",
  Cancelled: "bg-red-50 text-solea-error",
};

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-[var(--solea-radius-md)] border border-solea-slate-200 shadow-[var(--solea-shadow-sm)]">
      <div className="p-5 border-b border-solea-slate-200">
        <h3 className="text-base font-semibold text-solea-slate-800">
          Recent Orders
        </h3>
        <p className="text-xs text-solea-slate-400 mt-0.5">
          Latest customer orders and status
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-solea-slate-100">
              <th className="text-left py-3 px-5 text-xs font-semibold text-solea-slate-500 uppercase tracking-wider">
                Order
              </th>
              <th className="text-left py-3 px-5 text-xs font-semibold text-solea-slate-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="text-left py-3 px-5 text-xs font-semibold text-solea-slate-500 uppercase tracking-wider hidden md:table-cell">
                Product
              </th>
              <th className="text-left py-3 px-5 text-xs font-semibold text-solea-slate-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-3 px-5 text-xs font-semibold text-solea-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-5 text-xs font-semibold text-solea-slate-500 uppercase tracking-wider hidden lg:table-cell">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-solea-slate-100 last:border-0 hover:bg-solea-slate-50 transition-colors"
              >
                <td className="py-3 px-5 font-medium text-solea-slate-700">
                  {order.id}
                </td>
                <td className="py-3 px-5 text-solea-slate-600">
                  {order.customer}
                </td>
                <td className="py-3 px-5 text-solea-slate-500 hidden md:table-cell">
                  {order.product}
                </td>
                <td className="py-3 px-5 font-medium text-solea-slate-700">
                  {order.amount}
                </td>
                <td className="py-3 px-5">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-5 text-solea-slate-400 hidden lg:table-cell">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
