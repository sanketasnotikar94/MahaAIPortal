import React from 'react';
import { FaPlus, FaEye, FaUsers, FaChartLine, FaCamera, FaFileUpload, FaUserTie, FaMoneyBillWave } from 'react-icons/fa';

const SellerDashboard = () => {
  const stats = [
    { 
      title: 'Active Listings', 
      value: '4', 
      change: '+1 this week', 
      icon: FaEye, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Total Views', 
      value: '156', 
      change: '+23% today', 
      icon: FaUsers, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Buyer Interest', 
      value: '18', 
      change: '6 new inquiries', 
      icon: FaUsers, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      title: 'Avg. Valuation', 
      value: '₹2.3 Cr', 
      change: '+8% from market', 
      icon: FaChartLine, 
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
      aiValuation: '₹2.8 Cr',
      status: 'Active',
      views: 45,
      inquiries: 8,
      photos: 12,
      lastUpdated: '2 days ago',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Commercial Shop Space',
      location: 'Andheri East, Mumbai',
      price: '₹1.8 Cr',
      aiValuation: '₹1.9 Cr',
      status: 'Under Review',
      views: 23,
      inquiries: 3,
      photos: 8,
      lastUpdated: '1 week ago',
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const buyerInterests = [
    {
      name: 'Rajesh Kumar',
      property: '3BHK Premium Apartment',
      interest: 'Site Visit Requested',
      budget: '₹2.4 Cr',
      contact: '+91 98765 43210',
      time: '2 hours ago',
      serious: true
    },
    {
      name: 'Priya Sharma',
      property: '3BHK Premium Apartment',
      interest: 'Price Negotiation',
      budget: '₹2.2 Cr',
      contact: '+91 98765 43211',
      time: '5 hours ago',
      serious: true
    },
    {
      name: 'Amit Patel',
      property: 'Commercial Shop Space',
      interest: 'Document Request',
      budget: '₹1.7 Cr',
      contact: '+91 98765 43212',
      time: '1 day ago',
      serious: false
    },
  ];

  const aiInsights = {
    bestTimeToSell: 'Next 2-3 months',
    marketTrend: 'Rising',
    competitivePrice: '₹2.6 Cr',
    suggestions: [
      'Add more interior photos',
      'Highlight nearby amenities',
      'Consider minor price adjustment',
      'Schedule professional photography'
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your listings and track buyer interest</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaUserTie className="mr-2" />
            Hire Agent
          </button>
          <button className="btn-primary flex items-center">
            <FaPlus className="mr-2" />
            Create Listing
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Valuation Tool */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaChartLine className="mr-2 text-primary-500" />
            AI Market Insights
          </h3>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-900">Market Trend</h4>
              <p className="text-2xl font-bold text-green-600 mt-1">{aiInsights.marketTrend}</p>
              <p className="text-sm text-green-700 mt-1">Best time: {aiInsights.bestTimeToSell}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900">Competitive Price</h4>
              <p className="text-2xl font-bold text-blue-600 mt-1">{aiInsights.competitivePrice}</p>
              <p className="text-sm text-blue-700 mt-1">Based on similar properties</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">AI Suggestions:</h4>
              <div className="space-y-2">
                {aiInsights.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{suggestion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaCamera className="text-blue-600 mr-3" />
                <span className="text-blue-900 font-medium">Upload Photos</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaFileUpload className="text-green-600 mr-3" />
                <span className="text-green-900 font-medium">Upload Documents</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaUserTie className="text-purple-600 mr-3" />
                <span className="text-purple-900 font-medium">Send for Verification</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaMoneyBillWave className="text-orange-600 mr-3" />
                <span className="text-orange-900 font-medium">Track Payments</span>
              </div>
            </button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Listing Performance</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Views</span>
              <span className="font-medium">156</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Inquiry Rate</span>
              <span className="font-medium">11.5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Response Time</span>
              <span className="font-medium">2.3 hrs</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* My Listings */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Listings</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {listings.map((listing) => (
            <div key={listing.id} className="border border-gray-200 rounded-lg p-6">
              <div className="md:flex">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-32 md:h-24 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-3/4 md:ml-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{listing.title}</h4>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      listing.status === 'Active' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{listing.location}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="text-sm">
                      <span className="text-gray-500">Listed Price:</span>
                      <span className="font-medium text-primary-600 ml-1">{listing.price}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">AI Valuation:</span>
                      <span className="font-medium text-green-600 ml-1">{listing.aiValuation}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Views:</span>
                      <span className="font-medium ml-1">{listing.views}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Inquiries:</span>
                      <span className="font-medium ml-1">{listing.inquiries}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Last updated: {listing.lastUpdated}</p>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Edit
                      </button>
                      <button className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Promote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buyer Interest */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Buyer Interest</h3>
        <div className="space-y-4">
          {buyerInterests.map((buyer, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900 flex items-center">
                        {buyer.name}
                        {buyer.serious && (
                          <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Serious Buyer
                          </span>
                        )}
                      </h4>
                      <p className="text-sm text-gray-600">{buyer.property}</p>
                    </div>
                    <span className="text-sm text-gray-500">{buyer.time}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-600">Interest: <span className="font-medium">{buyer.interest}</span></span>
                    <span className="text-gray-600">Budget: <span className="font-medium text-green-600">{buyer.budget}</span></span>
                    <span className="text-gray-600">Contact: <span className="font-medium">{buyer.contact}</span></span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    Respond
                  </button>
                  <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;