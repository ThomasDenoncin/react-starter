import Home from "../../pages/home/Home";
import CatchPokemon from "../../pages/CatchPokemon/CatchPokemon";
import InfoPokemon from "../../pages/InfoPokemon/InfoPokemon";
import TrainPokemon from "../../pages/TrainPokemon/TrainPokemon";

export const LAYOUT_PRINCIPAL = 'layoutPrincipal';
export const LAYOUT_USER = 'layoutUser';

export const routes = [
    {
        endpoint: '/',
        title: 'Home',
        component: Home,
        layout: LAYOUT_PRINCIPAL,
    },
    {
        endpoint: '/catch',
        title: 'Catch',
        component: CatchPokemon,
        layout: LAYOUT_PRINCIPAL,
    },
    // {
    //     endpoint: '/infos',
    //     title: 'Infos',
    //     component: InfoPokemon,
    //     layout: LAYOUT_PRINCIPAL,
    // },
    // {
    //     endpoint: '/train',
    //     title: 'Training',
    //     component: TrainPokemon,
    //     layout: LAYOUT_PRINCIPAL,
    // },
];