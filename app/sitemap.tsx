import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://blue-skies-school.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://blue-skies-school.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://blue-skies-school.vercel.app/admission",
      lastModified: new Date(),
    },
    {
      url: "https://blue-skies-school.vercel.app/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://blue-skies-school.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
