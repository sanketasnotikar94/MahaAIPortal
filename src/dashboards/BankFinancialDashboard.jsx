import React from 'react';
import { FaUniversity, FaFileAlt, FaChartLine, FaShieldAlt, FaDownload, FaUpload, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const BankFinancialDashboard = () => {
  const stats = [
    { 
      title: 'Loan Applications', 
      value: '156', 
      change: '+12 this week', 
      icon: FaUniversity, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    { 
      title: 'Approved Loans', 
      value: '89', 
      change: '+8 this week', 
      icon: FaCheckCircle, 
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    { 
      title: 'Under Review', 
      value: '43', 
      change: '15 urgent', 
      icon: FaFileAlt, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    { 
      title: 'Total Portfolio', 
      value: '₹124 Cr', 
      change: '+18% this quarter', 
      icon: FaChartLine, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
  ];

  const eligibleProperties = [
    {
      id: 'MH001234',
      title: '3BHK Apartment, Bandra West',
      price: '₹2.5 Cr',
      loanAmount: '₹2 Cr',
      ltvRatio: '80%',
      riskScore: 'Low',
      applicant: 'Rajesh Kumar',
      status: 'Approved',
      documents: ['Income Proof', 'Property Papers', 'Legal Clearance'],
      valuation: 'Completed',
      lastUpdated: '2 hours ago'
    },
    {
      id: 'MH001235',
      title: 'Commercial Shop, Andheri East',
      price: '₹1.8 Cr',
      loanAmount: '₹1.3 Cr',
      ltvRatio: '72%',
      riskScore: 'Medium',
      applicant: 'Priya Enterprises',
      status: 'Under Review',
      documents: ['Financial Statements', 'Property Papers'],
      valuation: 'Pending',
      lastUpdated: '1 day ago'
    },
    {
      id: 'MH001236',
      title: '2BHK Flat, Thane West',
      price: '₹95 L',
      loanAmount: '₹76 L',
      ltvRatio: '80%',
      riskScore: 'Low',
      applicant: 'Amit Patel',
      status: 'Documentation Pending',
      documents: ['Income Proof', 'Property Papers'],
      valuation: 'Completed',
      lastUpdated: '3 days ago'
    },
  ];

  const loanApplications = [
    {
      applicationId: 'LA2024001',
      applicantName: 'Rajesh Kumar',
      propertyValue: '₹2.5 Cr',
      loanAmount: '₹2 Cr',
      income: '₹12 L/year',
      cibilScore: 785,
      status: 'Approved',
      stage: 'Disbursement',
      riskAssessment: 'Low Risk',
      submissionDate: '15 Nov 2024'
    },
    {
      applicationId: 'LA2024002',
      applicantName: 'Priya Sharma',
      propertyValue: '₹1.8 Cr',
      loanAmount: '₹1.4 Cr',
      income: '₹18 L/year',
      cibilScore: 720,
      status: 'Under Review',
      stage: 'Technical Assessment',
      riskAssessment: 'Medium Risk',
      submissionDate: '18 Nov 2024'
    },
    {
      applicationId: 'LA2024003',
      applicantName: 'Vikash Gupta',
      propertyValue: '₹1.2 Cr',
      loanAmount: '₹96 L',
      income: '₹9 L/year',
      cibilScore: 680,
      status: 'Rejected',
      stage: 'Final Decision',
      riskAssessment: 'High Risk',
      submissionDate: '20 Nov 2024'
    },
  ];

  const riskAssessmentMetrics = {
    portfolioRisk: 'Medium',
    defaultRate: '2.3%',
    avgLTV: '75%',
    topRisks: [
      'Market volatility in commercial properties',
      'Income verification challenges',
      'Legal clearance delays',
      'Property valuation discrepancies'
    ]
  };

  const marketTrends = [
    { area: 'Bandra West', avgPrice: '₹28,000/sqft', trend: '+8%', riskLevel: 'Low' },
    { area: 'Andheri East', avgPrice: '₹18,000/sqft', trend: '+5%', riskLevel: 'Low' },
    { area: 'Thane West', avgPrice: '₹9,500/sqft', trend: '+12%', riskLevel: 'Medium' },
    { area: 'Lower Parel', avgPrice: '₹45,000/sqft', trend: '+3%', riskLevel: 'Low' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bank & Financial Institution Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage loans, assess risks, and validate properties</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <FaUpload className="mr-2" />
            Upload Decision
          </button>
          <button className="btn-primary flex items-center">
            <FaDownload className="mr-2" />
            Download Reports
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
        {/* Risk Assessment Summary */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaShieldAlt className="mr-2 text-red-500" />
            Risk Assessment
          </h3>
          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900">Portfolio Risk</h4>
              <p className="text-2xl font-bold text-yellow-600 mt-1">{riskAssessmentMetrics.portfolioRisk}</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Default Rate</span>
                <span className="text-sm font-medium">{riskAssessmentMetrics.defaultRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg LTV</span>
                <span className="text-sm font-medium">{riskAssessmentMetrics.avgLTV}</span>
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
                <FaFileAlt className="text-blue-600 mr-3" />
                <span className="text-blue-900 font-medium text-sm">Review Applications</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaChartLine className="text-green-600 mr-3" />
                <span className="text-green-900 font-medium text-sm">Valuation Report</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaShieldAlt className="text-purple-600 mr-3" />
                <span className="text-purple-900 font-medium text-sm">Risk Analysis</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="flex items-center">
                <FaDownload className="text-orange-600 mr-3" />
                <span className="text-orange-900 font-medium text-sm">Download Documents</span>
              </div>
            </button>
          </div>
        </div>

        {/* Market Analysis */}
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
                      trend.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                      trend.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {trend.riskLevel} Risk
                    </span>
                    <p className="text-xs text-green-600 mt-1">{trend.trend}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Risk Factors */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FaExclamationTriangle className="mr-2 text-orange-500" />
            Top Risk Factors
          </h3>
          <div className="space-y-3">
            {riskAssessmentMetrics.topRisks.map((risk, index) => (
              <div key={index} className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
                <p className="text-sm text-orange-900">{risk}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Applications */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Loan Applications</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All Applications
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Application ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Applicant</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Property Value</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Loan Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Income</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">CIBIL Score</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Risk</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loanApplications.map((application) => (
                <tr key={application.applicationId} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium">{application.applicationId}</td>
                  <td className="py-3 px-4 text-sm">{application.applicantName}</td>
                  <td className="py-3 px-4 text-sm font-medium">{application.propertyValue}</td>
                  <td className="py-3 px-4 text-sm font-medium text-primary-600">{application.loanAmount}</td>
                  <td className="py-3 px-4 text-sm">{application.income}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`font-medium ${
                      application.cibilScore >= 750 ? 'text-green-600' :
                      application.cibilScore >= 700 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {application.cibilScore}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      application.riskAssessment === 'Low Risk' ? 'bg-green-100 text-green-800' :
                      application.riskAssessment === 'Medium Risk' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {application.riskAssessment}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      application.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      application.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-700 text-sm">Review</button>
                      <button className="text-green-600 hover:text-green-700 text-sm">Approve</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mortgage-Eligible Properties */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Mortgage-Eligible Properties</h3>
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All Properties
          </button>
        </div>
        <div className="space-y-4">
          {eligibleProperties.map((property) => (
            <div key={property.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{property.title}</h4>
                  <p className="text-gray-600">{property.id}</p>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full ${
                  property.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  property.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {property.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Property Value</p>
                  <p className="font-medium">{property.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Loan Amount</p>
                  <p className="font-medium text-primary-600">{property.loanAmount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">LTV Ratio</p>
                  <p className="font-medium">{property.ltvRatio}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Risk Score</p>
                  <p className={`font-medium ${
                    property.riskScore === 'Low' ? 'text-green-600' :
                    property.riskScore === 'Medium' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>{property.riskScore}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valuation</p>
                  <p className={`font-medium ${
                    property.valuation === 'Completed' ? 'text-green-600' : 'text-orange-600'
                  }`}>{property.valuation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Updated</p>
                  <p className="font-medium">{property.lastUpdated}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Available Documents:</p>
                <div className="flex flex-wrap gap-2">
                  {property.documents.map((doc, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Validate Title
                </button>
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  View Valuation
                </button>
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Download Documents
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankFinancialDashboard;