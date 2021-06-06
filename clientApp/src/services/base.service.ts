import {apiConfig} from "../config/api.config";
import HttpClient from "./http-client-base";

export default class BaseService extends HttpClient {
  public constructor() {
    super(apiConfig.baseURL);
  }
}
