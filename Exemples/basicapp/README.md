# Use Parcel to build a typescript app

To serve a typescript app easily with parcel, just add a script to index.html with the index.ts path

Then run:

`npx parcel index.html`

Parcel will replace the .ts with .js and serve it.

Install the faker package to generate random data

`npm install @faker-js/faker@7.6.0`

To use imports with Parcel, don't forget to add type=module in the index.html script

`<script type="module" src="./src/index.ts"></script>`
