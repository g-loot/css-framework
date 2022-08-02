import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <script>0</script>
                    <div id="overlays"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}