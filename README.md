# Execute server
node index
# Build vuepress
cd docs; yarn build

After that, you can shotdown the server because you will never need it again. 
The webside has been generated with all the prefetched data from the server.

In order to keep the state persisted after the server rendering, is created a dataset html attribute called *data-state* where is stored as string the component state.

```html
<div :data-state="itemsToString"> 
```
and injected again on beforeMounted hook:

```js
  beforeMount() {
    this.items = JSON.parse(this.$el.dataset.state)
  }
```