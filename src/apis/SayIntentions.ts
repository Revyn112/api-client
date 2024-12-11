import { NXApi } from '../index';
import { get, post } from '../utils';

export declare class SayIntentionsResponse {
    response: string;
}

export declare class SayIntentionsValidateResponse {
    isValid: boolean;
    flightId: string;
  }

export class SayIntentions {
    public static sendRequest(body: any): Promise<SayIntentionsResponse> {
        return post<SayIntentionsResponse>(new URL('/api/v1/sayintentions', NXApi.url), body);
    }

    public static validateKey(
        key: string
      ): Promise<SayIntentionsValidateResponse> {
        const url = new URL("/api/v1/sayintentions/_validate", NXApi.url);
        url.searchParams.set("key", key);
    
        return get<SayIntentionsValidateResponse>(url);
      }
}
