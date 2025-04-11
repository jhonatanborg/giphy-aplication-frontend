import { defineBoot } from '#q-app/wrappers';
import axios, { type AxiosInstance } from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create(
  {
    baseURL: 'https://api.giphy.com/v1',
    params: {
      api_key: 'PTBNWuPDb5tWGICmht9NZ9g4sBaM7vKO',
    },
  }
);

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
