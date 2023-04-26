## Description

This is a demo project that shows the integration of [Localazy](https://localazy.com/) with NestJS. It could be used as a template to start using your localized NestJS application.

## Installation
Install project dependencies with the command:
```bash
# install packages
$ npm install
```
This command also installs the localazy cli as it is part of the project devDependencies.

## Create Project on Localazy
Log in or create a [Localazy](https://localazy.com/) account if you do not have one.
Select create a new project. Enter a project name of choice. Use English as the source language. Then, click the create new project button.

## Running the app

Create a file called `localazy.json`. Then, copy the contents from `localazy-sample.json` file and paste in the created file.
Replace the writeKey and readKey with values copied from your Localazy Project Settings.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# upload files to be translated
$ npm run upload

# download translated files
$ npm run downoad

# production mode
$ npm run start:prod
```
The **upload** and **download** commands have already been added in the package.json scripts.
  
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
  
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
  
## License

Nest is [MIT licensed](LICENSE).
