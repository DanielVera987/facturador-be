export interface HttpOptions {
  headers?: Record<string, string>;
  body?: any;
  query?: Record<string, string>;
  params?: Record<string, string>;
  timeout?: number;
  responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
}

export interface Http {
  get(url: string, options?: HttpOptions): Promise<any>;
  post(url: string, data: any, options?: HttpOptions): Promise<any>;
  put(url: string, data: any, options?: HttpOptions): Promise<any>;
  delete(url: string, options?: HttpOptions): Promise<any>;
}
