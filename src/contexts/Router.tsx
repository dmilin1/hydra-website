import { createContext, useState } from "react";
import Home from "../pages/Home";

enum Page {
    Home = '/home',
    Privacy = '/privacy',
    Contact = '/contact',
  }

const initialState = {
    page: window.location.pathname as Page,
    setPage: (_page: Page) => {}
};

export const RouterContext = createContext(initialState);

export function RouterProvider() {
    const currentRoute = window.location.pathname as Page;

    if (!Object.values(Page).includes(currentRoute)) {
        window.location.href = '/home';
    }
      
    const [page, setPage] = useState<Page>(currentRoute as Page);

    return (
        <RouterContext.Provider value={{
            page,
            setPage
        }}>
            {page === Page.Home && <Home />}
        </RouterContext.Provider>
    );
}