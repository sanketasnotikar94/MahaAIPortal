import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  FaTachometerAlt, 
  FaBuilding, 
  FaMoneyBillWave, 
  FaHome, 
  FaShoppingCart,
  FaTag,
  FaTractor,
  FaUserTie,
  FaGavel,
  FaUniversity,
  FaTools,
  FaChartBar,
  FaUsers,
  FaFileAlt,
  FaCog
} from 'react-icons/fa';

const Sidebar = () => {
  const { user } = useAuth();

  const getMenuItems = (role) => {
    const commonItems = [
      { icon: FaTachometerAlt, label: 'Dashboard', active: true },
      { icon: FaFileAlt, label: 'Documents' },
      { icon: FaCog, label: 'Settings' },
    ];

    const roleSpecificItems = {
      government_official: [
        { icon: FaChartBar, label: 'Analytics' },
        { icon: FaBuilding, label: 'Revenue Heatmaps' },
        { icon: FaFileAlt, label: 'Reports' },
      ],
      revenue_department: [
        { icon: FaMoneyBillWave, label: 'Stamp Duty' },
        { icon: FaFileAlt, label: 'Registrations' },
        { icon: FaChartBar, label: 'Revenue Forecast' },
      ],
      property_owner: [
        { icon: FaHome, label: 'My Properties' },
        { icon: FaTag, label: 'Listings' },
        { icon: FaUserTie, label: 'Hire Agents' },
      ],
      buyer: [
        { icon: FaShoppingCart, label: 'Search Properties' },
        { icon: FaFileAlt, label: 'My Purchases' },
        { icon: FaUserTie, label: 'Hire Services' },
      ],
      seller: [
        { icon: FaTag, label: 'My Listings' },
        { icon: FaChartBar, label: 'AI Valuation' },
        { icon: FaUsers, label: 'Buyer Interest' },
      ],
      farmer: [
        { icon: FaFileAlt, label: '7/12 Extract' },
        { icon: FaTractor, label: 'Land Measurement' },
        { icon: FaBuilding, label: 'Schemes' },
      ],
      agent_broker: [
        { icon: FaBuilding, label: 'Listings' },
        { icon: FaUsers, label: 'Clients' },
        { icon: FaMoneyBillWave, label: 'Commissions' },
      ],
      legal_professional: [
        { icon: FaGavel, label: 'Cases' },
        { icon: FaFileAlt, label: 'Documents' },
        { icon: FaChartBar, label: 'Legal History' },
      ],
      bank_financial: [
        { icon: FaUniversity, label: 'Loan Applications' },
        { icon: FaFileAlt, label: 'Eligible Properties' },
        { icon: FaChartBar, label: 'Risk Assessment' },
      ],
      builder: [
        { icon: FaTools, label: 'Projects' },
        { icon: FaFileAlt, label: 'Documents' },
        { icon: FaUserTie, label: 'Hire Agents' },
      ],
    };

    return [
      ...commonItems.slice(0, 1), // Dashboard
      ...(roleSpecificItems[role] || []),
      ...commonItems.slice(1), // Documents, Settings
    ];
  };

  const menuItems = getMenuItems(user?.role);

  return (
    <div className="w-64 bg-white h-full shadow-sm border-r border-gray-200">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className={`flex items-center w-full px-3 py-2 text-left rounded-lg transition-colors ${
                  item.active
                    ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <IconComponent className="mr-3 h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;