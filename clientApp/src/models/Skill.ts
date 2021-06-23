import type {Tag} from "./Tag";
import type {Image} from "./Image";

export interface Skill {
  title: string,
  icon: Image,
  tags: Tag[];
}
