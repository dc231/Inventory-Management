const Product = require('../models/Product');

// @desc    Add a new product
// @route   POST /api/products
exports.addProduct = async (req, res) => {
  const { name, type, sku, description, image_url, price, quantity } = req.body;

  try {
    const newProduct = new Product({
      name,
      type,
      sku,
      description,
      image_url,
      price,
      quantity,
    });

    const product = await newProduct.save();
    res.status(201).json({ msg: 'Product added successfully', product_id: product.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update product quantity
// @route   PUT /api/products/:id/quantity
exports.updateQuantity = async (req, res) => {
  const { quantity } = req.body;

  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    product.quantity = quantity;
    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all products
// @route   GET /api/products
exports.getProducts = async (req, res) => {
  try {
    // Simple pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};