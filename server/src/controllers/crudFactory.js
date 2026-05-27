const mockDataByModel = {
  BlogPost: [
    {
      _id: 'mock-blog-1',
      title: 'Healthy Communities, Brighter Futures',
      category: 'Health Awareness',
      content: 'Community-led healthcare and education programs create long-term impact.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
    }
  ],
  Career: [
    {
      _id: 'mock-career-1',
      title: 'Community Program Coordinator',
      location: 'Hybrid',
      category: 'Education & Healthcare',
      content: 'Coordinate camps, wellness sessions, and volunteer activities.'
    }
  ],
  Event: [
    {
      _id: 'mock-event-1',
      title: 'Free Health Awareness Camp',
      location: 'Prakarati Community Center',
      date: new Date().toISOString(),
      content: 'Preventive checkups, wellness guidance, and awareness talks.'
    }
  ],
  Volunteer: [],
  ContactRequest: [],
  Newsletter: []
};

const dataFor = (name) => mockDataByModel[name] || [];

export const crudFactory = (Model) => {
  const modelName = Model.modelName;

  return {
    create: async (_req, res) => res.status(503).json({ message: 'Temporarily unavailable: database disabled.' }),
    list: async (_req, res) => res.json(dataFor(modelName)),
    get: async (req, res) => {
      const found = dataFor(modelName).find((x) => x._id === req.params.id);
      return found ? res.json(found) : res.status(404).json({ message: 'Not found' });
    },
    update: async (_req, res) => res.status(503).json({ message: 'Temporarily unavailable: database disabled.' }),
    remove: async (_req, res) => res.status(503).json({ message: 'Temporarily unavailable: database disabled.' })
  };
};
