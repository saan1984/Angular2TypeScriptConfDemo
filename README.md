# Configuring Angular2 With TSD Configuration File #

1. Run command: ** npm install**  : This will install **TSD Package Manager** for Typescript and typescript compiler.

2. We can globally install TSD using following command: **npm install tsd -g**

3. We can  globally install TypeScript Compiler using following command:**npm install -g typescript@^1.5.0-beta**

4. Initialize the **tsd.json** file using following command: **tsd init**

5. Install Angular2 type definition file using following command: **tsd query angular2 --action install**

6. create **tsconfig.json** and copy the following content to it.

		{
  		"compilerOptions": {
			"emitDecoratorMetadata": true,
			"module": "commonjs",
			"target": "es5",
			"sourceMap": true,
			"outDir":"build"
		  },
		  "files": [
			"dev/app.ts",
			"typings/tsd.d.ts"
	  		]
		}
7. Add the TSD watcher start command **tsc -w **in **package.json** file.The updated package.json file is listed as follows.
		{
		  "name": "Angular2TypeScriptConfDemo",
		  "version": "0.0.1",
		  "description": "Angular2 configuration using tsdconfig.json file",
		  "main": "index.js",
		  "scripts": {
			"build": "tsc -w"
		  },
		  "repository": {
			"type": "git",
			"url": "git"
		  },
		  "author": "Sandeep",
		  "license": "ISC",
		  "devDependencies": {
			"tsd": "^0.6.0",
			"typescript": "^1.5.0-beta"
		  }
		}


8. Now Run the following command to get started with watcher: **npm run build**