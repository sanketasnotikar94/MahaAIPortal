import React from 'react';
import { FaGavel, FaFileAlt, FaShieldAlt, FaHistory, FaUpload, FaDownload, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

const LegalProfessionalDashboard = () => {
  const stats = [
    { 
      title: 'Active Cases', 
      value: '12', 
      change: '+3 this week', 
      icon: FaGavel, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Documents Reviewed', 
      value: '47', 
      change: '+8 this month', 
      icon: FaFileAlt, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Clearances Issued', 
      value: '23', 
      change: '+5 this week', 
      icon: FaShieldAlt, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    { 
      title: 'Pending Reviews', 
      value: '8', 
      change: '2 urgent', 
      icon: FaExclamationTriangle, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
  ];

  const assignedCases = [
    {
      id: 'LC001',
      propertyId: 'MH001234',
      propertyTitle: '3BHK Apartment, Bandra West',
      client: 'Rajesh Kumar',
      caseType: 'Title Verification',
      priority: 'High',
      status: 'Under Review',
      assignedDate: '15 Nov 2024',
      deadline: '25 Nov 2024',
      documentsCount: 8,
      progress: 60
    },
    {
      id: 'LC002',
      propertyId: 'MH001235',
      propertyTitle: 'Commercial Shop, Lower Parel',
      client: 'Priya Enterprises',
      caseType: 'Legal Clearance',
      priority: 'Medium',
      status: 'Documentation Pending',
      assignedDate: '12 Nov 2024',
      deadline: '30 Nov 2024',
      documentsCount: 5,
      progress: 30
    },
    {
      id: 'LC003',
      propertyId: 'MH001236',
      propertyTitle: '2BHK Flat, Thane West',
      client: 'Amit Patel',
      caseType: 'Due Diligence',
      priority: 'Low',
      status: 'Completed',
      assignedDate: '08 Nov 2024',
      deadline: '20 Nov 2024',
      documentsCount: 12,
      progress: 100
    },
  ];

  const documentValidation = [
    {
      documentType: 'Sale Deed',
      propertyId: 'MH001234',
      status: 'Valid',
      issues: [],
      lastChecked: '2 hours ago'
    },
    {
      documentType: 'Title Certificate',
      propertyId: 'MH001235',
      status: 'Issues Found',
      issues: ['Signature mismatch', 'Missing stamp'],
      lastChecked: '4 hours ago'
    },
    {
      documentType: 'NOC Certificate',
      propertyId: 'MH001236',
      status: 'Pending Review',
      issues: [],
      lastChecked: '1 day ago'
    },
    {
      documentType: 'Survey Settlement',
      propertyId: 'MH001237',
      status: 'Valid',
      issues: [],
      lastChecked: '2 days ago'
    },
  ];

  const legalHistory = [
    {
      propertyId: 'MH001220',
      case: 'Property Dispute Resolution',
      parties: 'Kumar vs Sharma',
      status: 'Resolved',
      resolution: 'Settlement agreement reached',
      date: '10 Nov 2024'
    },
    {
      propertyId: 'MH001218',
      case: 'Title Verification',
      parties: 'Patel Family Trust',
      status: 'Cleared',
      resolution: 'All documents verified',
      date: '08 Nov 2024'
    },
    {
      propertyId: 'MH001215',
      case: 'Encumbrance Check',
      parties: 'ABC Developers',
      status: 'Issues Found',
      resolution: 'Pending lien resolution',
      date: '05 Nov 2024'
    },
  ];

  const validationTools = [
    {
      name: 'Document Authenticity Checker',
      description: 'AI-powered document verification',
      icon: FaShieldAlt,
      status: 'Available'
    },
    {
      name: 'Title Search Database',
      description: 'Comprehensive title history search',
      icon: FaHistory,
      status: 'Available'
    },
    {
      name: 'Legal Precedent Finder',
      description: 'Find similar case precedents',
      icon: FaGavel,
      status: 'Available'
    },
    {
      name: 'Compliance Checker',
      description: 'Check regulatory compliance',
      icon: FaCheckCircle,
      status: 'Available'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Legal Professional Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage property cases and document validation</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaUpload className="mr-2" />
            Upload Clearance
          </button>
          <button className="btn-primary flex items-center">
            <FaDownload className="mr-2" />
            Generate Report
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
        {/* Document Validation Tools */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Validation Tools</h3>
          <div className="space-y-3">
            {validationTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-start p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                >
                  <IconComponent className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{tool.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{tool.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Completion Rate</span>
              <span className="font-medium">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Avg. Case Time</span>
              <span className="font-medium">7.2 days</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Client Satisfaction</span>
              <span className="font-medium">4.9/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{width: '98%'}}></div>
            </div>
          </div>
        </div>

        {/* Urgent Tasks */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaExclamationTriangle className="mr-2 text-red-500" />
            Urgent Tasks
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
              <h4 className="font-medium text-red-900 text-sm">Title Verification Due</h4>
              <p className="text-xs text-red-700 mt-1">MH001234 - Due in 2 days</p>
            </div>
            <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
              <h4 className="font-medium text-orange-900 text-sm">Document Issues Found</h4>
              <p className="text-xs text-orange-700 mt-1">MH001235 - Requires attention</p>
            </div>
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <h4 className="font-medium text-yellow-900 text-sm">Client Follow-up</h4>
              <p className="text-xs text-yellow-700 mt-1">3 clients awaiting updates</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-900">Case LC003 completed</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-900">Document validation completed</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-900">Issues found in title certificate</p>
                <p className="text-xs text-gray-500">6 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="text-sm text-gray-900">New case assigned: LC004</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assigned Property Cases */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Assigned Property Cases</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All Cases
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Case ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Property</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Client</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Case Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Priority</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Progress</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Deadline</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignedCases.map((case_) => (
                <tr key={case_.id} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium">{case_.id}</td>
                  <td className="py-3 px-4">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{case_.propertyTitle}</h4>
                      <p className="text-xs text-gray-600">{case_.propertyId}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">{case_.client}</td>
                  <td className="py-3 px-4 text-sm">{case_.caseType}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      case_.priority === 'High' ? 'bg-red-100 text-red-800' :
                      case_.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {case_.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      case_.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      case_.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {case_.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{width: `${case_.progress}%`}}></div>
                      </div>
                      <span className="text-xs text-gray-600">{case_.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">{case_.deadline}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-700 text-sm">View</button>
                      <button className="text-green-600 hover:text-green-700 text-sm">Update</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document Validation & Legal History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Document Validation</h3>
          <div className="space-y-4">
            {documentValidation.map((doc, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{doc.documentType}</h4>
                    <p className="text-sm text-gray-600">Property: {doc.propertyId}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    doc.status === 'Valid' ? 'bg-green-100 text-green-800' :
                    doc.status === 'Issues Found' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {doc.status}
                  </span>
                </div>
                {doc.issues.length > 0 && (
                  <div className="mb-2">
                    <p className="text-sm font-medium text-red-600 mb-1">Issues Found:</p>
                    {doc.issues.map((issue, idx) => (
                      <p key={idx} className="text-sm text-red-700">• {issue}</p>
                    ))}
                  </div>
                )}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Last checked: {doc.lastChecked}</span>
                  <button className="text-primary-600 hover:text-primary-700">Review</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Legal History</h3>
          <div className="space-y-4">
            {legalHistory.map((history, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{history.case}</h4>
                    <p className="text-sm text-gray-600">Property: {history.propertyId}</p>
                    <p className="text-sm text-gray-600">Parties: {history.parties}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    history.status === 'Resolved' || history.status === 'Cleared' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {history.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{history.resolution}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{history.date}</span>
                  <button className="text-primary-600 hover:text-primary-700">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalProfessionalDashboard;