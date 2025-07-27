import React, { useState } from 'react';
import { FaSearch, FaFilter, FaHeart, FaEye, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaUserTie, FaGavel, FaChartLine } from 'react-icons/fa';

const BuyerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    propertyType: '',
    priceRange: '',
    location: '',
    bedrooms: ''
  });

  const stats = [
    { 
      title: 'Saved Properties', 
      value: '8', 
      change: '+2 this week', 
      icon: FaHeart, 
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    { 
      title: 'Property Views', 
      value: '42', 
      change: '+12 today', 
      icon: FaEye, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Site Visits', 
      value: '5', 
      change: '2 scheduled', 
      icon: FaMapMarkerAlt, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Active Bids', 
      value: '3', 
      change: '1 pending', 
      icon: FaChartLine, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
  ];

  const properties = [
    {
      id: 1,
      title: '3BHK Luxury Apartment',
      location: 'Bandra West, Mumbai',
      price: '₹2.5 Cr',
      originalPrice: '₹2.8 Cr',
      type: 'Residential',
      bedrooms: 3,
      bathrooms: 2,
      area: '1200 sqft',
      verified: true,
      featured: true,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
      agent: 'Raj Properties',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: '2BHK Modern Flat',
      location: 'Andheri East, Mumbai',
      price: '₹1.8 Cr',
      type: 'Residential',
      bedrooms: 2,
      bathrooms: 2,
      area: '950 sqft',
      verified: true,
      featured: false,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
      agent: 'Prime Realty',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Commercial Office Space',
      location: 'Lower Parel, Mumbai',
      price: '₹3.2 Cr',
      type: 'Commercial',
      area: '2000 sqft',
      verified: false,
      featured: true,
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400',
      agent: 'Corporate Spaces',
      posted: '3 days ago'
    },
  ];

  const recentSearches = [
    '3BHK in Bandra',
    '2BHK under 2 Cr',
    'Commercial in Andheri',
    'Flat in Thane'
  ];

  const trendingLocations = [
    { name: 'Bandra West', avgPrice: '₹2.8 Cr', growth: '+12%' },
    { name: 'Andheri East', avgPrice: '₹1.6 Cr', growth: '+8%' },
    { name: 'Thane West', avgPrice: '₹95 L', growth: '+15%' },
    { name: 'Powai', avgPrice: '₹2.1 Cr', growth: '+6%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Buyer Dashboard</h1>
          <p className="text-gray-600 mt-1">Find your perfect property</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaUserTie className="mr-2" />
            Hire Agent
          </button>
          <button className="btn-primary flex items-center">
            <FaGavel className="mr-2" />
            Hire Legal Expert
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

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties by location, type, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-3">
            <select 
              value={filters.propertyType}
              onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="agricultural">Agricultural</option>
            </select>
            <select 
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Price Range</option>
              <option value="0-50">Under ₹50 L</option>
              <option value="50-100">₹50 L - ₹1 Cr</option>
              <option value="100-200">₹1 Cr - ₹2 Cr</option>
              <option value="200+">Above ₹2 Cr</option>
            </select>
            <button className="btn-primary flex items-center px-6">
              <FaFilter className="mr-2" />
              Filter
            </button>
          </div>
        </div>
        
        {/* Recent Searches */}
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Recent Searches:</p>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(search)}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Property Listings */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Featured Properties</h3>
            <select className="px-3 py-1 text-sm border border-gray-300 rounded">
              <option>Sort by: Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
          
          <div className="space-y-6">
            {properties.map((property) => (
              <div key={property.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    {property.featured && (
                      <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                        Featured
                      </span>
                    )}
                    {property.verified && (
                      <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                        Verified
                      </span>
                    )}
                    <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
                      <FaHeart className="text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{property.title}</h4>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary-600">{property.price}</p>
                        {property.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">{property.originalPrice}</p>
                        )}
                      </div>
                    </div>
                    
                    <p className="flex items-center text-gray-600 mb-3">
                      <FaMapMarkerAlt className="mr-1" />
                      {property.location}
                    </p>
                    
                    <div className="flex items-center space-x-6 mb-4">
                      {property.bedrooms && (
                        <div className="flex items-center text-gray-600">
                          <FaBed className="mr-1" />
                          <span className="text-sm">{property.bedrooms} BHK</span>
                        </div>
                      )}
                      {property.bathrooms && (
                        <div className="flex items-center text-gray-600">
                          <FaBath className="mr-1" />
                          <span className="text-sm">{property.bathrooms} Bath</span>
                        </div>
                      )}
                      <div className="flex items-center text-gray-600">
                        <FaRulerCombined className="mr-1" />
                        <span className="text-sm">{property.area}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <p>By {property.agent}</p>
                        <p>{property.posted}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                          Schedule Visit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Property Valuation Trends */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Valuation Trends</h3>
            <div className="space-y-3">
              {trendingLocations.map((location, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{location.name}</h4>
                    <p className="text-sm text-gray-600">{location.avgPrice}</p>
                  </div>
                  <span className="text-green-600 text-sm font-medium">{location.growth}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <FaUserTie className="text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-blue-900">Hire Agent/Broker</p>
                    <p className="text-sm text-blue-700">Get professional help</p>
                  </div>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <FaGavel className="text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-green-900">Legal Services</p>
                    <p className="text-sm text-green-700">Title search & reports</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Saved Searches */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Searches</h3>
            <div className="space-y-2">
              {[
                '3BHK in Bandra under ₹3 Cr',
                '2BHK in Thane',
                'Commercial in Lower Parel'
              ].map((search, index) => (
                <div key={index} className="flex justify-between items-center p-2 border border-gray-200 rounded">
                  <span className="text-sm text-gray-700">{search}</span>
                  <button className="text-red-500 hover:text-red-700">
                    <FaHeart className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;