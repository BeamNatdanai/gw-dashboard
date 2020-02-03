import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>  
          <meta charSet="utf-8"/>
          <meta content="text/html; charset=UTF-8" name="Content-Type" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/png" sizes="36x36" href="/static/images/logo/joystick.png"></link>
          <link rel="stylesheet" href="/static/css/bootstrap.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
          <link rel="stylesheet" href="/static/css/media-query.css" />
        </Head>
        <body>
          <div id="fb-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument