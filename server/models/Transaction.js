import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  transactionType: {
    type: String,
    enum: ['sale', 'rent', 'lease', 'gift', 'inheritance'],
    required: true,
  },
  agreedPrice: {
    type: Number,
    required: true,
  },
  stampDuty: {
    type: Number,
    required: true,
  },
  registrationFee: {
    type: Number,
    required: true,
  },
  agentCommission: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['initiated', 'documents_pending', 'payment_pending', 'registration_pending', 'completed', 'cancelled'],
    default: 'initiated',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'partial', 'completed', 'refunded'],
    default: 'pending',
  },
  escrowAccount: {
    accountNumber: String,
    bankName: String,
    amount: Number,
  },
  legalClearance: {
    status: {
      type: String,
      enum: ['pending', 'cleared', 'issues_found'],
      default: 'pending',
    },
    clearedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    clearanceDate: Date,
    notes: String,
  },
  registrationDetails: {
    registrationNumber: String,
    registrationDate: Date,
    registeredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    saleDeedUrl: String,
  },
  milestones: [{
    title: String,
    description: String,
    status: {
      type: String,
      enum: ['pending', 'in_progress', 'completed'],
      default: 'pending',
    },
    completedAt: Date,
    completedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
  documents: [{
    name: String,
    url: String,
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  }],
}, {
  timestamps: true,
});

export default mongoose.model('Transaction', transactionSchema);