import Head from 'next/head';

const Layout = ({children}) => (
  <div>
    <Head>
      <title>Web-Chat</title>
      <script
        type="text/javascript"
        src="https://cdn.scaledrone.com/scaledrone.min.js"
      />
    </Head>
    {children}
  </div>
);

export default Layout;
