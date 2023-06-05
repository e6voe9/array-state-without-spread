## Benchmark
I don't completely sure if I can believe this benchmark, but it's pretty clear that .push() is a lot faster than copying whole array with spread operator.
https://jsbench.me/vsli34vlla

With just 10 elements in array the results are:
- spread - 123k operations per second (123000 ops/s)
- .push() - 34M operations per second (34000000 ops/s)

**.push() is around 275 times faster**

## Idea
We can use .push() instead of spread to update state in react.
The point is, we do not use useState to store array of data. We're using it just to tell react when we want to re-render component. (every single time we update the state -> component re-renders)

Conclusion
By doing this, we don't copy array every single re-render. We just push new items into it and forcing re-render.
Also we clear the list when component will unmount, so it's not memory leaking.

I wonder if you can use this pattern in real applications somehow, let me know what's your thoughts on this?


## Vite + React

This is a [Vite](https://vitejs.dev) project together with React.

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/codesandbox/codesandbox-template-vite-react/main)

[Configuration](https://codesandbox.io/docs/projects/learn/setting-up/tasks) has been added to optimize it for [CodeSandbox](https://codesandbox.io/dashboard).

### Resources

- [CodeSandbox — Docs](https://codesandbox.io/docs/projects)
- [CodeSandbox — Discord](https://discord.gg/Ggarp3pX5H)
- [Vite — GitHub](https://github.com/vitejs/vite)
- [Vite — Docs](https://vitejs.dev/guide/)
