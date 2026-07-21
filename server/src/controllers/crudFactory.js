export const crudFactory = (Model) => ({
  create: async (req, res) => {
    try {
      console.log("===== CREATE REQUEST =====");
      console.log("Model:", Model.modelName);
      console.log("Body:", req.body);

      const doc = await Model.create(req.body);

      console.log("Saved:", doc);

      return res.status(201).json(doc);
    } catch (err) {
      console.error("CREATE ERROR:", err);
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  },

  list: async (req, res) =>
    res.json(await Model.find().sort({ createdAt: -1 })),

  get: async (req, res) =>
    res.json(await Model.findById(req.params.id)),

  update: async (req, res) =>
    res.json(await Model.findByIdAndUpdate(req.params.id, req.body, { new: true })),

  remove: async (req, res) => {
    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  },
});
