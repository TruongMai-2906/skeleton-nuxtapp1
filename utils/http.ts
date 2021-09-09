/* eslint-disable no-useless-constructor */

import { $axios } from "./api";

/* eslint-disable @typescript-eslint/no-unused-vars */
export default class HttpUtils {


  static doGet = (requestUrl: string): Promise<any> => {

    return $axios.$get(requestUrl)
  }

  static doPost = (requestUrl: string, paramBody: any): Promise<any> => {

    return $axios.$post(requestUrl,paramBody);
  }

  static doPut = (requestUrl: string, paramBody: any): Promise<any> => {

    return $axios.$put(requestUrl,paramBody);
  }

  static doPatch = (requestUrl: string, paramBody: any): Promise<any> => {

    return $axios.$patch(requestUrl,paramBody);
  }

  static doDelete = (requestUrl: string, paramBody: any): Promise<any> => {

    return $axios.$delete(requestUrl,paramBody);
  }

  // public doGet(requestUrl: string): Promise<any>{

  //    return $axios.$get(requestUrl)
  // }

  // public doPost(requestUrl: string, paramBody: any){

  //   return $axios.$post(requestUrl,paramBody);
  // }

  // public doPut(requestUrl: string, paramBody: any){

  //   return $axios.$put(requestUrl,paramBody);
  // }

  // public doDelete(requestUrl: string, paramBody: any){

  //   return $axios.$delete(requestUrl,paramBody);
  // }

  // public doPatch(requestUrl: string, paramBody: any){

  //   return $axios.$patch(requestUrl,paramBody);
  // }
}
