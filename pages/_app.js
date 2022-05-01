import "tailwindcss/tailwind.css"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <>
  
  <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_KEY}"/>
  <Script strategy="afterInteractive">
    {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', ${process.env.ANALYTICS_KEY});
    `}
  </Script>
  {getLayout(<Component {...pageProps} />)}
  </>
}

export default MyApp
