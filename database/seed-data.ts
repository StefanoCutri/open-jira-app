interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Lorem ipsum",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "Lorem ipsum 2",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      description: "Lorem ipsum 3",
      status: "finished",
      createdAt: Date.now() - 30000,
    },
  ],
};
