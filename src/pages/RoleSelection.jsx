import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaMoneyBillWave, FaHome, FaShoppingCart, FaTag, FaTractor, FaUserTie, FaGavel, FaUniversity, FaTools } from 'react-icons/fa';

const roles = [
  {
    id: 'government_official',
    title: 'Government Official',
    description: 'Access analytics, policy indicators, and transaction summaries',
    icon: FaBuilding,
    color: 'bg-blue-500',
  },
  {
    id: 'revenue_department',
    title: 'Revenue Department',
    description: 'Manage stamp duty, property registration, and revenue forecasting',
    icon: FaMoneyBillWave,
    color: 'bg-green-500',
  },
  {
    id: 'property_owner',
    title: 'Property Owner',
    description: 'Manage your properties, track sales, and hire agents',
    icon: FaHome,
    color: 'bg-purple-500',
  },
  {
    id: 'buyer',
    title: 'Buyer',
    description: 'Search properties, track purchases, and hire agents',
    icon: FaShoppingCart,
    color: 'bg-orange-500',
  },
  {
    id: 'seller',
    title: 'Seller',
    description: 'List properties, AI valuation, and manage buyer interest',
    icon: FaTag,
    color: 'bg-red-500',
  },
  {
    id: 'farmer',
    title: 'Farmer',
    description: 'Access 7/12 extracts, land measurement, and government schemes',
    icon: FaTractor,
    color: 'bg-yellow-500',
  },
  {
    id: 'agent_broker',
    title: 'Agent & Broker',
    description: 'Manage listings, connect buyers and sellers, earn commissions',
    icon: FaUserTie,
    color: 'bg-indigo-500',
  },
  {
    id: 'legal_professional',
    title: 'Legal Professional',
    description: 'Handle property cases, document validation, and legal clearance',
    icon: FaGavel,
    color: 'bg-gray-700',
  },
  {
    id: 'bank_financial',
    title: 'Bank / Financial Institution',
    description: 'Assess mortgage eligibility, validate titles, and process loans',
    icon: FaUniversity,
    color: 'bg-teal-500',
  },
  {
    id: 'builder',
    title: 'Builder',
    description: 'Post project details, upload documents, and hire agents',
    icon: FaTools,
    color: 'bg-pink-500',
  },
];

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (roleId) => {
    navigate(`/register?role=${roleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to MahaProperty AI Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Developed by Leapot Technologies
          </p>
          <p className="text-lg text-gray-700">
            Select your role to get started with the platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <div
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer p-6 border border-gray-200 hover:border-primary-300 transform hover:-translate-y-1"
              >
                <div className={`${role.color} rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 mx-auto`}>
                  <IconComponent className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {role.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Already have an account?</p>
          <button
            onClick={() => navigate('/login')}
            className="btn-primary text-lg px-8 py-3"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;