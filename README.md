# @8hobbies/browser-versions

[![npm version](https://badge.fury.io/js/@8hobbies%2Fbrowser-versions.svg)](https://badge.fury.io/js/@8hobbies%2Fbrowser-versions)
[![pipeline status](https://gitlab.com/8hobbies/browser-versions/badges/master/pipeline.svg)](https://gitlab.com/8hobbies/browser-versions/-/commits/master)

[GitLab](https://gitlab.com/8hobbies/browser-versions) | [GitHub](https://github.com/8hobbies/browser-versions)

Recommended minimum browser versions that should be supported by web frontend. They are released
roughly 3 years ago since the release date of this package version.

## Install

```
npm install --save-dev @8hobbies/browser-versions
```

## Usage

- `browserslist`: browserslist expression of supported browsers.
- `browserTargets`: The latest releases of mainstream browsers based on the date in browserslist.
  Can be directly fed to build.target in vite: https://vitejs.dev/config/build-options#build-target

## Contributing

Source code is available on [GitLab][].

To report a bug, visit the [issue tracker][].

To run test, run `npm run test-all`. To display test coverage, run `npm run coverage`. To build for
production, run `npm pack`.

To send your contribution, open a [merge request][].

## License

```text
Copyright 2024 8 Hobbies, LLC <hong@8hobbies.com>

Licensed under the Apache License, Version 2.0(the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[GitHub Pages]: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-plausible-page-for-your-github-pages-site
[GitLab Pages]: https://docs.gitlab.com/ee/user/project/pages/introduction.html#custom-error-codes-pages
[GitLab]: https://gitlab.com/8hobbies/browser-versions
[Plausible Analytics]: https://plausible.io/
[issue tracker]: https://gitlab.com/8hobbies/browser-versions/issues
[merge request]: https://gitlab.com/8hobbies/browser-versions/-/merge_requests
[TypeDoc]: https://typedoc.org/
