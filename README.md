# Node & Express Self Study

Node is JavaScript without the browser. Since you're already familiar with
JavaScript, you shouldn't think of learning Node as learning a new language.
Instead, you'll be learning a new set of APIs that use JavaScript to get work
done outside the browser. That means you won't have access to browser APIs, like
manipulating the DOM, but you will still have events and asynchronous
capabilities. Additionally, Node provides excellent utilities for working with
the file system, making web requests, and processing incoming web requests.

[nodeschool](http://nodeschool.io/) is an excellent free and open-source
resource for learning Node. You must complete the following workshops to become
familiar with Node:

-   [learnyounode](https://github.com/workshopper/learnyounode): Introduction to
    Node
-   [how-to-npm](https://github.com/npm/how-to-npm): Introduction to NPM
-   [expressworks](https://github.com/azat-co/expressworks): Introduction to
    Express

The following workshops are optional:

-   [javascripting](https://github.com/sethvincent/javascripting): JavaScript
    review (optional)
-   [scope-chains-closures](https://github.com/jesstelford/scope-chains-closures):
    Scope, Chains, and Closures (optional, challenging)
-   [stream-adventure](https://github.com/substack/stream-adventure):
    Introduction to Node streams (optional, challenging)

Take a moment to browse the [nodeschool](http://nodeschool.io/) site. Make a
note of any workshops you might want to take in the future. (Note: The term
"workshop" is a bit confusing. "Workshops" at nodeschool are modules you install
and run locally on your system. If you want to attend a nodeschool meetup,
you'll want to browse "Events".)

When you're ready to begin a workshop, just install it globally with `npm` and
start the workshop via the command line. For example, to install
[learnyounode](https://github.com/workshopper/learnyounode), use `npm install -g
learnyounode`, then begin the workshop with `learnyounode`.

## Instructions

1.  Install `learnyounode`

    ```sh
    npm install -g learnyounode
    ```

1.  Fork and clone this repository.
1.  Edit your fork's README. ([example](https://github.com/jrhorn424/javascripting))
1.  Add and commit the README and push changes to your fork.
1.  Move to the `learnyounode` directory. You will work here as you complete the
    workshop.
1.  Run `learnyounode` from the command line and follow the instructions.
1.  As you work, commit early and often.

Use commit messages as your learning journal, making notes of challenges and
what you learned by completing each exercise
([example](https://github.com/jrhorn424/learnyounode/commit/5db673a16d4af82d3c5a80240edeb93b0e4dbd0c)).

Do something similar for the other required workshops. Repeat the last three
steps. Do not create another fork or clone; all your work can be done from your
original fork.

## Gotchas

The `learnyounode` workshop suggests you add your code to a single file,
`program.js`, that is updated with each exercise. Instead, you should create a
new file for exercise and run `learnyounode run` and `learnyounode verify`
against the exercise file.

You will need to create your own file structure in all directories except
`learnyounode`. Each exercise should have its own file.


## Additional Resources

-   [Mozilla Developer Network: JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Node Documentation](https://nodejs.org/api/)
-   [NPM Documentation](https://docs.npmjs.com)
-   [Art of Node](https://github.com/maxogden/art-of-node)
