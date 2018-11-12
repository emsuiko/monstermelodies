import Vue from "vue";
import Router from "vue-router";
const Game = () => import("./views/Game");
const Home = () => import("./views/MonsterMelodies");
const Win = () => import("./views/Win");
const End = () => import("./views/End");
const List = () => import("./views/List");

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
            path: "/game",
            name: "game",
            component: Game
        },
        {
            path: "/win",
            name: "win",
            component: Win
        },
        {
            path: "/end",
            name: "end",
            component: End
        }
        ,
        {
            path: "/list",
            name: "list",
            component: List
        }
    ]
});