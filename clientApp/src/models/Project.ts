import type { Image } from './Image';
import type {Tag} from "./Tag";

export interface Project {
	name: String;
	description: String;
	images: Image[];
	tags: Tag[];
	githubUrl?: String;
	liveUrl?: String;
}
