import { createContext, useState } from "react";
import Home from "../pages/Home";
import Privacy from "../pages/Privacy";
import Support from "../pages/Support";
import Navbar from "../components/Navbar";

enum Page {
    Home = '/',
    Privacy = '/privacy',
    Support = '/support',
  }

const initialState = {
    page: window.location.pathname as Page,
    setPage: (_page: Page) => {}
};

export const RouterContext = createContext(initialState);

export function RouterProvider() {
    const currentRoute = window.location.pathname as Page;

    if (!Object.values(Page).includes(currentRoute)) {
        window.location.href = Page.Home;
    }

    const [page, setPage] = useState<Page>(currentRoute as Page);

    return (
        <RouterContext.Provider value={{
            page,
            setPage
        }}>
            {page === Page.Home && <Home />}
            {page === Page.Privacy && <Privacy />}
            {page === Page.Support && <Support />}
            <Navbar />
        </RouterContext.Provider>
    );
}