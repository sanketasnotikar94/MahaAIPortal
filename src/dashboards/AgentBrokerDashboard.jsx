import React from 'react';
import { FaBuilding, FaUsers, FaMoneyBillWave, FaStar, FaPlus, FaCamera, FaChartLine, FaIdCard } from 'react-icons/fa';

const AgentBrokerDashboard = () => {
  const stats = [
    { 
      title: 'Active Listings', 
      value: '23', 
      change: '+5 this week', 
      icon: FaBuilding, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Total Clients', 
      value: '142', 
      change: '+18 this month', 
      icon: FaUsers, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Commission Earned', 
      value: '₹4.2 L', 
      change: '+25% this quarter', 
      icon: FaMoneyBillWave, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      title: 'Rating', 
      value: '4.8/5', 
      change: '32 reviews', 
      icon: FaStar, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
  ];

  const listings = [
    {
      id: 1,
      title: '3BHK Premium Apartment',
      location: 'Bandra West, Mumbai',
      price: '₹2.5 Cr',
      type: 'Residential',
      owner: 'Rajesh Kumar',
      status: 'Active',
      views: 145,
      inquiries: 12,
      commission: '2%',
      expectedEarning: '₹5 L',
      daysListed: 15
    },
    {
      id: 2,
      title: 'Commercial Office Space',
      location: 'Lower Parel, Mumbai',
      price: '₹3.8 Cr',
      type: 'Commercial',
      owner: 'Priya Enterprises',
      status: 'Under Negotiation',
      views: 89,
      inquiries: 8,
      commission: '1.5%',
      expectedEarning: '₹5.7 L',
      daysListed: 8
    },
    {
      id: 3,
      title: '2BHK Modern Flat',
      location: 'Thane West, Thane',
      price: '₹1.2 Cr',
      type: 'Residential',
      owner: 'Amit Patel',
      status: 'Site Visit Scheduled',
      views: 76,
      inquiries: 6,
      commission: '2%',
      expectedEarning: '₹2.4 L',
      daysListed: 22
    },
  ];

  const clients = [
    {
      type: 'buyers',
      list: [
        { name: 'Shreya Sharma', budget: '₹1.5-2 Cr', preferences: '2-3BHK, Bandra/Andheri', status: 'Active', lastContact: '2 hours ago' },
        { name: 'Vikash Gupta', budget: '₹80L-1.2Cr', preferences: '2BHK, Thane/Kalyan', status: 'Site Visit Due', lastContact: '1 day ago' },
        { name: 'Neha Joshi', budget: '₹2-3 Cr', preferences: 'Commercial, Lower Parel', status: 'Financing', lastContact: '3 days ago' },
      ]
    },
    {
      type: 'sellers',
      list: [
        { name: 'Rajesh Kumar', property: '3BHK Bandra West', value: '₹2.5 Cr', status: 'Listed', lastContact: '1 day ago' },
        { name: 'Priya Enterprises', property: 'Office Lower Parel', value: '₹3.8 Cr', status: 'Negotiation', lastContact: '4 hours ago' },
        { name: 'Amit Patel', property: '2BHK Thane West', value: '₹1.2 Cr', status: 'Site Visits', lastContact: '2 days ago' },
      ]
    }
  ];

  const marketTrends = [
    { area: 'Bandra West', avgPrice: '₹28,000/sqft', trend: '+8%', demand: 'High' },
    { area: 'Andheri East', avgPrice: '₹18,000/sqft', trend: '+5%', demand: 'Medium' },
    { area: 'Thane West', avgPrice: '₹9,500/sqft', trend: '+12%', demand: 'High' },
    { area: 'Lower Parel', avgPrice: '₹45,000/sqft', trend: '+3%', demand: 'Medium' },
  ];

  const recentCommissions = [
    { property: '2BHK Flat, Andheri', amount: '₹1.8 L', date: '15 Nov 2024', status: 'Received' },
    { property: 'Shop, Borivali', amount: '₹95,000', date: '08 Nov 2024', status: 'Received' },
    { property: '3BHK Apartment, Bandra', amount: '₹3.2 L', date: '28 Oct 2024', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agent & Broker Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage listings, clients, and track your performance</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaIdCard className="mr-2" />
            KYC Verification
          </button>
          <button className="btn-primary flex items-center">
            <FaPlus className="mr-2" />
            Add Listing
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
                    {stat.change}
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaBuilding className="text-blue-600 mr-3" />
                <span className="text-blue-900 font-medium text-sm">Create Listing</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaCamera className="text-green-600 mr-3" />
                <span className="text-green-900 font-medium text-sm">Property Photos</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaUsers className="text-purple-600 mr-3" />
                <span className="text-purple-900 font-medium text-sm">Find Clients</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaChartLine className="text-orange-600 mr-3" />
                <span className="text-orange-900 font-medium text-sm">Market Analysis</span>
              </div>
            </button>
          </div>
        </div>

        {/* Market Trends */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Trends</h3>
          <div className="space-y-3">
            {marketTrends.map((trend, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{trend.area}</h4>
                    <p className="text-xs text-gray-600">{trend.avgPrice}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      trend.demand === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {trend.demand}
                    </span>
                    <p className="text-xs text-green-600 mt-1">{trend.trend}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Summary */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Commissions</h3>
          <div className="space-y-3">
            {recentCommissions.map((commission, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{commission.property}</h4>
                    <p className="text-xs text-gray-600">{commission.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600 text-sm">{commission.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      commission.status === 'Received' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {commission.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <span className="font-medium">15.8%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: '78%'}}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Client Satisfaction</span>
              <span className="font-medium">4.8/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '96%'}}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Response Time</span>
              <span className="font-medium">1.2 hrs</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{width: '90%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Listings */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Active Listings</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Property</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Owner</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Performance</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Commission</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.id} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{listing.title}</h4>
                      <p className="text-sm text-gray-600">{listing.location}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">{listing.price}</td>
                  <td className="py-3 px-4 text-sm">{listing.owner}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      listing.status === 'Active' ? 'bg-green-100 text-green-800' :
                      listing.status === 'Under Negotiation' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {listing.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div>
                      <p>{listing.views} views</p>
                      <p>{listing.inquiries} inquiries</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div>
                      <p className="font-medium text-green-600">{listing.expectedEarning}</p>
                      <p className="text-gray-500">({listing.commission})</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-700 text-sm">Edit</button>
                      <button className="text-green-600 hover:text-green-700 text-sm">Promote</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Client Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Buyer Clients</h3>
          <div className="space-y-4">
            {clients[0].list.map((buyer, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{buyer.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    buyer.status === 'Active' ? 'bg-green-100 text-green-800' :
                    buyer.status === 'Site Visit Due' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {buyer.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Budget: {buyer.budget}</p>
                <p className="text-sm text-gray-600 mb-2">Preferences: {buyer.preferences}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Last contact: {buyer.lastContact}</span>
                  <button className="text-primary-600 hover:text-primary-700 text-sm">Contact</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Seller Clients</h3>
          <div className="space-y-4">
            {clients[1].list.map((seller, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{seller.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    seller.status === 'Listed' ? 'bg-green-100 text-green-800' :
                    seller.status === 'Negotiation' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {seller.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Property: {seller.property}</p>
                <p className="text-sm text-gray-600 mb-2">Value: {seller.value}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Last contact: {seller.lastContact}</span>
                  <button className="text-primary-600 hover:text-primary-700 text-sm">Contact</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentBrokerDashboard;