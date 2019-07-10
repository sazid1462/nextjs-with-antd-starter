import Router from 'next/router'
import NextHead from "next/head";
import React from "react";

export const redirectTo = (destination, {res, status} = {}) => {
    if (res) {
        res.writeHead(status || 302, {Location: destination})
        res.end()
    } else {
        if (destination[0] === '/' && destination[1] !== '/') {
            Router.push(destination)
        } else {
            window.location = destination
        }
    }
};

const redirect = destination =>
    class RedirectRoute extends React.Component {
        static getInitialProps({res}) {
            if (typeof window === 'undefined' && !res.writeHead) {
                // This is the SSR mode
                return {metaRedirect: true}
            }

            redirectTo(destination, {res, status: 301})
            return {}
        }

        render() {
            if (this.props.metaRedirect) {
                return (
                    <NextHead>
                        <meta httpEquiv="refresh" content={`0; url=${destination}`}/>
                    </NextHead>
                )
            }

            return null
        }
    }

export default redirect
