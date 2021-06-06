import type {Image} from "./Image";

export interface Project {
  name: String;
  description: String;
  images: Image[];
  githubUrl?: String;
  liveUrl?: String;
}
