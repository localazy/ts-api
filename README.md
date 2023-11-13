❗️(Deprecated) Use the new https://github.com/localazy/api-client instead.

----
# @localazy/ts-api

This is a Typescript library facilitating usage of Localazy's API. To better understand this library, it is recommended to study the [API documentation](https://localazy.com/docs/api/introduction) first.

## Installation and usage

To install this library, run the following command

```
npm i @localazy/ts-api
```

Afterwards, import the library and initialize it.

```
import LocalazyApi from '@localazy/ts-api';

const api = LocalazyApi({
    projectToken: "your-project-token"
    // ...additional options
})
```

### Project token

In order to access anything from Localazy, you need to [sign up](https://localazy.com/register) and create a project.

Then, you'll be able to generate a project token [here](https://localazy.com/developer/tokens).

See [documentation](https://localazy.com/docs/api/authentication) for more information.

### Base url

Optional `baseUrl` parameter. Add prefix for all api calls. Useful for proxying requests.

## Methods overview

### listProjects

List projects related to the project token.

```ts
async listProjects(options: ListProjects = {}, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/projects#list-projects

### import

Import content into Localazy.

```ts
async import(options: Import, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/import

### listFormats

Retrieve list of available file formats and related options.

```ts
async listFormats(config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/import#retrieve-a-list-of-available-file-types

### listFiles

List Localazy files.

```ts
async listFiles(options: ListFiles, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/files

### getFileContents

Returns the given file contents.

```ts
async getFileContents(options: DownloadFile, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/files

### listKeysInFileForLanguage

This is the main method for retrieving translated content from given project and localazy file for given language.

```ts
async listKeysInFileForLanguage(options: ListKeysInFile, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/files#retrieve-a-list-of-keys-and-translations-from-file

### webhooks

Returns the webhooks configuration for the given project.

```ts
async listWebhooks(options: ListWebhooks, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/webhooks-api#list-webhooks-configuration

### postWebhooks

Store a new webhooks configuration for the project.

```ts
async postWebhooks(options: PostWebhooks, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/webhooks-api#update-webhooks-configuration

### listScreenshots

List all screenshots for the given project.

```ts
async listScreenshots(options: ListScreenshots, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/screenshots

### listScreenshotsTags

List all existing tags for screenshots.

```ts
async listScreenshotsTags(options: ListScreenshotsTags, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/screenshots

### postScreenshots

Upload a new screenshot.

```ts
async postScreenshots(options: PostScreenshots, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/screenshots

### postScreenshot

Change image data of existing screenshot.

```ts
async postScreenshot(options: PostScreenshot, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/screenshots

### putScreenshot

Change existing screenshot.

```ts
async putScreenshot(options: PutScreenshot, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/screenshots

### deleteScreenshot

```ts
async deleteScreenshot(options: DeleteScreenshot, config: CommonConfig = {})
```

Documentation: https://localazy.com/docs/api/screenshots

# FAQ

## Localazy's API supports method that is not included in this library.

It's possible as the API is still actively developed and it might take us some time to update all related projects. Feel free to create a new issue or pull request for this.

## I'd like to import and use a type definition for one of the methods. Can I do that?

Yes. We publish type definitions for arguments of all the methods to NPM. They reside in `@localazy/ts-api/dist/models`, e.g.

```ts
import ListProjects from "@localazy/ts-api/dist/models/arguments/list-projects";
```
