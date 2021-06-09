<h1 align="center">What is This?</h1>

This package uses promises to pause execution, similar to Python's `time.sleep()` and Lua's `wait()`.

# Installation

You can download this package by using the command; `npm i @mrhotmadm/sleep`

# Using the package

The most simplest way to use this package is to...

* Require the package.

```js
const sleep = require('@mrhotmadm/sleep');
```

* Call the main function (inside of an async function).

```js
const sleep = require('@mrhotmadm/sleep');

async function main() {
    sleep();
}
```

* Finally, pass in the amount of milliseconds to wait.

```js
const sleep = require('@mrhotmadm/sleep');

async function main() {
    await sleep(5000); // Waits for 5 seconds.

    // Your code after the function is done.
}
```

# Options

If you want to use normal numbers (e.g. wait 5 seconds) without converting to milliseconds, you can pass in a Boolean for the second argument.
Lets say you don't specify a second argument, thats fine. It will assume you are using milliseconds.

```js
const sleep = require('@mrhotmadm/sleep');

async function main() {
    await sleep(5, false); // Waits for 5 seconds, tells the function that the first argument is not in milliseconds, so it converts for you.

    // Your code after the function is done.
}
```

# Ways to use asynchronously

The most simplest and ideal way to use this package is to just add `await` before calling the package. This will automatically make it wait for the function to return the promise.
You can also add a `.catch` to handle errors.

```js
const sleep = require('@mrhotmadm/sleep');

async function main() {
    await sleep(5000) // Waits for 5 seconds.
    .catch((error) => console.error(error)); // Optional!

    // Your code after the function is done.
}
```

The other way you can use this is adding `.then` after calling the function.

# Usage

It's logical to make something like this open-sourced as most experienced people can code this without any reference and because of it's simplicity.
This part might be unneccessary but feel free to copy the code from the git repository. The only reason I would use this way is if I am not in an async function.

Thanks for downloading!
