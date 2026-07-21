export const crudFactory = (Model) => ({
  create: async (req, res) =>
    res.status(201).json(await Model.create(req.body)),

  list: async (req, res) =>
    res.json(await Model.find().sort({ createdAt: -1 })),

  get: async (req, res) =>
    res.json(await Model.findById(req.params.id)),

  update: async (req, res) =>
    res.json(
      await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    ),

  remove: async (req, res) => {
    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  },
});
