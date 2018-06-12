import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
  apiEndpoint: string;
  redditOrigin: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: "https://www.reddit.com/r/",
  redditOrigin: "https://redd.it/"
};
