import {apiConfig} from '../config/api.config';
import axios from "axios";



export function getSkills () {
  return axios.get(apiConfig.baseURL + '/skills');
}

export function getSkill(id) {
  return axios.get(apiConfig.baseURL + `/skills/${id}`);
}
