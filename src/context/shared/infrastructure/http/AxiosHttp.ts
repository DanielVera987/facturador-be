import { Http, HttpOptions } from '../../domain/http/Http';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

class AxiosHttp implements Http {
  constructor(private readonly axios: AxiosInstance) {}

  get(url: string, options?: HttpOptions): Promise<any> {
    return this.axios.get(url, this.buildOptions(options));
  }

  post(url: string, data: any, options?: HttpOptions): Promise<any> {
    return this.axios.post(url, data, this.buildOptions(options));
  }

  put(url: string, data: any, options?: HttpOptions): Promise<any> {
    return this.axios.put(url, data, this.buildOptions(options));
  }

  delete(url: string, options?: HttpOptions): Promise<any> {
    return this.axios.delete(url, this.buildOptions(options));
  }

  private buildOptions(options?: HttpOptions): AxiosRequestConfig {
    return {
      headers: {
        ...this.getHeadersDefault(),
        ...options?.headers,
      },
    };
  }

  private getHeadersDefault(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
}

export default AxiosHttp;
