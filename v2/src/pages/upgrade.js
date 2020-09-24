import React from "react"
import fbt from "fbt"
import SEO from "components/seo"
import { Container } from "react-bootstrap"
import PrimaryButton from "components/buttons/primary-button"
import Link from "global/link"
import { useLocaleContext } from "i18n/provider"
import S from "./upgrade.module.scss"

const ACTIVATION_TIMESTAMP = 1605441600

const UpgradePage = () => {
  const locale = useLocaleContext()
  const upgradeTimeStr = new Date(
    ACTIVATION_TIMESTAMP * 1000
  ).toLocaleDateString(locale.bcp47, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <>
      <SEO title={fbt("How to Upgrade", "Upgrade page SEO title")} />
      <Container className={S.linkcontainer}>
        <h2 className="centerh2">
          <fbt desc="Upgrade page heading">How to Upgrade</fbt>
        </h2>
        <h3>{upgradeTimeStr}</h3>
        <h3>
          <fbt desc="Annoucement bar inner headline">
            Planned Network Upgrade
          </fbt>
        </h3>
        <p>
          The Bitcoin Cash network will undergo a protocol upgrade as per the
          roadmap. Businesses and individuals who use the Bitcoin Cash network
          should check to ensure that their software is compatible with the
          upgrade.
        </p>
        <PrimaryButton
          noMarginLeft={true}
          buttonText={fbt(
            "See Roadmap",
            "'See Roadmap' button of the annoucement bar"
          )}
          href={"/roadmap/"}
        />

        <h4 className={S.header}>
          <fbt desc="Annoucement bar 'Compatible Implementations'">
            Compatible Implementations:
          </fbt>
        </h4>
        <Link href="https://www.bitcoinabc.org/2020-08-18-bitcoin-abc-0-22-0/">
          Bitcoin ABC 0.22.x
        </Link>
        <h4 className={S.header}>
          <fbt desc="Annoucement bar 'Additional Information:'">
            Additional Information:
          </fbt>
        </h4>
        <Link href="https://blog.bitcoinabc.org/2020/09/14/preparing-businesses-for-a-successful-network-upgrade/">
          <fbt desc="Upgrade page 'Prepare for the Upgrade' header">
            Prepare for the Upgrade
          </fbt>
        </Link>
        <br />
        <Link href="/spec/2020-11-15-upgrade.html">
          <fbt desc="Annoucement bar 'Upgrade Specification'">
            Upgrade Specification
          </fbt>
        </Link>
        <br />
        <Link href="https://github.com/bitcoincashorg/bitcoincash.org/blob/master/workgroups/wg-testing/2020-11-15_upgrade_testnet.md">
          <fbt desc="Annoucement bar 'Testnet Information'">
            Testnet Information
          </fbt>
        </Link>
      </Container>
    </>
  )
}

export default UpgradePage
