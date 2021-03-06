import Vue from "vue";
import VueRouter from "vue-router";
import QuickSearch from "./pages/QuickSearch";
import Browse from "./pages/Browse";
import FocusedItem from "./pages/FocusedItem";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: "/",
        component: QuickSearch
      },
      {
          path: "/browse",
          component: Browse
      },
      {
          path: "/focused",
          component: FocusedItem,

      }
    ],
    base: "/FindMeAmiibo/"
    // mode: "history"
    // hash mode is default mode, so mode is not needed
  });

  export default router;

