// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "./application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"

const context = require.context("./", true, /\.js$/)
eagerLoadControllersFrom(context, application)
