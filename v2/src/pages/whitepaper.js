import React from "react"
import fbt from "fbt"
import SEO from "components/seo"
import { useLocaleContext } from "i18n/provider"

const Whitepaper = () => {
  const { slug } = useLocaleContext()
  let prefix = ""
  if (slug !== "") {
    prefix += "_" + slug 
  }
  return (
    <>
      <SEO title={fbt("Bitcoin Whitepaper", "Whitepaper page SEO title")} />
      <iframe
        title="Bitcoin Whitepaper"
        src={"/bitcoin" + prefix + ".pdf"}
        width="100%"
        height="1000px"
        style={{ marginBottom: "0px" }}
      />
    </>
  )
}

export default Whitepaper
