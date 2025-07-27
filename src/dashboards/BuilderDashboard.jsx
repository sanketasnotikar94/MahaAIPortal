import React from 'react';
import { FaTools, FaFileAlt, FaUserTie, FaChartLine, FaPlus, FaUpload, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const BuilderDashboard = () => {
  const stats = [
    { 
      title: 'Active Projects', 
      value: '8', 
      change: '+2 this quarter', 
      icon: FaTools, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Units Available', 
      value: '234', 
      change: '89% pre-sold', 
      icon: FaBuilding, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Agent Partners', 
      value: '45', 
      change: '+8 this month', 
      icon: FaUserTie, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      title: 'Total Sales', 
      value: '₹185 Cr', 
      change: '+22% this year', 
      icon: FaChartLine, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'Skyline Residency',
      location: 'Bandra West, Mumbai',
      type: 'Residential',
      totalUnits: 120,
      availableUnits: 34,
      priceRange: '₹2.5 - 4.2 Cr',
      status: 'Under Construction',
      completion: '2025-12-31',
      approvals: ['Environment Clearance', 'RERA Registration', 'Building Permission'],
      amenities: ['Swimming Pool', 'Gym', 'Garden', 'Parking'],
      documents: 8,
      agentBids: 15,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Metro Commercial Hub',
      location: 'Lower Parel, Mumbai',
      type: 'Commercial',
      totalUnits: 85,
      availableUnits: 62,
      priceRange: '₹1.8 - 8.5 Cr',
      status: 'Ready to Move',
      completion: '2024-03-31',
      approvals: ['Fire Safety', 'Occupancy Certificate', 'RERA Registration'],
      amenities: ['Central AC', 'High Speed Elevators', '24/7 Security', 'Food Court'],
      documents: 12,
      agentBids: 23,
      image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Green Valley Villas',
      location: 'Thane West, Thane',
      type: 'Residential',
      totalUnits: 45,
      availableUnits: 8,
      priceRange: '₹1.2 - 2.8 Cr',
      status: 'Nearing Completion',
      completion: '2025-06-30',
      approvals: ['Environment Clearance', 'RERA Registration'],
      amenities: ['Landscaped Gardens', 'Club House', 'Children Play Area', 'Jogging Track'],
      documents: 10,
      agentBids: 12,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const agentBids = [
    {
      agentName: 'Raj Properties',
      experience: '8 years',
      rating: 4.8,
      commission: '1.5%',
      projectsInterested: ['Skyline Residency', 'Green Valley Villas'],
      marketCoverage: 'Bandra, Andheri, Thane',
      bidAmount: '₹2.5 L',
      status: 'Active',
      submittedDate: '2 days ago'
    },
    {
      agentName: 'Prime Realty Solutions',
      experience: '12 years',
      rating: 4.9,
      commission: '1.8%',
      projectsInterested: ['Metro Commercial Hub'],
      marketCoverage: 'Lower Parel, Worli, BKC',
      bidAmount: '₹4.2 L',
      status: 'Under Review',
      submittedDate: '5 days ago'
    },
    {
      agentName: 'Elite Property Consultants',
      experience: '6 years',
      rating: 4.6,
      commission: '2%',
      projectsInterested: ['Skyline Residency'],
      marketCoverage: 'Bandra, Khar, Santacruz',
      bidAmount: '₹3.1 L',
      status: 'Pending Review',
      submittedDate: '1 week ago'
    },
  ];

  const projectDocuments = [
    { name: 'RERA Certificate', project: 'Skyline Residency', status: 'Approved', uploadDate: '15 Nov 2024' },
    { name: 'Building Plan Approval', project: 'Metro Commercial Hub', status: 'Approved', uploadDate: '10 Nov 2024' },
    { name: 'Environmental Clearance', project: 'Green Valley Villas', status: 'Pending', uploadDate: '08 Nov 2024' },
    { name: 'Fire Safety Certificate', project: 'Skyline Residency', status: 'Under Review', uploadDate: '05 Nov 2024' },
  ];

  const salesPerformance = [
    { project: 'Skyline Residency', unitsSold: 86, totalUnits: 120, revenue: '₹89 Cr' },
    { project: 'Metro Commercial Hub', unitsSold: 23, totalUnits: 85, revenue: '₹45 Cr' },
    { project: 'Green Valley Villas', unitsSold: 37, totalUnits: 45, revenue: '₹51 Cr' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Builder Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your projects and collaborate with agents</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaUpload className="mr-2" />
            Upload Documents
          </button>
          <button className="btn-primary flex items-center">
            <FaPlus className="mr-2" />
            Add New Project
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
                <FaPlus className="text-blue-600 mr-3" />
                <span className="text-blue-900 font-medium text-sm">Add Project</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaUpload className="text-green-600 mr-3" />
                <span className="text-green-900 font-medium text-sm">Upload Floor Plans</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaUserTie className="text-purple-600 mr-3" />
                <span className="text-purple-900 font-medium text-sm">Review Agent Bids</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaChartLine className="text-orange-600 mr-3" />
                <span className="text-orange-900 font-medium text-sm">Sales Report</span>
              </div>
            </button>
          </div>
        </div>

        {/* Sales Performance */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Performance</h3>
          <div className="space-y-4">
            {salesPerformance.map((project, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 text-sm mb-2">{project.project}</h4>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Units Sold</span>
                  <span>{project.unitsSold}/{project.totalUnits}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{width: `${(project.unitsSold / project.totalUnits) * 100}%`}}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Revenue</span>
                  <span className="text-sm font-medium text-green-600">{project.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Status */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-medium text-green-900 text-sm">Ready to Move</h4>
                <p className="text-xs text-green-700">1 project</p>
              </div>
              <span className="text-green-600 font-bold">1</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-medium text-blue-900 text-sm">Under Construction</h4>
                <p className="text-xs text-blue-700">1 project</p>
              </div>
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
              <div>
                <h4 className="font-medium text-orange-900 text-sm">Nearing Completion</h4>
                <p className="text-xs text-orange-700">1 project</p>
              </div>
              <span className="text-orange-600 font-bold">1</span>
            </div>
          </div>
        </div>

        {/* Approval Status */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Status</h3>
          <div className="space-y-3">
            {projectDocuments.slice(0, 4).map((doc, index) => (
              <div key={index} className="flex justify-between items-center p-2 border border-gray-200 rounded">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{doc.name}</h4>
                  <p className="text-xs text-gray-500">{doc.project}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  doc.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  doc.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {doc.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Projects */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Projects</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All Projects
          </button>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{project.name}</h4>
                      <p className="text-gray-600 flex items-center mt-1">
                        <FaMapMarkerAlt className="mr-1" />
                        {project.location}
                      </p>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      project.status === 'Ready to Move' ? 'bg-green-100 text-green-800' :
                      project.status === 'Under Construction' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Units</p>
                      <p className="font-medium">{project.totalUnits}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Available</p>
                      <p className="font-medium text-orange-600">{project.availableUnits}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price Range</p>
                      <p className="font-medium">{project.priceRange}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Expected Completion</p>
                      <p className="font-medium">{project.completion}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Approvals:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.approvals.map((approval, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                          {approval}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.amenities.map((amenity, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="mr-4">{project.documents} documents</span>
                      <span>{project.agentBids} agent bids</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 text-sm border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                        Edit Project
                      </button>
                      <button className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Bids */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Agent Bids</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All Bids
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Agent</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Experience</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Commission</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Projects Interested</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Market Coverage</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Bid Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {agentBids.map((bid, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{bid.agentName}</h4>
                      <p className="text-sm text-gray-600">Submitted {bid.submittedDate}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">{bid.experience}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-sm font-medium">{bid.rating}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium">{bid.commission}</td>
                  <td className="py-3 px-4 text-sm">
                    {bid.projectsInterested.map((project, idx) => (
                      <div key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded mb-1">
                        {project}
                      </div>
                    ))}
                  </td>
                  <td className="py-3 px-4 text-sm">{bid.marketCoverage}</td>
                  <td className="py-3 px-4 text-sm font-medium text-green-600">{bid.bidAmount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      bid.status === 'Active' ? 'bg-green-100 text-green-800' :
                      bid.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {bid.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-700 text-sm">Review</button>
                      <button className="text-green-600 hover:text-green-700 text-sm">Accept</button>
                    </div>
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

export default BuilderDashboard;