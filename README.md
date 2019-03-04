create canvas with call to g.canvas(),
returns context, width, height, id

can be configured with object:
g.canvas({
    width: number,
    height: number,
    id: string (will be canvas id),
    el: selector (optional selector to append canvas to, e.g. document.querySelector('.canvas-container'))
})