# EMERE-GraphQL

GraphQL Server API for EMERE

## Prerequisites

1. (For Windows Users) Install Node Windows Build Tools. Run an elevated Windows Powershell and run the command below:

```
npm install -g --production windows-build-tools
```

2. Install cli dependencies globally

```
npm install -g pm2 typeorm ts-node
```

## Setup

1. Install project dependencies

```
npm install
```

2. Build latest GraphQL Schema and Definition Typings

```
npm run generate:graphql-schema
```

3. Start server

```
npm start
```

or

```
pm2 start index.js
```
