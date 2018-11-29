import Vue from "vue";
import Router from "vue-router";
const Game = () => import("./views/Game");
const Home = () => import("./views/MonsterMelodies");
const Win = () => import("./views/Win");
const End = () => import("./views/End");
const MonsterList = () => import("./views/MonsterList");
const MelodyList = () => import("./views/MelodyList");
const About = () => import("./views/About");
const RecipesList = () => import("./views/Recipes");

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
        },
        {
            path: "/monster",
            name: "monster",
            component: MonsterList
        },
        {
            path: "/melodies",
            name: "melodies",
            component: MelodyList
        },
        {
            path: "/recipes",
            name: "recipes",
            component: RecipesList
        },
        {
            path: "/about",
            name: "about",
            component: About
        }
    ]
});