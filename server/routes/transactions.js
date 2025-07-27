import express from 'express';
import Transaction from '../models/Transaction.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

// Get transactions
router.get('/', authenticateToken, async (req, res) => {
  try {
    let query = {};
    
    // Filter based on user role
    if (req.user.role === 'buyer') {
      query.buyer = req.user._id;
    } else if (req.user.role === 'seller' || req.user.role === 'property_owner') {
      query.seller = req.user._id;
    } else if (req.user.role === 'agent_broker') {
      query.agent = req.user._id;
    }

    const transactions = await Transaction.find(query)
      .populate('property', 'title location price')
      .populate('buyer', 'firstName lastName email')
      .populate('seller', 'firstName lastName email')
      .populate('agent', 'firstName lastName email')
      .sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    console.error('Get transactions error:', error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Create transaction
router.post('/', authenticateToken, async (req, res) => {
  try {
    const transaction = new Transaction({
      ...req.body,
      buyer: req.user._id,
    });

    await transaction.save();
    
    const populatedTransaction = await Transaction.findById(transaction._id)
      .populate('property', 'title location price')
      .populate('buyer', 'firstName lastName email')
      .populate('seller', 'firstName lastName email');

    res.status(201).json({
      message: 'Transaction created successfully',
      transaction: populatedTransaction,
    });
  } catch (error) {
    console.error('Create transaction error:', error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
});

// Update transaction status
router.put('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { status } = req.body;
    
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('property', 'title location price')
     .populate('buyer', 'firstName lastName email')
     .populate('seller', 'firstName lastName email');

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({
      message: 'Transaction status updated successfully',
      transaction,
    });
  } catch (error) {
    console.error('Update transaction error:', error);
    res.status(500).json({ error: 'Failed to update transaction' });
  }
});

export default router;