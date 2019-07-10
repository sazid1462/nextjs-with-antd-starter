import {API_BASE_PATH} from '../routes/Slugs'
import App, {Container} from 'next/app'
import React, {useEffect} from 'react'
// import fetch from 'isomorphic-unfetch';
import {mockFetch} from '../helpers/mockFetch';
import {redirectTo} from '../components/common/Redirect'
import cookies from 'next-cookies';
import withContext from "../contexts/WithContext";

class CMSApp extends App {

    static async getInitialProps({Component, ctx}) {
        let pageProps = {};
        let response = null;
        const c = cookies(ctx);

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        //if the authtoken is not found
        if (typeof c.token == 'undefined') {
            //don't do anything if we are on a page that doesn't require credentials
            if (ctx.pathname === "/login" || ctx.pathname === "/forgot-password") return {pageProps};
            //if we are on any other page, redirect to the login page
            else redirectTo('/login', {res: ctx.res, status: 301})
        } else { //if we do have an auth token to check
            response = await mockFetch(API_BASE_PATH + '/auth', {
                method: 'POST', headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({token: c.token})
            })
                .then(r => r.json())
                .then(resp => {

                    if (ctx.pathname === "/") {

                        //if auth check was successful, send to dashboard
                        if (resp.result === "success") redirectTo('/dashboard', {res: ctx.res, status: 301});
                        else {

                            //setting the cookie to expire way back when removes it
                            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                            redirectTo('/login', {res: ctx.res, status: 301})

                        }

                    } else if (ctx.pathname === "/login") {

                        //shouldn't show the login page is we are already logged in
                        if (resp.result === "success") {
                            redirectTo('/dashboard', {res: ctx.res, status: 301});
                        }

                        //if it wasn't successful, stay where we are
                        else return {...pageProps, ...{query: ctx.query, token: c.token}};

                    }

                    //any other page that requires a login
                    else {

                        //if auth check was successful, stay where we are
                        if (resp.result === "success") return {
                            ...pageProps, ...{
                                query: ctx.query,
                                token: c.authtoken
                            }
                        };

                        //if it wasn't successful, clear the authtoken since it must be expired or invalid and redirect to login
                        else {
                            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                            redirectTo('/login', {res: ctx.res, status: 301});
                        }
                    }

                })
                .catch((err) => {
                    console.log(err);
                    return {pageProps};
                })
        }

        if (response !== null) {
            return {pageProps: response};
        } else return {pageProps};

    }

    render() {
        const {Component, pageProps} = this.props;

        return (<Container>
            <Component {...pageProps} />
        </Container>)
    }
}

export default CMSApp;
