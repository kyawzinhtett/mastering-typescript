### Initialize typescript compiler

`tsc --init`

### Compile all typescript files

`tsc`

### Useful Settings

`
"target": "ES2016",
"rootDir": "./src",
"outDir": "./dist",
"removeComments": true,
"noEmitOnError": true,
"sourceMap": true,
"noImplicitAny": true (Use with caution),
"noUnusedParameters": true,
"noImplicitReturns": true,
"noUnusedLocals": true,
`

### Tuple
- Should only use for two values (key-value pair)
