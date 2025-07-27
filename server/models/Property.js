import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
    enum: ['residential', 'commercial', 'agricultural', 'industrial'],
  },
  subType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  areaUnit: {
    type: String,
    enum: ['sqft', 'sqm', 'acre', 'hectare'],
    default: 'sqft',
  },
  location: {
    address: String,
    city: String,
    state: String,
    pincode: String,
    coordinates: {
      latitude: Number,
      longitude: Number,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  images: [{
    url: String,
    caption: String,
  }],
  documents: [{
    name: String,
    url: String,
    type: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  }],
  amenities: [String],
  status: {
    type: String,
    enum: ['draft', 'active', 'sold', 'rented', 'inactive'],
    default: 'draft',
  },
  verification: {
    status: {
      type: String,
      enum: ['pending', 'verified', 'rejected'],
      default: 'pending',
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    verifiedAt: Date,
    notes: String,
  },
  aiValuation: {
    estimatedPrice: Number,
    confidence: Number,
    factors: [String],
    lastUpdated: Date,
  },
  views: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Index for location-based searches
propertySchema.index({ 'location.city': 1, 'location.state': 1 });
propertySchema.index({ propertyType: 1, status: 1 });
propertySchema.index({ price: 1 });

export default mongoose.model('Property', propertySchema);