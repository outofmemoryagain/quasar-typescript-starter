# Quasar Typescript Starter

## Suggested Starter Kit Typesript related Options
```
1. Check the features needed for your project:
	(*) Typescript
	(*)  Linter / Formatter
	(*) Vuex
	(*) Axios
	(*) Vue-i18n
	(*) IE11 support
2. Use class-style component syntax? (Y/n) Y
3. Pick a linter / formatter:
	> ESLint + Standard (https://github.com/standard/standard)
	  ESLint + Airbnb (https://github.com/airbnb/javascript)
	  ESLint + Prettier (https://github.com/prettier/prettier)
	  TSLint
4. Use Babel alongside TypeScript for auto-detected polyfills? (Y/n)
```

The options demonstrated in this branch are:
1. All: Typescript, Linter, Vuex, Axios, Vue-i18n, IE11 support
2. Use class-style component syntax? (Y/n) Y
3. TSLint
4. Use Babel alongside TypeScript for auto-detected polyfills? N

## Default Linter
TSLint has long been the default choice when it comes to linting TS projects, but recently the Typescript team released their [latest roadmap](https://github.com/Microsoft/TypeScript/issues/29288) and in it they are planning to move away from TSLint and focus efforts on ESLint and migrating their own linting to it.  In the issue there is a long list of git-hub repos with related issues to move to ESLint.  This indicates that the move to ESLint is starting pretty quickly based on this roadmap.  An additional write up on it can be found on [ESLint's blog](https://eslint.org/blog/2019/01/future-typescript-eslint) that highlights the TS roadmap and announces a new repository that consolidates the ESLint work related to TS support, [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).  With this information I would suggest the the starter for Quasar follow suit and use ELint by default.  TSLint should still be provided as an option as not all projects live on the bleeding edge and move on a roadmap announcement, as Typescript hasn't actually migrated just yet.

## Coming soon
* Use class-style component syntax? N
* ESLint + Standard (https://github.com/standard/standard)
* Use Babel along side TypeScript? Y
  * This is an option provided by the Vue CLI and may be useful to consider, but I'm not sure how it align with the current JS starter.

## TSLint and Single File Vue components in VS Code
Currently TSLint is [not supported by Vetur](https://github.com/vuejs/vetur/issues/170).  There is limited support added by [vscode-tslint-vue](https://github.com/prograhammer/vscode-tslint-vue) but it is not complete and provides an inconsistent experience for the developer.  Current options for supporting integration of linting with VS Code is:
1. Don't include TS script section in single file .Vue component.  Instead add a reference in the script tag to an external .ts file that contains the component class.
2. Use ESLint instead.
