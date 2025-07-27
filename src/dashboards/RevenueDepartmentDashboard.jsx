import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FaMoneyBillWave, FaFileAlt, FaExclamationTriangle, FaDownload, FaPlus, FaSearch } from 'react-icons/fa';

const RevenueDepartmentDashboard = () => {
  const stampDutyData = [
    { month: 'Jan', collected: 4800000, target: 5000000 },
    { month: 'Feb', collected: 3200000, target: 4500000 },
    { month: 'Mar', collected: 6200000, target: 6000000 },
    { month: 'Apr', collected: 5400000, target: 5500000 },
    { month: 'May', collected: 7100000, target: 7000000 },
    { month: 'Jun', collected: 6800000, target: 6500000 },
  ];

  const stats = [
    { 
      title: 'Stamp Duty Collected', 
      value: '₹33.5 Cr', 
      change: '+15.2%', 
      icon: FaMoneyBillWave, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Registrations Today', 
      value: '124', 
      change: '+8.1%', 
      icon: FaFileAlt, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Pending Reviews', 
      value: '37', 
      change: '-5.2%', 
      icon: FaExclamationTriangle, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    { 
      title: 'Fraud Alerts', 
      value: '3', 
      change: '0%', 
      icon: FaExclamationTriangle, 
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue Department Dashboard</h1>
          <p className="text-gray-600 mt-1">Stamp duty collection and property registrations</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaPlus className="mr-2" />
            Register Sale Deed
          </button>
          <button className="btn-primary flex items-center">
            <FaDownload className="mr-2" />
            Download Audit Log
          </button>
        </div>
      </div>

      {/* Stats Cards */}
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

      {/* Stamp Duty Collection Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Stamp Duty Collection vs Target</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stampDutyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`₹${(value / 1000000).toFixed(1)} Cr`, '']}
            />
            <Bar dataKey="target" fill="#E5E7EB" name="Target" />
            <Bar dataKey="collected" fill="#3B82F6" name="Collected" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Property Registration Log */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Property Registrations</h3>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {[
              { id: 'REG001', property: '2BHK Flat, Bandra', owner: 'Rajesh Kumar', amount: '₹1.2 Cr', duty: '₹6 L', status: 'Completed' },
              { id: 'REG002', property: 'Commercial Shop, Andheri', owner: 'Priya Sharma', amount: '₹85 L', duty: '₹4.25 L', status: 'Processing' },
              { id: 'REG003', property: 'Plot, Thane', owner: 'Amit Patel', amount: '₹65 L', duty: '₹3.25 L', status: 'Pending' },
            ].map((reg, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{reg.id}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        reg.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        reg.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {reg.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{reg.property}</p>
                    <p className="text-sm text-gray-500">Owner: {reg.owner}</p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>Amount: {reg.amount}</span>
                      <span className="font-medium">Duty: {reg.duty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Forecasting */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Forecasting</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900">Next Quarter Projection</h4>
              <p className="text-2xl font-bold text-blue-600 mt-1">₹28.5 Cr</p>
              <p className="text-sm text-blue-700 mt-1">Based on current trends</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-900">Annual Target</h4>
              <p className="text-2xl font-bold text-green-600 mt-1">₹120 Cr</p>
              <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
              <p className="text-sm text-green-700 mt-1">68% achieved (₹81.6 Cr)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fraud Alerts & Document Verification */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaExclamationTriangle className="mr-2 text-red-500" />
            Fraud Alerts
          </h3>
          <div className="space-y-3">
            {[
              { type: 'Duplicate Documents', property: 'Plot in Kalyan', severity: 'High', time: '2 hours ago' },
              { type: 'Price Mismatch', property: 'Flat in Powai', severity: 'Medium', time: '4 hours ago' },
              { type: 'Invalid Signature', property: 'Shop in Borivali', severity: 'High', time: '1 day ago' },
            ].map((alert, index) => (
              <div key={index} className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-red-900">{alert.type}</h4>
                    <p className="text-sm text-red-700">{alert.property}</p>
                    <p className="text-xs text-red-600 mt-1">{alert.time}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    alert.severity === 'High' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {alert.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Documents Upload</h3>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <FaFileAlt className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Drag and drop documents here</p>
              <p className="text-sm text-gray-500 mt-1">or click to browse</p>
              <button className="mt-3 btn-primary">
                Upload Documents
              </button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">Required Documents:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sale Deed</li>
                <li>• Property Cards</li>
                <li>• No Objection Certificate</li>
                <li>• Survey Settlement Record</li>
                <li>• Encumbrance Certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueDepartmentDashboard;