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

/**
 *
 * @export
 * @interface EpisodeResource
 */
export interface EpisodeResource {
  /**
   *
   * @type {number}
   * @memberof EpisodeResource
   */
  attachmentId?: number;
  /**
   *
   * @type {number}
   * @memberof EpisodeResource
   */
  parentAttachmentId?: number;
  /**
   *
   * @type {number}
   * @memberof EpisodeResource
   */
  episodeId?: number;
  /**
   *
   * @type {string}
   * @memberof EpisodeResource
   */
  url?: string;
  /**
   *
   * @type {boolean}
   * @memberof EpisodeResource
   */
  canRead?: boolean;
  /**
   *
   * @type {string}
   * @memberof EpisodeResource
   */
  name?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof EpisodeResource
   */
  tags?: Set<string>;
}
