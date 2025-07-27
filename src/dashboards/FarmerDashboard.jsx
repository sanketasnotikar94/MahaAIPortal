import React from 'react';
import { FaTractor, FaFileAlt, FaRuler, FaChartLine, FaDownload, FaUpload, FaUserTie, FaBuilding } from 'react-icons/fa';

const FarmerDashboard = () => {
  const stats = [
    { 
      title: 'Total Land', 
      value: '12.5 Acres', 
      change: '+2.5 acres added', 
      icon: FaTractor, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Land Value', 
      value: '₹85 L', 
      change: '+12% this year', 
      icon: FaChartLine, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Documents', 
      value: '8', 
      change: '2 pending verification', 
      icon: FaFileAlt, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      title: 'Schemes Applied', 
      value: '3', 
      change: '1 approved', 
      icon: FaBuilding, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
  ];

  const landParcels = [
    {
      id: 1,
      surveyNumber: '154/2A',
      area: '5.25 Acres',
      location: 'Village Shirur, Taluka Pune',
      type: 'Agricultural',
      valuation: '₹35 L',
      documents: ['7/12 Extract', 'Survey Settlement', 'Mutation Entry'],
      status: 'Verified',
      lastUpdated: '15 days ago'
    },
    {
      id: 2,
      surveyNumber: '278/1B',
      area: '7.25 Acres',
      location: 'Village Baramati, Taluka Baramati',
      type: 'Agricultural',
      valuation: '₹50 L',
      documents: ['7/12 Extract', 'Survey Settlement'],
      status: 'Pending Verification',
      lastUpdated: '3 days ago'
    },
  ];

  const governmentSchemes = [
    {
      name: 'PM-KISAN Scheme',
      description: 'Direct income support to farmers',
      status: 'Approved',
      benefit: '₹6,000/year',
      nextPayment: 'Dec 2024'
    },
    {
      name: 'Soil Health Card Scheme',
      description: 'Free soil testing and recommendations',
      status: 'Applied',
      benefit: 'Free Testing',
      applicationDate: '15 Nov 2024'
    },
    {
      name: 'Maharashtra Land Records Digitization',
      description: 'Digital land records and certificates',
      status: 'Enrolled',
      benefit: 'Digital Records',
      completionDate: 'Completed'
    },
  ];

  const documents = [
    { name: '7/12 Extract - Survey 154/2A', type: 'Revenue Record', status: 'Verified', date: '10 Nov 2024' },
    { name: 'Mutation Entry - Survey 278/1B', type: 'Revenue Record', status: 'Pending', date: '20 Nov 2024' },
    { name: 'Survey Settlement Record', type: 'Land Record', status: 'Verified', date: '05 Nov 2024' },
    { name: 'Khasra Number Certificate', type: 'Ownership', status: 'Verified', date: '08 Nov 2024' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Farmer Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your land records and government schemes</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaUpload className="mr-2" />
            Upload Documents
          </button>
          <button className="btn-primary flex items-center">
            <FaDownload className="mr-2" />
            Get 7/12 Extract
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
        {/* Land Measurement Tool */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaRuler className="mr-2 text-primary-500" />
            Land Measurement
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900">GPS Survey Available</h4>
              <p className="text-sm text-blue-700 mt-1">Request professional land survey</p>
              <button className="mt-2 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Book Survey
              </button>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-900">Digital Mapping</h4>
              <p className="text-sm text-green-700 mt-1">View your land on satellite map</p>
              <button className="mt-2 text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                View Map
              </button>
            </div>
          </div>
        </div>

        {/* Quick Services */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Services</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaFileAlt className="text-green-600 mr-3" />
                <span className="text-green-900 font-medium">7/12 Extract</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaChartLine className="text-blue-600 mr-3" />
                <span className="text-blue-900 font-medium">Land Valuation</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaBuilding className="text-purple-600 mr-3" />
                <span className="text-purple-900 font-medium">Apply for Schemes</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaUserTie className="text-orange-600 mr-3" />
                <span className="text-orange-900 font-medium">Hire Agent</span>
              </div>
            </button>
          </div>
        </div>

        {/* Land Valuation Summary */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Land Valuation Summary</h3>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">₹85 L</p>
              <p className="text-sm text-gray-600">Total Land Value</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Survey 154/2A</span>
                <span className="text-sm font-medium">₹35 L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Survey 278/1B</span>
                <span className="text-sm font-medium">₹50 L</span>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <span className="font-medium">Eligible for Sale:</span> All parcels meet minimum area requirements
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Land Parcels */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Land Parcels</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            Add New Parcel
          </button>
        </div>
        <div className="space-y-4">
          {landParcels.map((parcel) => (
            <div key={parcel.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Survey No. {parcel.surveyNumber}</h4>
                  <p className="text-gray-600">{parcel.location}</p>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full ${
                  parcel.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {parcel.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="font-medium">{parcel.area}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-medium">{parcel.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valuation</p>
                  <p className="font-medium text-green-600">{parcel.valuation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Updated</p>
                  <p className="font-medium">{parcel.lastUpdated}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Available Documents:</p>
                <div className="flex flex-wrap gap-2">
                  {parcel.documents.map((doc, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Download Documents
                </button>
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Update Records
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Government Schemes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Government Schemes</h3>
          <div className="space-y-4">
            {governmentSchemes.map((scheme, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{scheme.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    scheme.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    scheme.status === 'Applied' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {scheme.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{scheme.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary-600">{scheme.benefit}</span>
                  <span className="text-xs text-gray-500">
                    {scheme.nextPayment || scheme.applicationDate || scheme.completionDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Property Documents</h3>
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <div key={index} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{doc.name}</h4>
                  <p className="text-xs text-gray-500">{doc.type} • {doc.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    doc.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {doc.status}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700">
                    <FaDownload className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors">
              <FaUpload className="mx-auto mb-2" />
              <p className="text-sm">Upload New Document</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;