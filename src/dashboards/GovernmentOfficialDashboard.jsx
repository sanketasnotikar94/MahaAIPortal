import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

import {
  FaBuilding,
  FaMoneyBillWave,
  FaFileAlt,
  FaDownload,
  FaMapMarkerAlt
} from 'react-icons/fa';

import { FiTrendingUp } from 'react-icons/fi'; // ✅ Corrected trending icon

const GovernmentOfficialDashboard = () => {
  const revenueData = [
    { month: 'Jan', revenue: 2400000, transactions: 120 },
    { month: 'Feb', revenue: 1398000, transactions: 98 },
    { month: 'Mar', revenue: 9800000, transactions: 230 },
    { month: 'Apr', revenue: 3908000, transactions: 180 },
    { month: 'May', revenue: 4800000, transactions: 210 },
    { month: 'Jun', revenue: 3800000, transactions: 190 },
  ];

  const propertyTypeData = [
    { name: 'Residential', value: 45, color: '#3B82F6' },
    { name: 'Commercial', value: 25, color: '#10B981' },
    { name: 'Agricultural', value: 20, color: '#F59E0B' },
    { name: 'Industrial', value: 10, color: '#EF4444' },
  ];

  const stats = [
    {
      title: 'Total Revenue',
      value: '₹24.8 Cr',
      change: '+12.5%',
      icon: FaMoneyBillWave,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Transactions',
      value: '1,028',
      change: '+8.2%',
      icon: FaFileAlt,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Properties Registered',
      value: '856',
      change: '+15.3%',
      icon: FaBuilding,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Growth Rate',
      value: '12.5%',
      change: '+2.1%',
      icon: FiTrendingUp, // ✅ Changed icon
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Government Official Dashboard</h1>
          <p className="text-gray-600 mt-1">Property transaction analytics and policy indicators</p>
        </div>
        <button className="btn-primary flex items-center">
          <FaDownload className="mr-2" />
          Export Reports
        </button>
      </div>

      <div className="dashboard-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="stat-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm ${stat.color} mt-1`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-full`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Transaction Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="revenue" fill="#3B82F6" />
              <Line yAxisId="right" type="monotone" dataKey="transactions" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Types Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyTypeData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {propertyTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Policy Impact Indicators</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium">Housing Policy 2024</span>
              <span className="text-green-600 font-semibold">+18% Impact</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium">Stamp Duty Reduction</span>
              <span className="text-blue-600 font-semibold">+25% Transactions</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium">Digital Registration</span>
              <span className="text-orange-600 font-semibold">+40% Efficiency</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            Revenue Heatmap
          </h3>
          <div className="space-y-3">
            {[
              { location: 'Mumbai', revenue: '₹8.5 Cr', color: 'bg-red-600', width: '85%' },
              { location: 'Pune', revenue: '₹6.2 Cr', color: 'bg-orange-500', width: '60%' },
              { location: 'Nagpur', revenue: '₹4.1 Cr', color: 'bg-yellow-500', width: '40%' },
              { location: 'Nashik', revenue: '₹3.2 Cr', color: 'bg-green-500', width: '30%' },
            ].map((city, idx) => (
              <div className="flex justify-between items-center" key={idx}>
                <span className="text-sm">{city.location}</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div className={`${city.color} h-2 rounded-full`} style={{ width: city.width }}></div>
                  </div>
                  <span className="text-sm font-medium">{city.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transaction Summary</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Property ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Value</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Stamp Duty</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'MH001234', location: 'Mumbai', type: 'Residential', value: '₹1.2 Cr', stampDuty: '₹6 L', status: 'Completed' },
                { id: 'MH001235', location: 'Pune', type: 'Commercial', value: '₹2.5 Cr', stampDuty: '₹12.5 L', status: 'Pending' },
                { id: 'MH001236', location: 'Nagpur', type: 'Agricultural', value: '₹50 L', stampDuty: '₹2.5 L', status: 'Completed' },
              ].map((transaction, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm">{transaction.id}</td>
                  <td className="py-3 px-4 text-sm">{transaction.location}</td>
                  <td className="py-3 px-4 text-sm">{transaction.type}</td>
                  <td className="py-3 px-4 text-sm font-medium">{transaction.value}</td>
                  <td className="py-3 px-4 text-sm">{transaction.stampDuty}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GovernmentOfficialDashboard;
