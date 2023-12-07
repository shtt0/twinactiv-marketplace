import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="TWINACTIV NFT Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h2 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}></span>
                <br />
                Buy & Sell to earn.
              </h2>
              <p className={styles.heroSubtitle}>
                <b>BUY</b>
                =Missionクリアが難しい、面倒なユーザはMarketplaceでNFT
                Itemsを手っ取り早く入手し、JI Tokenを獲得できます。
                <br />
                <b>Sell</b>
                =逆に、Missionを沢山達成したユーザはMarketplaceでNFT
                Itemsを販売することで、Earnが可能です。
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
