Instead of using packages like "parcel" to compile our .ts and serve it, we can generate a tsconfig file in which we will define our compiling configuration

`tsc --init`

To build automatically our .ts, we can define our root and target directory and then just use:

`tsc`

Or watch for change

`tsc -w`
