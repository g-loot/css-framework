import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <body>
                    <script>0</script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}