import axios from "axios";

export type InspoVideo = {
  id: string;
  title: string;
  videoUrl: string;
  imageUrl?: string;
};

const BASE_URL = "http://localhost:5555/api/inspo";

export function getVideos() {
  return axios.get<InspoVideo[]>(BASE_URL);
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
    v.imageUrl = video.imageUrl ?? v.imageUrl;
    return v;
  }
  const newVideo: InspoVideo = {
    id: Date.now().toString(),
    title: video.title,
    videoUrl: video.videoUrl,
    imageUrl: video.imageUrl,
  };
  videos = [newVideo, ...videos];
  return newVideo;
}

export function deleteVideo(id: string): InspoVideo | undefined {
  const v = videos.find((x) => x.id === id);
  videos = videos.filter((x) => x.id !== id);
  return v;
}
