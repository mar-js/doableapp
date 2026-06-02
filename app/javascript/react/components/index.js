import layoutsAppHeader from "./layouts/app_header"
import layoutsFlashNotice from "./layouts/flash_notice"
import pagesHome from "./pages/home"
import passwordsEdit from "./passwords/edit"
import passwordsNew from "./passwords/new"
import projectsEdit from "./projects/edit"
import projectsIndex from "./projects/index"
import projectsNew from "./projects/new"
import projectsShow from "./projects/show"
import registersNew from "./registers/new"
import sessionsNew from "./sessions/new"
import todosEdit from "./todos/edit"
import todosIndex from "./todos/index"
import todosNew from "./todos/new"
import todosShow from "./todos/show"

export const components = {
  "layouts/flash_notice": layoutsFlashNotice,
  "layouts/app_header": layoutsAppHeader,
  "pages/home": pagesHome,
  "sessions/new": sessionsNew,
  "registers/new": registersNew,
  "passwords/new": passwordsNew,
  "passwords/edit": passwordsEdit,
  "projects/index": projectsIndex,
  "projects/show": projectsShow,
  "projects/new": projectsNew,
  "projects/edit": projectsEdit,
  "todos/index": todosIndex,
  "todos/show": todosShow,
  "todos/new": todosNew,
  "todos/edit": todosEdit
}
