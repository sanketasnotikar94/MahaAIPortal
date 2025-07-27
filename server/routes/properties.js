import express from 'express';
import Property from '../models/Property.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

// Get all properties
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, city, propertyType, minPrice, maxPrice } = req.query;
    
    let query = { status: 'active' };
    
    if (city) query['location.city'] = new RegExp(city, 'i');
    if (propertyType) query.propertyType = propertyType;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseInt(minPrice);
      if (maxPrice) query.price.$lte = parseInt(maxPrice);
    }

    const properties = await Property.find(query)
      .populate('owner', 'firstName lastName email')
      .populate('agent', 'firstName lastName email')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Property.countDocuments(query);

    res.json({
      properties,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Get properties error:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// Create property
router.post('/', authenticateToken, async (req, res) => {
  try {
    const propertyData = {
      ...req.body,
      owner: req.user._id,
    };

    const property = new Property(propertyData);
    await property.save();
    
    const populatedProperty = await Property.findById(property._id)
      .populate('owner', 'firstName lastName email');

    res.status(201).json({
      message: 'Property created successfully',
      property: populatedProperty,
    });
  } catch (error) {
    console.error('Create property error:', error);
    res.status(500).json({ error: 'Failed to create property' });
  }
});

// Get my properties
router.get('/my-properties', authenticateToken, async (req, res) => {
  try {
    const properties = await Property.find({ owner: req.user._id })
      .populate('agent', 'firstName lastName email')
      .sort({ createdAt: -1 });

    res.json(properties);
  } catch (error) {
    console.error('Get my properties error:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// Update property
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const property = await Property.findOne({ _id: req.params.id, owner: req.user._id });
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    Object.assign(property, req.body);
    await property.save();

    const updatedProperty = await Property.findById(property._id)
      .populate('owner', 'firstName lastName email')
      .populate('agent', 'firstName lastName email');

    res.json({
      message: 'Property updated successfully',
      property: updatedProperty,
    });
  } catch (error) {
    console.error('Update property error:', error);
    res.status(500).json({ error: 'Failed to update property' });
  }
});

export default router;