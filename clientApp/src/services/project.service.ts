import type {Project} from "../models/Project";
import HttpClient from "./http-client-base";
import {apiConfig} from "../config/api.config";

export default class projectService extends HttpClient{

  public constructor() {
    super(apiConfig.baseURL);
  }

  public getProjects = () => this.instance.get<Project[]>('/projects');

  public getProject = (id: number) => this.instance.get<Project>(`/projects/${id}`);
}
