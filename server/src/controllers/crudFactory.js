import { isDatabaseAvailable } from '../config/db.js';

const mockDataByModel = {
  BlogPost: [
    {
      _id: 'mock-blog-1',
      title: 'Healthy Communities, Brighter Futures',
      category: 'Health Awareness',
      content: 'Community-led health education improves outcomes and quality of life.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      metaTitle: 'Community Health Awareness',
      metaDescription: 'Prakarati sample health awareness article.',
      tags: ['health', 'community']
    }
  ],
  Career: [
    {
      _id: 'mock-career-1',
      title: 'Community Health Coordinator',
      location: 'Remote / Field',
      category: 'Healthcare',
      content: 'Support field programs, camps, and awareness drives.'
    }
  ],
  Event: [
    {
      _id: 'mock-event-1',
      title: 'Free Weekend Health Camp',
      location: 'Prakarati Community Center',
      date: new Date().toISOString(),
      content: 'Basic checkups, counseling, and preventive-care education.'
    }
  ]
};

const readOnlyFallback = (name) => mockDataByModel[name] || [];

export const crudFactory = (Model) => {
  const modelName = Model.modelName;

  return {
    create: async (req, res) => {
      if (!isDatabaseAvailable()) {
        return res.status(503).json({ message: 'Database unavailable. Write operations are temporarily disabled.' });
      }
      return res.status(201).json(await Model.create(req.body));
    },
    list: async (_req, res) => {
      if (!isDatabaseAvailable()) {
        return res.json(readOnlyFallback(modelName));
      }
      return res.json(await Model.find().sort({ createdAt: -1 }));
    },
    get: async (req, res) => {
      if (!isDatabaseAvailable()) {
        const record = readOnlyFallback(modelName).find((x) => x._id === req.params.id);
        return record ? res.json(record) : res.status(404).json({ message: 'Not found' });
      }
      return res.json(await Model.findById(req.params.id));
    },
    update: async (req, res) => {
      if (!isDatabaseAvailable()) {
        return res.status(503).json({ message: 'Database unavailable. Write operations are temporarily disabled.' });
      }
      return res.json(await Model.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    },
    remove: async (req, res) => {
      if (!isDatabaseAvailable()) {
        return res.status(503).json({ message: 'Database unavailable. Write operations are temporarily disabled.' });
      }
      await Model.findByIdAndDelete(req.params.id);
      return res.json({ message: 'Deleted' });
    }
  };
};
