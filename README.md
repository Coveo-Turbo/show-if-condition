# ShowIfCondition

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

Purpose In a Result Template, show or hide markup if a specified condition matches the component's options (see examples below).

## Getting Started

1. Install the component into your project.

```
npm i @coveops/show-if-condition
```

2. Use the Component or extend it

Typescript:

```javascript
import { ShowIfCondition, IShowIfConditionOptions } from '@coveops/show-if-condition';
```

Javascript

```javascript
const ShowIfCondition = require('@coveops/show-if-condition').ShowIfCondition;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/show-if-condition'
```

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/show-if-condition@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Include the component in your template as follows:

Place the component in your markup:

```html
<div class="CoveoShowIfCondition"></div>
```
## Examples
Render the component if the query result item's @documenttype field value is Article or Documentation.
```html
<div class="CoveoShowIfCondition" data-condition-field-documenttype="Article, Documentation">
</div>
```
Render the component if the query result item's @documenttype field value is anything but Case.
```html
<div class="CoveoShowIfCondition" data-condition-field-not-documenttype="Case">...</div>
```
Render the component if the query result item's @documenttype field value is Article, and if its @author field value is anything but Anonymous.
```html
<div class="CoveoShowIfCondition" data-condition-field-documenttype="Article" data-condition-field-not-author="Anonymous">...</div>
```



## Extending

Extending the component can be done as follows:

```javascript
import { ShowIfCondition, IShowIfConditionOptions } from "@coveops/show-if-condition";

export interface IExtendedShowIfConditionOptions extends IShowIfConditionOptions {}

export class ExtendedShowIfCondition extends ShowIfCondition {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`