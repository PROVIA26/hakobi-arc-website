import './App.css'
import heroVans from './assets/hero-vans.png'
import messageShiga from './assets/message-shiga.png'

function App() {
  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          <a href="#top" className="logo">
            ハコビ・アーク
          </a>

          <nav className="nav">
            <a href="#about">私たちについて</a>
            <a href="#service">事業内容</a>
            <a href="#company">会社概要</a>

            <a href="#contact" className="nav-contact">
              お問い合わせ
            </a>
          </nav>

        </div>
      </header>


      <main id="top">

        {/* HERO */}
        <section className="hero">

          {/* 軽バン画像を直接表示 */}
          <img
            src={heroVans}
            alt="白い軽貨物車両"
            className="hero-bg"
          />

          <div className="hero-overlay"></div>

          <div className="hero-inner">

            <div className="hero-content">

              <p className="hero-label">
                LOGISTICS SUPPORT
              </p>

              <h1>
                運ぶ人を、
                <br />
                支える。
              </h1>

              <p className="hero-text">
                車両と人材の力で、
                <br />
                運送事業者の未来を支える。
              </p>

              <a href="#service" className="hero-button">
                事業内容を見る
                <span>→</span>
              </a>

            </div>

          </div>

        </section>


        {/* ABOUT */}
<section id="about" className="section about">

  <div className="section-inner">

    <p className="section-label">
      ABOUT US
    </p>

    <div className="about-grid">

      <div className="about-title">

        <h2>
          運送業界を、
          <br />
          もっと強く。
        </h2>

        <p className="about-message">
          車両が足りない。
          <br />
          人が足りない。
          <br />
          その課題を、私たちが支える。
        </p>

      </div>

      <div className="about-description">

        <p>
          ハコビ・アークは、
          運送事業者が抱える「車両」と「人」の課題に向き合い、
          安定した事業運営を支える会社です。
        </p>

        <p>
          必要なときに必要な車両を。
          <br />
          必要な現場に必要な人材を。
        </p>

        <p>
          運送事業者が本来の仕事に集中できる環境をつくり、
          事業の成長を支えていきます。
        </p>

      </div>

    </div>

  </div>

</section>


{/* SERVICE */}
<section id="service" className="section service">

  <div className="section-inner">

    <div className="service-heading">
      <p className="section-label">
        SERVICE
      </p>

      <h2>事業内容</h2>

      <p className="service-lead">
        車両と人材。
        <br />
        運送事業に必要な力を、ワンストップで。
      </p>
    </div>


    <div className="service-grid">

      <div className="service-card">

        <div className="service-card-top">
          <span className="service-number">01</span>
          <span className="service-en">VEHICLE LEASE</span>
        </div>

        <h3>
          軽貨物車両
          <br />
          リース
        </h3>

        <p>
          軽貨物運送に必要な車両を、
          運送事業者へ提供します。
          初期費用を抑えた事業スタートから
          車両の増台まで、柔軟にサポートします。
        </p>

      </div>


      <div className="service-card">

        <div className="service-card-top">
          <span className="service-number">02</span>
          <span className="service-en">DRIVER SUPPORT</span>
        </div>

        <h3>
          ドライバー
          <br />
          人材支援
        </h3>

        <p>
          人材不足に悩む運送事業者へ、
          必要なドライバー人材をつなぎ、
          安定した配送体制づくりを支援します。
        </p>

      </div>


      <div className="service-card service-card-dark">

        <div className="service-card-top">
          <span className="service-number">03</span>
          <span className="service-en">BUSINESS SUPPORT</span>
        </div>

        <h3>
          運送事業者
          <br />
          支援
        </h3>

        <p>
          車両と人材の両面から、
          運送事業者が抱える課題を解決し、
          事業拡大と安定した運営をサポートします。
        </p>

      </div>

    </div>

  </div>

</section>


        {/* MESSAGE */}
<section
  className="message message-photo"
  style={{ backgroundImage: `url(${messageShiga})` }}
>

  <div className="message-overlay"></div>

  <div className="message-inner">

    <p className="section-label">
      MESSAGE
    </p>

    <h2>
      運ぶ仕事に、
      <br />
      新しい可能性を。
    </h2>

    <p>
      一台の車両、一人のドライバーから、
      新しい仕事が生まれる。
      <br />
      私たちは、運送に関わる人たちが
      挑戦できる環境をつくります。
    </p>

  </div>

</section>

{/* COMPANY */}
<section id="company" className="section company">

  <div className="section-inner">

    <div className="company-heading">
      <p className="section-label">
        COMPANY
      </p>

      <h2>会社概要</h2>

      <p className="company-lead">
        運送に関わる人と事業を支え、<br />
        新しい可能性をつくる。
      </p>
    </div>

    <div className="company-table">

      <div className="company-row">
        <span>会社名</span>
        <strong>ハコビ・アーク</strong>
      </div>

      <div className="company-row">
        <span>事業内容</span>
        <strong>
          軽貨物車両リース<br />
          ドライバー人材支援<br />
          運送事業者支援
        </strong>
      </div>

     <div className="company-row">
  <span>事務所所在地</span>
  <strong>滋賀県近江八幡市安土町上豊浦1385-103</strong>
</div>

      <div className="company-row">
        <span>代表</span>
        <strong>土橋　あゆみ</strong>
      </div>

    </div>

  </div>

</section>


{/* CONTACT */}
<section id="contact" className="contact">

  <div className="contact-inner">

    <p className="section-label">
      CONTACT
    </p>

    <h2>
      まずは、お気軽に。
    </h2>

    <p className="contact-lead">
      車両のこと、人材のこと、運送事業のこと。<br />
      ハコビ・アークが、事業に合わせてサポートします。
    </p>

    <a href="mailto:miyako1174@gmail.com" className="contact-button">
      <span>お問い合わせ</span>
      <span className="contact-arrow">→</span>
    </a>

  </div>

</section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">

          <div>
            <p className="footer-logo">
              ハコビ・アーク
            </p>

            <p className="footer-copy">
              運ぶ人を、支える。
            </p>
          </div>

          <p className="copyright">
            © ハコビ・アーク All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App