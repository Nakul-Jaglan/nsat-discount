export default function sitemap() {
  return [
    {
      url: "https://nsat.nakul.click/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

export const revalidate = 60;
