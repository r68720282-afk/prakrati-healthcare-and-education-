import { isDatabaseAvailable } from '../config/db.js';

const mockDataByModel = {
  BlogPost: [
    {
      _id: 'sample-blog-1',
      title: 'Why local wellness circles improve long-term community health',
      category: 'Wellness',
      content: 'Small weekly wellness circles can improve adherence to healthy habits and create peer accountability for preventive care.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
      tags: ['wellness', 'community'],
      createdAt: '2026-01-10T10:00:00.000Z'
    }
  ],
  Career: [
    {
      _id: 'sample-career-1',
      title: 'Community Health Program Coordinator',
      location: 'Jaipur / Hybrid',
      content: 'Coordinate community sessions, partner clinics, and wellness awareness drives with local volunteers.',
      createdAt: '2026-02-08T09:30:00.000Z'
    }
  ],
  Event: [
    {
      _id: 'sample-event-1',
      title: 'Family Wellness Workshop',
      location: 'Community Resource Center',
      date: '2026-06-15T09:00:00.000Z',
      content: 'Practical sessions on hydration, nutrition basics, and stress management for families.'
    }
  ]
};

const forModel = (name) => mockDataByModel[name] || [];

export const crudFactory = (Model) => {
  const modelName = Model.modelName;

  return {
    create: async (req, res, next) => {
      try {
        if (!isDatabaseAvailable()) return res.status(503).json({ message: 'Database unavailable.' });
        const doc = await Model.create(req.body);
        return res.status(201).json(doc);
      } catch (error) {
        return next(error);
      }
    },
    list: async (_req, res, next) => {
      try {
        if (!isDatabaseAvailable()) return res.json(forModel(modelName));
        const docs = await Model.find().sort({ createdAt: -1 }).lean();
        return res.json(docs);
      } catch (error) {
        return next(error);
      }
    },
    get: async (req, res, next) => {
      try {
        if (!isDatabaseAvailable()) {
          const found = forModel(modelName).find((x) => x._id === req.params.id);
          return found ? res.json(found) : res.status(404).json({ message: 'Not found' });
        }
        const doc = await Model.findById(req.params.id).lean();
        return doc ? res.json(doc) : res.status(404).json({ message: 'Not found' });
      } catch (error) {
        return next(error);
      }
    },
    update: async (req, res, next) => {
      try {
        if (!isDatabaseAvailable()) return res.status(503).json({ message: 'Database unavailable.' });
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).lean();
        return doc ? res.json(doc) : res.status(404).json({ message: 'Not found' });
      } catch (error) {
        return next(error);
      }
    },
    remove: async (req, res, next) => {
      try {
        if (!isDatabaseAvailable()) return res.status(503).json({ message: 'Database unavailable.' });
        const doc = await Model.findByIdAndDelete(req.params.id).lean();
        return doc ? res.json({ success: true }) : res.status(404).json({ message: 'Not found' });
      } catch (error) {
        return next(error);
      }
    }
  };
};
