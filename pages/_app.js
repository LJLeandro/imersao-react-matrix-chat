function GlobalStyle() {
    return (
        <style global jsx>{`
            @import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,300,400,700);


            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
                font-family: 'Open Sans', sans-serif;
            }

            body h1 {
                
            }

            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1;
            }

            #__next {
                flex: 1;
            }

            #__next > * {
                flex: 1;
            }
        `}</style>
    );
}

export default function AlucordApp({ Component, pageProps }) {
    console.log('Roda em todas as páginas!')

    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}