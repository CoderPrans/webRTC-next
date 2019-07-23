import Head from 'next/head';

const Layout = ({children}) => (
  <div>
    <Head>
      <title>Web-Chat</title>
      <script
        type="text/javascript"
        src="https://cdn.scaledrone.com/scaledrone.min.js"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {children}
  </div>
);

export default Layout;
