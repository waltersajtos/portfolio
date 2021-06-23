import HttpClient from './http-client-base';
import { apiConfig } from '../config/api.config';
import type {Skill} from "../models/Skill";

export default class SkillService extends HttpClient {
  public constructor() {
    super(apiConfig.baseURL);
  }

  public getSkills = () => this.instance.get<Skill[]>('/skills');

  public getSkill = (id: number) => this.instance.get<Skill>(`/skills/${id}`);
}
