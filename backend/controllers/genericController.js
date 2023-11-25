class GenericController {
  constructor(model) {
    this.model = model;
  }

  getAll = async (req, res) => {
    try {
      const items = await this.model.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    try {
      const item = await this.model.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Item no encontrado' });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  create = async (req, res) => {
    try {
      const newItem = await this.model.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const updatedItem = await this.model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item no encontrado para actualizar' });
      }
      res.json(updatedItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res) => {
    try {
      const deletedItem = await this.model.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res.status(404).json({ message: 'Item no encontrado para eliminar' });
      }
      res.json({ message: 'Item eliminado exitosamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = GenericController;
