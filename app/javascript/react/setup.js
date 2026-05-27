import React from "react"
import { createRoot } from "react-dom/client"
import { components } from "./components"

const roots = new WeakMap()

function mountReactComponents() {
  document.querySelectorAll("[data-react-component]:not([data-react-mounted])").forEach((element) => {
    const name = element.dataset.reactComponent
    const Component = components[name]

    if (!Component) {
      console.warn(`Componente React "${name}" no registrado`)
      return
    }

    const props = element.dataset.reactProps ? JSON.parse(element.dataset.reactProps) : {}
    const root = createRoot(element)

    root.render(React.createElement(Component, props))
    roots.set(element, root)
    element.setAttribute("data-react-mounted", "true")
  })
}

function unmountReactComponents() {
  document.querySelectorAll("[data-react-mounted]").forEach((element) => {
    const root = roots.get(element)
    root?.unmount()
    roots.delete(element)
    element.removeAttribute("data-react-mounted")
    element.replaceChildren()
  })
}

document.addEventListener("DOMContentLoaded", mountReactComponents)
document.addEventListener("turbo:load", mountReactComponents)
document.addEventListener("turbo:before-cache", unmountReactComponents)
