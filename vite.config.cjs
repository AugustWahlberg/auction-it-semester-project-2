import {defineConfig} from "vite";

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main: new URL('index.html', import.meta.url).pathname,
                howItWorks: new URL('./pages/howitworks/index.html', import.meta.url).pathname,
                listings: new URL('./pages/listings/index.html', import.meta.url).pathname,
                myListing: new URL('./pages/mylisting/index.html', import.meta.url).pathname,
                myProfile: new URL('./pages/myprofile/index.html', import.meta.url).pathname,
                userListings: new URL('./pages/userlisting/index.html', import.meta.url).pathname,
            }
        }
    }
});