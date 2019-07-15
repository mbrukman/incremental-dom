/**
 * Copyright 2018 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A cached reference to the hasOwnProperty function.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;


/**
 * A constructor function that will create blank objects.
 */
function Blank() {}

Blank.prototype = Object.create(null);


/**
 * Used to prevent property collisions between our "map" and its prototype.
 * @param map The map to check.
 * @param property The property to check.
 * @return Whether map has property.
 */
function has(map: object, property: string): boolean {
  return hasOwnProperty.call(map, property);
}


/**
 * Creates an map object without a prototype.
 */
// tslint:disable-next-line:no-any
function createMap(): any {
  // tslint:disable-next-line:no-any
  return new (Blank as any)();
}


/**
 * Truncates an array, removing items up until length.
 * @param arr The array to truncate.
 * @param length The new length of the array.
 */
function truncateArray(arr: Array<{}|null|undefined>, length: number) {
  while (arr.length > length) {
    arr.pop();
  }
}

export {createMap, has, truncateArray,};
