# PHX React Context Slides & Demo

## Slides

Built with `create-react-app` and uses `spectacle`

* Run `yarn`
* Run `yarn start`

## Demo

Built with `create-react-app` and uses `flow`, `react-cheers`, and `react-fast-compare`.

* `cd demo && yarn`
* Run `yarn start`

## Resources

* Context API docs - https://reactjs.org/docs/context.html
* New vs old API codesandbox - https://twitter.com/brian_d_vaughn/status/984820462831058944
* How and when to use context API - https://blog.logrocket.com/how-and-when-to-use-reacts-new-context-api-b584e41b2704

## Projects to know about

* [Immer](https://github.com/mweststrate/immer)
* [react-copy-write](https://github.com/aweary/react-copy-write)
* [react-context-composer](https://github.com/FormidableLabs/react-context-composer)
* [react-cheers](https://github.com/kylecesmat/react-cheers)

## Talk outline

* Intro Slide
* Formidable Slide
* Why is this talk relevant? React 16.3
  * createContext API
* What is "context"
  * Provides contextual information or state to children
  * Different than transactional state like redux/mobx/unstated/statex (make sure of this)
* Visual of difference between context & transactional state
* Does context "replace" redux? no.
  * But, don't shove everything you love into redux
  * Redux works great for side-effects & high asynchronous actions
  * Redux is still my preferred data-fetching mechanism
  * Context should not replace props
* Where does context fall down
  * Triggers all components to re-render when context is updated
  * Composition is hard - [https://github.com/FormidableLabs/react-context-composer](https://github.com/FormidableLabs/react-context-composer)
  * Nested contexts on computed values is re-render hell
* Use-cases
  * intl
  * Theming
  * A11y (click vs keyboard, etc)
  * "global data" like user, auth status, user preferences/permissions
  * router state
  * Intimate interaction experiences (dragging, swiping,
  * layout state (screen-size, media queries)
  * Today's proposition: Global component interaction
* What is a global component?
  * Notifications
  * Basic Modals
  * Any HUD-style components
* React Cheers
  * Dependency-free, uses APIs available within React
  * Provides notification state, updaters
  * Lightweight & portable
* Demo
