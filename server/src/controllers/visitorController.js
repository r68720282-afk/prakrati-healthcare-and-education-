import Visitor from "../models/Visitor.js";

// Visitor save
export const trackVisitor = async (req, res) => {
  try {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      "unknown";

    const userAgent = req.headers["user-agent"] || "";
    const page = req.body.page || "/";

    const device = /mobile/i.test(userAgent)
      ? "mobile"
      : /tablet/i.test(userAgent)
      ? "tablet"
      : "desktop";

    // Same IP + Browser + Page within 24 hours = don't count again
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const exists = await Visitor.findOne({
      ip,
      userAgent,
      page,
      createdAt: { $gte: yesterday },
    });

    if (!exists) {
      await Visitor.create({
        ip,
        userAgent,
        page,
        device,
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
};

// Visitor statistics
export const getVisitorStats = async (_req, res) => {
  try {
    const totalVisitors = await Visitor.countDocuments();

    const uniqueVisitors = (
      await Visitor.distinct("ip")
    ).length;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayVisitors = await Visitor.countDocuments({
      createdAt: { $gte: today },
    });

    const pageStats = await Visitor.aggregate([
      {
        $group: {
          _id: "$page",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
    ]);

    res.json({
      totalVisitors,
      uniqueVisitors,
      todayVisitors,
      pageStats,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch visitor stats" });
  }
};
