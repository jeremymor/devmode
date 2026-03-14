import { MetadataRoute } from "next";
import { getAllLevels } from "@/lib/content";
import { tracks } from "@/lib/tracks";

export default function sitemap(): MetadataRoute.Sitemap {
  const levels = getAllLevels();

  const levelUrls = levels.map((level) => ({
    url: `https://learndevmode.xyz/levels/${level.id}`,
    lastModified: new Date(),
  }));

  const trackUrls = tracks.map((track) => ({
    url: `https://learndevmode.xyz/tracks/${track.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://learndevmode.xyz", lastModified: new Date() },
    { url: "https://learndevmode.xyz/tracks", lastModified: new Date() },
    ...trackUrls,
    ...levelUrls,
  ];
}
