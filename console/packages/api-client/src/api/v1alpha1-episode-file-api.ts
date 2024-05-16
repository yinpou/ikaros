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
import { BatchMatchingEpisodeFile } from "../models";
/**
 * V1alpha1EpisodeFileApi - axios parameter creator
 * @export
 */
export const V1alpha1EpisodeFileApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Batch matching episode file.
     * @param {BatchMatchingEpisodeFile} batchMatchingEpisodeFile batch matching episode file request value object.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchMatchingEpisodeFile: async (
      batchMatchingEpisodeFile: BatchMatchingEpisodeFile,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'batchMatchingEpisodeFile' is not null or undefined
      assertParamExists(
        "batchMatchingEpisodeFile",
        "batchMatchingEpisodeFile",
        batchMatchingEpisodeFile
      );
      const localVarPath = `/api/v1alpha1/episode/file/batch`;
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
        batchMatchingEpisodeFile,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create episode and file bind record.
     * @param {number} episodeId Episode id.
     * @param {number} fileId File id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createEpisodeFile: async (
      episodeId: number,
      fileId: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'episodeId' is not null or undefined
      assertParamExists("createEpisodeFile", "episodeId", episodeId);
      // verify required parameter 'fileId' is not null or undefined
      assertParamExists("createEpisodeFile", "fileId", fileId);
      const localVarPath = `/api/v1alpha1/episode/file/{episodeId}/{fileId}`
        .replace(`{${"episodeId"}}`, encodeURIComponent(String(episodeId)))
        .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
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

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Remove episode and file bind record.
     * @param {number} episodeId Episode id.
     * @param {number} fileId File id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeEpisodeFile: async (
      episodeId: number,
      fileId: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'episodeId' is not null or undefined
      assertParamExists("removeEpisodeFile", "episodeId", episodeId);
      // verify required parameter 'fileId' is not null or undefined
      assertParamExists("removeEpisodeFile", "fileId", fileId);
      const localVarPath = `/api/v1alpha1/episode/file/{episodeId}/{fileId}`
        .replace(`{${"episodeId"}}`, encodeURIComponent(String(episodeId)))
        .replace(`{${"fileId"}}`, encodeURIComponent(String(fileId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
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

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * V1alpha1EpisodeFileApi - functional programming interface
 * @export
 */
export const V1alpha1EpisodeFileApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    V1alpha1EpisodeFileApiAxiosParamCreator(configuration);
  return {
    /**
     * Batch matching episode file.
     * @param {BatchMatchingEpisodeFile} batchMatchingEpisodeFile batch matching episode file request value object.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async batchMatchingEpisodeFile(
      batchMatchingEpisodeFile: BatchMatchingEpisodeFile,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.batchMatchingEpisodeFile(
          batchMatchingEpisodeFile,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Create episode and file bind record.
     * @param {number} episodeId Episode id.
     * @param {number} fileId File id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createEpisodeFile(
      episodeId: number,
      fileId: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createEpisodeFile(
          episodeId,
          fileId,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Remove episode and file bind record.
     * @param {number} episodeId Episode id.
     * @param {number} fileId File id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async removeEpisodeFile(
      episodeId: number,
      fileId: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.removeEpisodeFile(
          episodeId,
          fileId,
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
 * V1alpha1EpisodeFileApi - factory interface
 * @export
 */
export const V1alpha1EpisodeFileApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = V1alpha1EpisodeFileApiFp(configuration);
  return {
    /**
     * Batch matching episode file.
     * @param {V1alpha1EpisodeFileApiBatchMatchingEpisodeFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    batchMatchingEpisodeFile(
      requestParameters: V1alpha1EpisodeFileApiBatchMatchingEpisodeFileRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .batchMatchingEpisodeFile(
          requestParameters.batchMatchingEpisodeFile,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create episode and file bind record.
     * @param {V1alpha1EpisodeFileApiCreateEpisodeFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createEpisodeFile(
      requestParameters: V1alpha1EpisodeFileApiCreateEpisodeFileRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .createEpisodeFile(
          requestParameters.episodeId,
          requestParameters.fileId,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Remove episode and file bind record.
     * @param {V1alpha1EpisodeFileApiRemoveEpisodeFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeEpisodeFile(
      requestParameters: V1alpha1EpisodeFileApiRemoveEpisodeFileRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .removeEpisodeFile(
          requestParameters.episodeId,
          requestParameters.fileId,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for batchMatchingEpisodeFile operation in V1alpha1EpisodeFileApi.
 * @export
 * @interface V1alpha1EpisodeFileApiBatchMatchingEpisodeFileRequest
 */
export interface V1alpha1EpisodeFileApiBatchMatchingEpisodeFileRequest {
  /**
   * batch matching episode file request value object.
   * @type {BatchMatchingEpisodeFile}
   * @memberof V1alpha1EpisodeFileApiBatchMatchingEpisodeFile
   */
  readonly batchMatchingEpisodeFile: BatchMatchingEpisodeFile;
}

/**
 * Request parameters for createEpisodeFile operation in V1alpha1EpisodeFileApi.
 * @export
 * @interface V1alpha1EpisodeFileApiCreateEpisodeFileRequest
 */
export interface V1alpha1EpisodeFileApiCreateEpisodeFileRequest {
  /**
   * Episode id.
   * @type {number}
   * @memberof V1alpha1EpisodeFileApiCreateEpisodeFile
   */
  readonly episodeId: number;

  /**
   * File id
   * @type {number}
   * @memberof V1alpha1EpisodeFileApiCreateEpisodeFile
   */
  readonly fileId: number;
}

/**
 * Request parameters for removeEpisodeFile operation in V1alpha1EpisodeFileApi.
 * @export
 * @interface V1alpha1EpisodeFileApiRemoveEpisodeFileRequest
 */
export interface V1alpha1EpisodeFileApiRemoveEpisodeFileRequest {
  /**
   * Episode id.
   * @type {number}
   * @memberof V1alpha1EpisodeFileApiRemoveEpisodeFile
   */
  readonly episodeId: number;

  /**
   * File id
   * @type {number}
   * @memberof V1alpha1EpisodeFileApiRemoveEpisodeFile
   */
  readonly fileId: number;
}

/**
 * V1alpha1EpisodeFileApi - object-oriented interface
 * @export
 * @class V1alpha1EpisodeFileApi
 * @extends {BaseAPI}
 */
export class V1alpha1EpisodeFileApi extends BaseAPI {
  /**
   * Batch matching episode file.
   * @param {V1alpha1EpisodeFileApiBatchMatchingEpisodeFileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1EpisodeFileApi
   */
  public batchMatchingEpisodeFile(
    requestParameters: V1alpha1EpisodeFileApiBatchMatchingEpisodeFileRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1EpisodeFileApiFp(this.configuration)
      .batchMatchingEpisodeFile(
        requestParameters.batchMatchingEpisodeFile,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Create episode and file bind record.
   * @param {V1alpha1EpisodeFileApiCreateEpisodeFileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1EpisodeFileApi
   */
  public createEpisodeFile(
    requestParameters: V1alpha1EpisodeFileApiCreateEpisodeFileRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1EpisodeFileApiFp(this.configuration)
      .createEpisodeFile(
        requestParameters.episodeId,
        requestParameters.fileId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Remove episode and file bind record.
   * @param {V1alpha1EpisodeFileApiRemoveEpisodeFileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1EpisodeFileApi
   */
  public removeEpisodeFile(
    requestParameters: V1alpha1EpisodeFileApiRemoveEpisodeFileRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1EpisodeFileApiFp(this.configuration)
      .removeEpisodeFile(
        requestParameters.episodeId,
        requestParameters.fileId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
