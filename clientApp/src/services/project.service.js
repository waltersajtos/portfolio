import {apiConfig} from '../config/api.config';
import axios from "axios";



  export function getProjects () {
    return axios.get(apiConfig.baseURL + '/projects');
  }

  export function getProject(id) {
    return axios.get(apiConfig.baseURL + `/projects/${id}`);
  }
