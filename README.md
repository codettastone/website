# codettastone

the website

# frontend

React and Semantic UI are used.
Routing is done via `react-router-dom`
Semantic implementation `npm i semantic-ui-react semantic-ui-css`

# maps component

https://github.com/fullstackreact/google-maps-react

# Dev dependencies

## Linting & Formatting

ESLint & Prettier are used within VSCode for linting and formatting.

- Semi colons are turned off
- Single quotes are preferred over double quotes
- Format on save is also activated for ease (VSCode)

# Travis CI implementation

## Installing travis CLI tool

https://github.com/travis-ci/travis.rb#installation

`$ gem install travis`
`$ travis login`
`$ travis encrypt-file client-secret.json --add`
Add the credential.json file to .gitignore THIS IS IMPORTANT TO PREVENT LEAKING CREDENTIALS!
