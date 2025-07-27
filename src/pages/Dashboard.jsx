import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Dashboard Components
import GovernmentOfficialDashboard from '../dashboards/GovernmentOfficialDashboard';
import RevenueDepartmentDashboard from '../dashboards/RevenueDepartmentDashboard';
import PropertyOwnerDashboard from '../dashboards/PropertyOwnerDashboard';
import BuyerDashboard from '../dashboards/BuyerDashboard';
import SellerDashboard from '../dashboards/SellerDashboard';
import FarmerDashboard from '../dashboards/FarmerDashboard';
import AgentBrokerDashboard from '../dashboards/AgentBrokerDashboard';
import LegalProfessionalDashboard from '../dashboards/LegalProfessionalDashboard';
import BankFinancialDashboard from '../dashboards/BankFinancialDashboard';
import BuilderDashboard from '../dashboards/BuilderDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'government_official':
        return <GovernmentOfficialDashboard />;
      case 'revenue_department':
        return <RevenueDepartmentDashboard />;
      case 'property_owner':
        return <PropertyOwnerDashboard />;
      case 'buyer':
        return <BuyerDashboard />;
      case 'seller':
        return <SellerDashboard />;
      case 'farmer':
        return <FarmerDashboard />;
      case 'agent_broker':
        return <AgentBrokerDashboard />;
      case 'legal_professional':
        return <LegalProfessionalDashboard />;
      case 'bank_financial':
        return <BankFinancialDashboard />;
      case 'builder':
        return <BuilderDashboard />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard Not Available</h2>
            <p className="text-gray-600 mt-2">Please contact support for assistance.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;