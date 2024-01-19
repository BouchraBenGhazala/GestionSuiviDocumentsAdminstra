import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'
    },
    
    {
        routeLink: 'approved',
        icon: 'fa-solid fa-file-circle-check',
        label: 'Demandes approuvées'
    },
    
    {
        routeLink: 'pending',
        icon: 'fa-solid fa-hourglass-start',
        label: 'Demandes en attente'
    },
    // {
    //     routeLink: 'media',
    //     icon: 'fa fa-camera',
    //     label: 'Media'
    // },
    
    {
        routeLink: 'logout',
        icon: 'fas fa-sign-out-alt',
        label: 'Log Out'
    }
    
];