import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>OluwaTosin Ayanda | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:title" content="Rachel Sheikh | Software Engineer" />
        <meta property="og:description" content="Software Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oluwatosinayanda.com/" />
        <meta property="og:site_name" content="OluwaTosin Ayanda" />
        <meta property="og:image" content="/img/dark.png" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href='https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,900,900italic,700italic' />
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet" />
        <link rel="stylesheet" href="/css/stylesv4.css" lang="en-us" />
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' type="text/javascript" />
        <Script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js" />
        <Script src="/js/mainv4.js" type="text/javascript" />
      </Head>
      <main>
        <div id="site">

          <div className="switch-wrapper">
            <div className="sun"></div>
            <div className="toggle-wrapper">
              <input id="switch" type="checkbox" />
              <label id="toggle">Toggle</label>
            </div>
            <div className="moon"></div>
          </div>

          <header className="intro">
            <h1 className="intro__hello">
              Hello World!
              <span className="emoji wave-hand animated"></span>
            </h1>
            <h2 className="intro__tagline">I'm
              <span className="name">OluwaTosin Ayanda</span>, a Software Engineer striving to make the world a better place
            </h2>
            <h3 className="intro__contact">
              <span>Get in touch </span>
              <span className="emoji pointer"></span>
              <span>
                <a href="ayandaoluwatosin@gmail.com" target="_blank" className="highlight-link">ayandaoluwatosin@gmail.com</a>
              </span>
              <span>
              </span>
            </h3>
          </header>

          <section className="section background">
            <div className="section__title">Background</div>
            <div className="section__content">
              <p>I am currently working on the Software Development team at
                <a className="underline-link" href="https://gwclogistics.com/" target="_blank">Gulf Warehousing Company</a>. Through this team, I work on
                a variety of bespoke software development , integration and implementation projects for the Business.
              </p>

              <p>
                I largely align myself with backend engineering , and my languages of choice are C# , Javascript and Go. I am extremely interested in projects
                relating to software integration, devops , distributed systems, and cloud technologies.
              </p>

              <p> Before that, I was a software engineer at
                <a className="underline-link" href="https://www.inlaks.com/" target="_blank">Inlaks</a>,
                <a className="underline-link" href="http://www.codeware.com.ng/" target="_blank">Codeware Technologies</a>, and
                <a className="underline-link" href="#" target="_blank">Besfita , Ltd</a>
              </p>

              <p>
                When I'm not working on professional projects, I enjoy watching new movies/tv shows, blogging , and playing video games.</p>

              <a className="status" href="resume.pdf" target="_blank">
                <div className="status__light">
                  <div className="status__light__ring"></div>
                  <div className="status__light__led"></div>
                </div>
                <div className="status__message">Here's my Resume!</div>
              </a>
              <a className="status" href="https://www.linkedin.com/in/oluwatosin-ayanda-47494a122/" target="_blank">
                <div className="status__light">
                  <div className="status__light__ring"></div>
                  <div className="status__light__led"></div>
                </div>
                <div className="status__message">Here's my LinkedIn profile!</div>
              </a>
            </div>
          </section>

          <section className="section experience">
            <div className="section__title">Education</div>
            <div className="section__content">
              <div className="jobs">
                <div className="job">
                  <div className="time-place">
                    <div className="job__company">
                      <a href="https://www.futa.edu.ng/" target="_blank">Federal University Of Technology Akure</a>
                    </div>
                  </div>
                  <div className="job__position">B.Eng. , Electrical and Electronics Engineering : Fall 2015 </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section experience">
            <div className="section__title">Experience</div>
            <div className="section__content">
              <div className="jobs">
                <div className="job">
                  <div className="job__company"><a href="https://gwclogistics.com/" target="_blank">Gulf Warehousing and Logistics</a></div>
                  <div className="time-place">
                    <div className="job__position">Senior Software Engineer</div>
                    <div className="job__time">Jan 2022 - Present</div>
                  </div>
                  <div className="time-place">
                    <div className="job__position">Full Stack Software Engineer</div>
                    <div className="job__time">Dec 2018 - Dec 2021</div>
                  </div>
                </div>
                <div className="job">
                  <div className="job__company"><a href="https://ledd.com/" target="_blank">Ledd Technologies</a></div>
                  <div className="time-place">
                    <div className="job__position">RPA Developer</div>
                    <div className="job__time">Dec 2018 - Dec 2021</div>
                  </div>
                </div>
                <div className="job">
                  <div className="job__company"><a href="https://www.inlaks.com/" target="_blank">Inlaks</a></div>
                  <div className="time-place">
                    <div className="job__position">Business Application Developer</div>
                    <div className="job__time">July 2018 - Dec 2018</div>
                  </div>
                </div>
                <div className="job">
                  <div className="job__company"><a href="http://www.codeware.com.ng/" target="_blank">Codeware Technologies</a></div>
                  <div className="time-place">
                    <div className="job__position">Temenos Officer : Business Applications </div>
                    <div className="job__time">December 2017 - June 2018</div>
                  </div>
                </div>
                <div className="job">
                  <div className="job__company"><a href="#" target="_blank">Besfita , Ltd.</a></div>
                  <div className="time-place">
                    <div className="job__position">Software Engineer</div>
                    <div className="job__time">Feb 2017 - Dec 2017</div>
                  </div>
                </div>
              </div>
              <a href="resume.pdf" target="_blank" className="arrow-link">View My Resume</a>
            </div>
          </section>

          <footer className="footer">
            <div className="footer__copyright">
              <div className="top">
                <span>Designed &amp; Developed by</span>
              </div>
              <div className="bottom">
                <span>Tosin Ayanda 2020-2021</span>
              </div>
            </div>
            <div className="footer__links">
              <a href="mailto:ayandaoluwatosin@gmail.com" target="_blank" title="email">
                <span className="text">email</span>
              </a>
              <a href="https://twitter.com/technosyncrasy" target="_blank" title="twitter">
                <span className="text">twitter</span>
              </a>
              <a href="https://github.com/tosinayanda" target="_blank" title="github">
                <span className="text">github</span>
              </a>
              <a href="https://www.linkedin.com/in/oluwatosin-ayanda-47494a122" target="_blank" title="linkedin">
                <span className="text">linkedin</span>
              </a>
            </div>
          </footer>

        </div>
      </main>
    </>
  )
}

/** 
 * 
 *     <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
 * **/
