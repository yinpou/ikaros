/* tslint:disable */
/* eslint-disable */
/**
 * Ikaros Open API Documentation
 * Documentation for Ikaros Open API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { JwtApplyParam } from "../models";
/**
 * V1alpha1SecurityApi - axios parameter creator
 * @export
 */
export const V1alpha1SecurityApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Apply JWT token
     * @param {JwtApplyParam} [jwtApplyParam] Apply JWT token params
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applyJwtToken: async (
      jwtApplyParam?: JwtApplyParam,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/security/auth/token/jwt/apply`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        jwtApplyParam,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * V1alpha1SecurityApi - functional programming interface
 * @export
 */
export const V1alpha1SecurityApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    V1alpha1SecurityApiAxiosParamCreator(configuration);
  return {
    /**
     * Apply JWT token
     * @param {JwtApplyParam} [jwtApplyParam] Apply JWT token params
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async applyJwtToken(
      jwtApplyParam?: JwtApplyParam,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.applyJwtToken(
        jwtApplyParam,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * V1alpha1SecurityApi - factory interface
 * @export
 */
export const V1alpha1SecurityApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = V1alpha1SecurityApiFp(configuration);
  return {
    /**
     * Apply JWT token
     * @param {V1alpha1SecurityApiApplyJwtTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applyJwtToken(
      requestParameters: V1alpha1SecurityApiApplyJwtTokenRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<string> {
      return localVarFp
        .applyJwtToken(requestParameters.jwtApplyParam, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for applyJwtToken operation in V1alpha1SecurityApi.
 * @export
 * @interface V1alpha1SecurityApiApplyJwtTokenRequest
 */
export interface V1alpha1SecurityApiApplyJwtTokenRequest {
  /**
   * Apply JWT token params
   * @type {JwtApplyParam}
   * @memberof V1alpha1SecurityApiApplyJwtToken
   */
  readonly jwtApplyParam?: JwtApplyParam;
}

/**
 * V1alpha1SecurityApi - object-oriented interface
 * @export
 * @class V1alpha1SecurityApi
 * @extends {BaseAPI}
 */
export class V1alpha1SecurityApi extends BaseAPI {
  /**
   * Apply JWT token
   * @param {V1alpha1SecurityApiApplyJwtTokenRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1SecurityApi
   */
  public applyJwtToken(
    requestParameters: V1alpha1SecurityApiApplyJwtTokenRequest = {},
    options?: AxiosRequestConfig
  ) {
    return V1alpha1SecurityApiFp(this.configuration)
      .applyJwtToken(requestParameters.jwtApplyParam, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
