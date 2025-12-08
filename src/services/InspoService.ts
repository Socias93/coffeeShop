import axios from "axios";
import { videoData } from "../pages/schemas/VideoSchema";

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

export function getVideo(id: string) {
  return axios.get<InspoVideo>(`${BASE_URL}/${id}`);
}

export function saveVideo(video: videoData) {
  if (video.id) {
    return axios.put<InspoVideo>(`${BASE_URL}/${video.id}`, video);
  } else {
    return axios.post<InspoVideo[]>(BASE_URL, video);
  }
}

export function deleteVideo(id: string) {
  return axios.delete(`${BASE_URL}/${id}`);
}
