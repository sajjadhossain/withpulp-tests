# WithPulp
## Features
* [Website](./features/website.md)

## Tests
* [./test/specs/website/home.spec.js](./test/specs/website/home.spec.js)
* [./test/specs/website/blog.spec.js](./test/specs/website/blog.spec.js)
* [./test/specs/website/subscribe.spec.js](./test/specs/website/subscribe.spec.js)

## Getting started
1. Download and install [Node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm)
2. Clone this [repository](https://github.com/sajjadhossain/withpulp-tests.git)
3. Run `npm install`
4. After the dependencies are installed, you should be able to run `npm run init`
5. Then, `npm run start-selenium`
6. Then, open a new terminal tab and run `npm run test`
7. Optionally, if there are screenshots taken from errors thrown, you can clean the directory via `npm run clean`

## Example output

```
> withpulp-tests@1.0.0 test /Users/sajjahos/Desktop/withpulp-tests
> sh ./bin/run-all-tests.sh

------------------------------------------------------------------
[chrome #0-2] Session ID: cfce85c4f6b0cb67c693afe7aa212aff
[chrome #0-2] Spec: /Users/sajjahos/Desktop/withpulp-tests/test/specs/website/subscribe.spec.js
[chrome #0-2] Running: chrome
[chrome #0-2]
[chrome #0-2] Newsletter
[chrome #0-2]   ✓ Allows user to submit email and subscribe to our newsletter
[chrome #0-2]
[chrome #0-2]
[chrome #0-2] 1 passing (3s)
[chrome #0-2]

------------------------------------------------------------------
[chrome #0-0] Session ID: 2ee7ad99bcbe1648b57ae4f5358a47bc
[chrome #0-0] Spec: /Users/sajjahos/Desktop/withpulp-tests/test/specs/website/home.spec.js
[chrome #0-0] Running: chrome
[chrome #0-0]
[chrome #0-0] WithPulp
[chrome #0-0]   ✓ Takes the user to the home page
[chrome #0-0]   ✓ Tells the user about the agency
[chrome #0-0]   ✓ Tells the user about the team
[chrome #0-0]   ✓ Tells the user about our experience
[chrome #0-0]   ✓ Tells the user about our partners
[chrome #0-0]   ✓ Tells the user about our skills
[chrome #0-0]   ✓ Tells the user about our tech stack
[chrome #0-0]   ✓ Allows the reader to read some blog posts
[chrome #0-0]   ✓ Allows the user to contact us
[chrome #0-0]   ✓ Allows the user to subscribe for our newsletter
[chrome #0-0]   ✓ Generates a quote in the footer
[chrome #0-0]
[chrome #0-0]
[chrome #0-0] 11 passing (3s)
[chrome #0-0]

------------------------------------------------------------------
[chrome #0-1] Session ID: 15e2257a98e4abf9e779c647e0766380
[chrome #0-1] Spec: /Users/sajjahos/Desktop/withpulp-tests/test/specs/website/blog.spec.js
[chrome #0-1] Running: chrome
[chrome #0-1]
[chrome #0-1] Blog
[chrome #0-1]   ✓ 3 stories are featured in the home page
[chrome #0-1]   ✓ Shares a story with the user in a blog post
[chrome #0-1]   ✓ Links related posts in the footer
[chrome #0-1]
[chrome #0-1]
[chrome #0-1] 3 passing (4s)
[chrome #0-1]



==================================================================
Number of specs: 3
```
