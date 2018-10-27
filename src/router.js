import Vue from "vue";
import Router from "vue-router";
const Start = () => import("./views/Start");
const Home = () => import("./views/MonsterMelodies");

Vue.use(Router);

export default new Router({
//   mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/start",
            name: "start",
            component: Start
        }
    ]
});