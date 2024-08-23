/** @license Apache-2.0
 *
 * Copyright 2024 8 Hobbies, LLC <hong@8hobbies.com>
 *
 * Licensed under the Apache License, Version 2.0(the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** browserslist expression of supported browsers. */
export const browserslist = "since 2021-10-31, not dead" as const;

/** The latest releases of mainstream browsers based on the date in
 * browserslist. Can be directly fed to build.target in vite: https:
 * //vitejs.dev/config/build-options#build-target
 */
export const browserTargets = [
  "chrome95",
  "edge95",
  "firefox93",
  "ios15.1",
  "opera80",
  "safari15.0",
] as const;
