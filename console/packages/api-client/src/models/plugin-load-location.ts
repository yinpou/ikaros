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

// May contain unused imports in some cases
// @ts-ignore
import { PluginLoadLocationFileSystem } from "./plugin-load-location-file-system";

/**
 *
 * @export
 * @interface PluginLoadLocation
 */
export interface PluginLoadLocation {
  /**
   *
   * @type {boolean}
   * @memberof PluginLoadLocation
   */
  absolute?: boolean;
  /**
   *
   * @type {PluginLoadLocationFileSystem}
   * @memberof PluginLoadLocation
   */
  fileSystem?: PluginLoadLocationFileSystem;
  /**
   *
   * @type {number}
   * @memberof PluginLoadLocation
   */
  nameCount?: number;
}
