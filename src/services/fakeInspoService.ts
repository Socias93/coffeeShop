export type InspoVideo = {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl?: string;
  durationSec?: number;
};

let videos: InspoVideo[] = [
  {
    id: "v1",
    title: "Perfect Milk Foam for Cappuccino",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailUrl: "https://picsum.photos/id/41/600/400",
    durationSec: 180,
  },
  {
    id: "v2",
    title: "Dialing in Espresso",
    videoUrl: "https://www.youtube.com/watch?v=xYz123",
    thumbnailUrl: "https://picsum.photos/id/42/600/400",
    durationSec: 240,
  },
];

export function getVideos(query?: string): InspoVideo[] {
  if (!query) return videos;
  const q = query.toLowerCase();
  return videos.filter((v) => v.title.toLowerCase().includes(q));
}

export function getVideo(id: string): InspoVideo | undefined {
  return videos.find((v) => v.id === id);
}

export function saveVideo(
  video: Partial<InspoVideo> & { title: string; videoUrl: string }
): InspoVideo {
  let v = videos.find((x) => x.id === video.id);
  if (v) {
    v.title = video.title;
    v.videoUrl = video.videoUrl;
    v.thumbnailUrl = video.thumbnailUrl ?? v.thumbnailUrl;
    v.durationSec = video.durationSec ?? v.durationSec;
    return v;
  }
  const newVideo: InspoVideo = {
    id: Date.now().toString(),
    title: video.title,
    videoUrl: video.videoUrl,
    thumbnailUrl: video.thumbnailUrl,
    durationSec: video.durationSec,
  };
  videos = [newVideo, ...videos];
  return newVideo;
}

export function deleteVideo(id: string): InspoVideo | undefined {
  const v = videos.find((x) => x.id === id);
  videos = videos.filter((x) => x.id !== id);
  return v;
}
