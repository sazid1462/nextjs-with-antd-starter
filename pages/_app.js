import React from 'react';
import App, { Container } from 'next/app';
import DefaultLayout from '../components/layout/DefaultLayout';
import withContext from '../contexts/WithContext';

class MyApp extends App {

    // static async getInitialProps({ Component, ctx }) {
    //     let pageProps = {}

    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx)
    //     }

    //     return { pageProps }
    // }

    render() {

        const { Component, pageProps } = this.props

        const isDefaultLayout = () => {
            return Component.isDefaultLayout ? (
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            ) : <Component {...pageProps} />;
        }

        return (
            <Container>
                {isDefaultLayout()}
            </Container>

        )
    }
}

export default withContext(MyApp);