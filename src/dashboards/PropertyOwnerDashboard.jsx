import React from 'react';
import { FaHome, FaPlus, FaEye, FaUserTie, FaGavel, FaChartLine, FaGift } from 'react-icons/fa';

const PropertyOwnerDashboard = () => {
  const stats = [
    { 
      title: 'My Properties', 
      value: '5', 
      change: '+1 this month', 
      icon: FaHome, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Active Listings', 
      value: '3', 
      change: '2 pending approval', 
      icon: FaEye, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Total Views', 
      value: '234', 
      change: '+18% this week', 
      icon: FaChartLine, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      title: 'Inquiries', 
      value: '12', 
      change: '5 new today', 
      icon: FaUserTie, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
  ];

  const properties = [
    {
      id: 1,
      title: '3BHK Apartment in Bandra',
      location: 'Bandra West, Mumbai',
      type: 'Residential',
      status: 'Active',
      price: '₹2.5 Cr',
      views: 45,
      inquiries: 8,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Commercial Shop in Andheri',
      location: 'Andheri East, Mumbai',
      type: 'Commercial',
      status: 'Draft',
      price: '₹1.8 Cr',
      views: 0,
      inquiries: 0,
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: '2BHK Flat in Thane',
      location: 'Thane West, Thane',
      type: 'Residential',
      status: 'Under Offer',
      price: '₹95 L',
      views: 67,
      inquiries: 15,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const aiValuation = {
    estimatedPrice: '₹2.8 Cr',
    confidence: 85,
    factors: ['Location Premium', 'Recent Renovations', 'Market Trends', 'Amenities'],
    lastUpdated: '2 days ago'
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Property Owner Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your properties and track performance</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaGift className="mr-2" />
            Gift/Transfer
          </button>
          <button className="btn-primary flex items-center">
            <FaPlus className="mr-2" />
            Add Property
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
            AI Valuation
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">{aiValuation.estimatedPrice}</p>
              <p className="text-sm text-gray-600">Estimated Market Value</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Confidence</span>
              <div className="flex items-center">
                <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: `${aiValuation.confidence}%`}}></div>
                </div>
                <span className="text-sm font-medium">{aiValuation.confidence}%</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Key Factors:</p>
              <div className="space-y-1">
                {aiValuation.factors.map((factor, index) => (
                  <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                    {factor}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">Last updated: {aiValuation.lastUpdated}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaPlus className="text-blue-600 mr-3" />
                <span className="text-blue-900 font-medium">Start New Sale</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaUserTie className="text-green-600 mr-3" />
                <span className="text-green-900 font-medium">Hire Agent/Broker</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaGavel className="text-purple-600 mr-3" />
                <span className="text-purple-900 font-medium">Hire Legal Expert</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaGift className="text-orange-600 mr-3" />
                <span className="text-orange-900 font-medium">Gift/Transfer Property</span>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Inquiries</h3>
          <div className="space-y-3">
            {[
              { name: 'Rakesh Sharma', property: '3BHK Bandra', time: '2 hours ago', type: 'Call Request' },
              { name: 'Priya Patel', property: '2BHK Thane', time: '5 hours ago', type: 'Site Visit' },
              { name: 'Amit Kumar', property: '3BHK Bandra', time: '1 day ago', type: 'Price Negotiation' },
            ].map((inquiry, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{inquiry.name}</h4>
                    <p className="text-sm text-gray-600">{inquiry.property}</p>
                    <p className="text-xs text-gray-500 mt-1">{inquiry.time}</p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    {inquiry.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Properties List */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Properties</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{property.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    property.status === 'Active' ? 'bg-green-100 text-green-800' :
                    property.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {property.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                <p className="text-lg font-bold text-primary-600 mb-3">{property.price}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{property.views} views</span>
                  <span>{property.inquiries} inquiries</span>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="flex-1 text-sm bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 text-sm border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Share
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

export default PropertyOwnerDashboard;