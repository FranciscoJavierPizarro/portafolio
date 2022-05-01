import "tailwindcss/tailwind.css"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <>
  
  <Script id="ga1"strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_KEY}"/>
  <Script id="ga2"strategy="afterInteractive">
    {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', ${process.env.NEXT_PUBLIC_ANALYTICS_KEY});
    `}
  </Script>
  {getLayout(<Component {...pageProps} />)}
  </>
}

export default MyApp
