TODO:
-----
* Refactor
 * Move data mangling from controllers to services
 * Fewer directives, more components
 * Make sure we aren't passing unnecessary things to child scopes
* Local persistent sessions (localStorage probably)

Roadmap:
--------
* Anonymous sessions saved to a server (would be accessed with a special url, like `/sessions/<some sort of id here>`)
* User accounts
* Sessions belonging to user accounts
* Organizations
* Add/remove users to organization
* Permissions within an organization
* Change permissions of users within organization
* Sessions belonging to organizations
