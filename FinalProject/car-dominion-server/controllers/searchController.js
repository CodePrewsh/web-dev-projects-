const Search = require('../models/Search');

exports.createSearch = async (req, res) => {
  const { make, model, year, issues } = req.body;
  try {
    const newSearch = new Search({
      userId: req.user.userId,
      make,
      model,
      year,
      issues
    });
    await newSearch.save();
    res.status(201).json(newSearch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserSearches = async (req, res) => {
  try {
    const searches = await Search.find({ userId: req.user.userId });
    res.status(200).json(searches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllSearches = async (req, res) => {
  try {
    const searches = await Search.find();
    res.status(200).json(searches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSearch = async (req, res) => {
  const { id } = req.params;
  const { issues } = req.body;
  try {
    const search = await Search.findByIdAndUpdate(id, { issues }, { new: true });
    res.status(200).json(search);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSearch = async (req, res) => {
  const { id } = req.params;
  try {
    await Search.findByIdAndDelete(id);
    res.status(200).json({ message: 'Search deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
