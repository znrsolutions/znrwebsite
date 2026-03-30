"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import CalendlyButton from "../components/CalendlyButton";

export default function Home() {
  const sentences = [
    "Finance Reimagined",
    "Retail Redefined",
    "Payments Simplified",
    "Commerce Transformed",
    "Merchants Empowered",
    "Transactions Modernized",
  ];

  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = sentences[sentenceIndex];
    const speed = isDeleting ? 28 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(word.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setSentenceIndex((i) => (i + 1) % sentences.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, sentenceIndex]);

  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.vignette}></div>
        <div className={styles.accent}></div>

        <div className={styles.container}>
          {/* <p className={styles.staticText}>We are</p> */}

          <h1>
            <span className={styles.typed}>{displayText}</span>
            <span className={styles.cursor}>|</span>
          </h1>

          <p className={styles.sub}>
            Transforming payments · Reshaping finance · Reimagining retail
          </p>

          <div className={styles.scrollArrow}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.wrapper}>
          <span className={styles.eyebrow}>Founder's Message</span>

          <div className={styles.founderImgWrap}>
            <img
              src="/founder.jpg"
              alt="Founder"
              className={styles.founderImg}
            />
            <span className={styles.founderBadge}>Founder & CEO</span>
          </div>

          <h2 className={styles.title}>
            "Building the infrastructure
            <br />
            that commerce runs on"
          </h2>

          <span className={styles.quoteMark}>"</span>

          <p className={styles.message}>
            At ZNR Solutions, we began with a clear belief that the way money
            moves and businesses operate should be faster, smarter, and more
            secure. The finance and retail industries have long been due for a
            transformation, not just in efficiency, but in trust and resilience.
          </p>
          <p className={styles.message}>
            We built ZNR to be part of that change. From seamless payment
            ecosystems to intelligent retail solutions, our approach is rooted
            in innovation, scalability, and real-world impact. But as digital
            ecosystems evolve, so do the risks which is why cybersecurity is not
            an afterthought for us, but a core foundation of everything we
            design and deliver.
          </p>
          <p className={styles.message}>
            In today’s interconnected world, businesses need more than just
            technology they need systems they can rely on. At ZNR, we focus on
            building solutions that are not only high-performing but also
            secure, compliant, and future-ready.
          </p>
          <p className={styles.message}>
            Our mission is simple: to empower businesses with the tools,
            intelligence, and protection they need to grow confidently in a
            rapidly changing digital economy.
          </p>

          <div className={styles.divider}></div>

          <p className={styles.founderName}>Amman Lantra</p>
          <p className={styles.founderTitle}>Founder & CEO, ZNR Solutions</p>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>Our Clients</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <img src="/p1.png" alt="Evolute" />
              <div className={styles.overlay}>
                <h3>Evolute</h3>
                <p>
                  Evolute is a business consulting and outsourcing solutions
                  provider based in Sri Lanka helping organizations improve
                  operational efficiency.
                </p>
              </div>
              <a
                href="https://evolute.lk"
                target="_blank"
                className={styles.link}
              >
                <span>→</span>
              </a>
            </div>

            <div className={styles.card}>
              <img src="/p2.png" alt="MR Events" />
              <div className={styles.overlay}>
                <h3>Mr Events</h3>
                <p>
                  MR Events is an event management platform that showcases
                  services for corporate events, product launches, and concerts.
                </p>
              </div>
              <a
                href="https://mr-events.net/"
                target="_blank"
                className={styles.link}
              >
                <span>→</span>
              </a>
            </div>

            <div className={styles.card}>
              <img src="/p3.png" alt="Chain Reclaim" />
              <div className={styles.overlay}>
                <h3>Chain Reclaim</h3>
                <p>
                  Blockchain-based fund recovery service helping victims of
                  crypto scams recover lost digital assets.
                </p>
              </div>
              <a
                href="https://chainreclaim.com"
                target="_blank"
                className={styles.link}
              >
                <span>→</span>
              </a>
            </div>

            <div className={styles.card}>
              <img src="/p4.png" alt="Book My Tables" />
              <div className={styles.overlay}>
                <h3>Book My Tables</h3>
                <p>
                  Online restaurant booking platform helping businesses manage
                  reservations and customers book tables easily.
                </p>
              </div>
              <a
                href="https://www.bookmytables.co.uk/"
                target="_blank"
                className={styles.link}
              >
                <span>→</span>
              </a>
            </div>

            <div className={styles.card}>
              <img src="/p5.png" alt="Minerva" />
              <div className={styles.overlay}>
                <h3>Minerva</h3>
                <p>
                  Business consulting and digital solutions platform improving
                  operational efficiency and sustainable growth.
                </p>
              </div>
              <a
                href="https://min-erva.com/"
                target="_blank"
                className={styles.link}
              >
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.glowLeft}></div>
        <div className={styles.glowRight}></div>
        <div className={styles.gridLines}></div>

        <div className={styles.ctaContainer}>
          {/* <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            <span>Let's Work Togetsher</span>
          </div> */}

          <h2>
            Ready to <em>revolutionize</em>
            <br />
            your payments?
          </h2>

          <div className={styles.divider}></div>

          <p className={styles.sub}>
            Let's map out your team needs, technologies, and timelines — and
            build the payment infrastructure your business deserves.
          </p>

          <div className={styles.btnRow}>
            <CalendlyButton />
            <span className={styles.note}>
              No commitment · Free consultation
            </span>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}></span>
              <span>Finance experts</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}></span>
              <span>Retail solutions</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}></span>
              <span>Fast onboarding</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>Built with Purpose</h2>

          <div className={styles.gridProducts}>
            {/* PRIME CRM */}
            <div className={styles.card}>
              <div className={styles.logoWrap}>
                <svg
                  width="132"
                  height="18"
                  viewBox="0 0 132 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.368 5.664C13.368 6.688 13.128 7.624 12.648 8.472C12.184 9.304 11.472 9.976 10.512 10.488C9.56801 10.984 8.40801 11.232 7.03201 11.232H4.70401V16.944H5.90086e-06V0.0239992H7.03201C8.39201 0.0239992 9.54401 0.263999 10.488 0.744C11.448 1.224 12.168 1.888 12.648 2.736C13.128 3.584 13.368 4.56 13.368 5.664ZM6.57601 7.488C7.90401 7.488 8.56801 6.88 8.56801 5.664C8.56801 4.432 7.90401 3.816 6.57601 3.816H4.70401V7.488H6.57601ZM23.8258 16.944L20.4658 10.704H19.9618V16.944H15.2578V0.0239992H22.6738C24.0338 0.0239992 25.1858 0.263999 26.1298 0.744C27.0738 1.208 27.7858 1.856 28.2658 2.688C28.7458 3.504 28.9858 4.424 28.9858 5.448C28.9858 6.6 28.6658 7.616 28.0258 8.496C27.4018 9.36 26.4818 9.976 25.2658 10.344L29.0818 16.944H23.8258ZM19.9618 7.488H22.2898C22.9298 7.488 23.4098 7.336 23.7298 7.032C24.0498 6.728 24.2098 6.288 24.2098 5.712C24.2098 5.168 24.0418 4.744 23.7058 4.44C23.3858 4.12 22.9138 3.96 22.2898 3.96H19.9618V7.488ZM35.829 0.0239992V16.944H31.125V0.0239992H35.829ZM58.2598 0.0239992V16.944H53.5558V7.608L50.3638 16.944H46.4278L43.2118 7.536V16.944H38.5078V0.0239992H44.1958L48.4438 11.016L52.5958 0.0239992H58.2598ZM65.6415 3.792V6.552H71.0415V10.128H65.6415V13.176H71.7615V16.944H60.9375V0.0239992H71.7615V3.792H65.6415ZM80.1724 8.568C80.1724 6.936 80.5404 5.472 81.2764 4.176C82.0124 2.864 83.0124 1.84 84.2764 1.104C85.5564 0.368 86.9724 -4.76837e-07 88.5244 -4.76837e-07C90.3484 -4.76837e-07 91.9404 0.44 93.3004 1.32C94.6604 2.2 95.6524 3.448 96.2764 5.064H93.6604C93.1964 4.056 92.5244 3.28 91.6444 2.736C90.7804 2.192 89.7404 1.92 88.5244 1.92C87.3564 1.92 86.3084 2.192 85.3804 2.736C84.4524 3.28 83.7244 4.056 83.1964 5.064C82.6684 6.056 82.4044 7.224 82.4044 8.568C82.4044 9.896 82.6684 11.064 83.1964 12.072C83.7244 13.064 84.4524 13.832 85.3804 14.376C86.3084 14.92 87.3564 15.192 88.5244 15.192C89.7404 15.192 90.7804 14.928 91.6444 14.4C92.5244 13.856 93.1964 13.08 93.6604 12.072H96.2764C95.6524 13.672 94.6604 14.912 93.3004 15.792C91.9404 16.656 90.3484 17.088 88.5244 17.088C86.9724 17.088 85.5564 16.728 84.2764 16.008C83.0124 15.272 82.0124 14.256 81.2764 12.96C80.5404 11.664 80.1724 10.2 80.1724 8.568ZM108.335 16.944L104.351 10.104H101.711V16.944H99.5274V0.216H104.927C106.191 0.216 107.255 0.432 108.119 0.864C108.999 1.296 109.655 1.88 110.087 2.616C110.519 3.352 110.735 4.192 110.735 5.136C110.735 6.288 110.399 7.304 109.727 8.184C109.071 9.064 108.079 9.648 106.751 9.936L110.951 16.944H108.335ZM101.711 8.352H104.927C106.111 8.352 106.999 8.064 107.591 7.488C108.183 6.896 108.479 6.112 108.479 5.136C108.479 4.144 108.183 3.376 107.591 2.832C107.015 2.288 106.127 2.016 104.927 2.016H101.711V8.352ZM131.097 0.335999V16.944H128.913V4.56L123.393 16.944H121.857L116.313 4.536V16.944H114.129V0.335999H116.481L122.625 14.064L128.769 0.335999H131.097Z"
                    fill="#DB02DD"
                  />
                </svg>
                <span className={styles.productTag}>CRM</span>
              </div>
              <div className={styles.overlay}>
                <h3>PRIME CRM</h3>
                <p>
                  A powerful customer relationship management platform built to
                  help businesses streamline sales pipelines, manage contacts,
                  and drive revenue growth.
                </p>
              </div>
              {/* <a href="" target="_blank" className={styles.link}>
                <span>→</span>
              </a> */}
            </div>

            {/* PRIME HRM */}
            <div className={styles.card}>
              <div
                className={styles.logoWrap}
                style={{ background: "#0f1a16" }}
              >
                <svg
                  width="250"
                  height="50"
                  viewBox="0 0 250 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.0352 14.6309H39.3008C40.9414 14.6309 42.3633 14.8086 43.5664 15.1641C44.7695 15.5195 45.7676 16.0345 46.5605 16.709C47.3535 17.3743 47.9414 18.1901 48.3242 19.1562C48.7161 20.1224 48.9121 21.2116 48.9121 22.4238C48.9121 23.5632 48.7207 24.6159 48.3379 25.582C47.9551 26.5482 47.3672 27.3867 46.5742 28.0977C45.7904 28.7995 44.7969 29.3509 43.5938 29.752C42.3906 30.1439 40.9688 30.3398 39.3281 30.3398L32.3691 30.3262V36H28.0352V14.6309ZM39.4102 26.5801C40.2305 26.5801 40.946 26.4844 41.5566 26.293C42.1764 26.0924 42.6914 25.8145 43.1016 25.459C43.5208 25.0944 43.8307 24.6569 44.0312 24.1465C44.2409 23.627 44.3457 23.0527 44.3457 22.4238C44.3457 21.1569 43.931 20.1725 43.1016 19.4707C42.2812 18.7598 41.0508 18.4043 39.4102 18.4043H32.3691V26.5801H39.4102ZM53.6562 14.6309H64.5254C66.166 14.6309 67.5879 14.804 68.791 15.1504C69.9941 15.4876 70.9922 15.9798 71.7852 16.627C72.5781 17.2741 73.166 18.0625 73.5488 18.9922C73.9408 19.9219 74.1367 20.9746 74.1367 22.1504C74.1367 22.9434 74.041 23.6999 73.8496 24.4199C73.6582 25.1309 73.362 25.7871 72.9609 26.3887C72.569 26.9902 72.0723 27.528 71.4707 28.002C70.8691 28.4668 70.1628 28.8542 69.3516 29.1641L74 36H68.6953L64.6758 29.9297H64.5527L57.9902 29.916V36H53.6562V14.6309ZM64.6348 26.1699C65.4551 26.1699 66.1706 26.0742 66.7812 25.8828C67.401 25.6914 67.916 25.4225 68.3262 25.0762C68.7454 24.7298 69.0553 24.3105 69.2559 23.8184C69.4655 23.3171 69.5703 22.7611 69.5703 22.1504C69.5703 20.9564 69.1602 20.0358 68.3398 19.3887C67.5195 18.7324 66.2845 18.4043 64.6348 18.4043H57.9902V26.1699H64.6348ZM78.7305 14.6309H83.0918V36H78.7305V14.6309ZM88.6426 14.6309H92.9766L100.742 22.4238L108.508 14.6309H112.842V36H108.508V20.6328L100.742 28.1113L92.9766 20.6328V36H88.6426V14.6309ZM118.926 14.6309H137.123V18.4316H123.26V22.6973H135.537V26.2656H123.26V32.2129H137.41V36H118.926V14.6309ZM158.807 14.6309H163.4L173.736 36H169.184L167.475 32.4043H154.992L153.338 36H148.771L158.807 14.6309ZM165.766 28.8359L161.145 19.1289L156.646 28.8359H165.766ZM183.498 18.4316H175.609V14.6309H195.721V18.4316H187.832V36H183.498V18.4316ZM201.354 29.6426C202.128 30.0801 202.912 30.4766 203.705 30.832C204.507 31.1784 205.337 31.4746 206.193 31.7207C207.05 31.9577 207.948 32.14 208.887 32.2676C209.835 32.3952 210.842 32.459 211.908 32.459C213.193 32.459 214.287 32.377 215.189 32.2129C216.092 32.0397 216.826 31.8073 217.391 31.5156C217.965 31.2148 218.38 30.8594 218.635 30.4492C218.899 30.0391 219.031 29.5924 219.031 29.1094C219.031 28.3346 218.708 27.724 218.061 27.2773C217.413 26.8216 216.415 26.5938 215.066 26.5938C214.474 26.5938 213.85 26.6348 213.193 26.7168C212.537 26.7897 211.872 26.8717 211.197 26.9629C210.532 27.054 209.871 27.1406 209.215 27.2227C208.568 27.2956 207.957 27.332 207.383 27.332C206.426 27.332 205.505 27.209 204.621 26.9629C203.746 26.7168 202.967 26.3477 202.283 25.8555C201.609 25.3633 201.071 24.748 200.67 24.0098C200.269 23.2715 200.068 22.4102 200.068 21.4258C200.068 20.8424 200.146 20.2637 200.301 19.6895C200.465 19.1152 200.72 18.5684 201.066 18.0488C201.422 17.5202 201.878 17.0326 202.434 16.5859C202.99 16.1302 203.66 15.7383 204.443 15.4102C205.236 15.082 206.148 14.8268 207.178 14.6445C208.217 14.4531 209.397 14.3574 210.719 14.3574C211.676 14.3574 212.637 14.4121 213.604 14.5215C214.57 14.6217 215.508 14.7676 216.42 14.959C217.34 15.1504 218.225 15.3828 219.072 15.6562C219.92 15.9206 220.708 16.2168 221.438 16.5449L219.537 20.0449C218.936 19.7806 218.288 19.5391 217.596 19.3203C216.903 19.0924 216.178 18.8965 215.422 18.7324C214.665 18.5684 213.882 18.4408 213.07 18.3496C212.268 18.2493 211.448 18.1992 210.609 18.1992C209.415 18.1992 208.431 18.2858 207.656 18.459C206.891 18.6322 206.28 18.8555 205.824 19.1289C205.368 19.3932 205.049 19.694 204.867 20.0312C204.694 20.3594 204.607 20.6875 204.607 21.0156C204.607 21.6536 204.895 22.1777 205.469 22.5879C206.043 22.9889 206.918 23.1895 208.094 23.1895C208.568 23.1895 209.11 23.1576 209.721 23.0938C210.34 23.0208 210.988 22.9434 211.662 22.8613C212.346 22.7793 213.038 22.7064 213.74 22.6426C214.451 22.5697 215.139 22.5332 215.805 22.5332C217.062 22.5332 218.174 22.6745 219.141 22.957C220.116 23.2396 220.932 23.6452 221.588 24.1738C222.244 24.6934 222.741 25.3268 223.078 26.0742C223.415 26.8125 223.584 27.6419 223.584 28.5625C223.584 29.793 223.297 30.8913 222.723 31.8574C222.158 32.8145 221.346 33.6257 220.289 34.291C219.241 34.9473 217.974 35.4486 216.488 35.7949C215.003 36.1322 213.348 36.3008 211.525 36.3008C210.322 36.3008 209.146 36.2233 207.998 36.0684C206.85 35.9225 205.747 35.7129 204.689 35.4395C203.641 35.1569 202.639 34.8242 201.682 34.4414C200.734 34.0495 199.854 33.6211 199.043 33.1562L201.354 29.6426Z"
                    fill="url(#paint0_linear_222_214)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_222_214"
                      x1="259.5"
                      y1="25"
                      x2="2.00001"
                      y2="25"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFF0AB" />
                      <stop offset="1" stopColor="#82E0D0" />
                    </linearGradient>
                  </defs>
                </svg>
                <span
                  className={styles.productTag}
                  style={{
                    color: "#82E0D0",
                    background: "rgba(130,224,208,0.1)",
                    border: "1px solid rgba(130,224,208,0.2)",
                  }}
                >
                  HRM
                </span>
              </div>
              <div className={styles.overlay}>
                <h3>PRIME HRM</h3>
                <p>
                  An end-to-end human resource management solution covering
                  employee onboarding, payroll, attendance, and performance
                  tracking.
                </p>
              </div>
              {/* <a href="" target="_blank" className={styles.link}>
                <span>→</span>
              </a> */}
            </div>

            {/* PRIME TRADER */}
            <div className={styles.card}>
              <div
                className={styles.logoWrap}
                style={{ background: "#0f1520" }}
              >
                <svg
                  width="250"
                  height="50"
                  viewBox="0 0 250 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="8"
                    y="38"
                    fontFamily="Georgia, serif"
                    fontSize="30"
                    fontWeight="700"
                    fill="url(#traderGrad)"
                    letterSpacing="1.5"
                  >
                    PRIME TRADER
                  </text>
                  <defs>
                    <linearGradient
                      id="traderGrad"
                      x1="0"
                      y1="0"
                      x2="250"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#38BDF8" />
                      <stop offset="0.5" stopColor="#818CF8" />
                      <stop offset="1" stopColor="#FB923C" />
                    </linearGradient>
                  </defs>
                </svg>
                <span
                  className={styles.productTag}
                  style={{
                    color: "#38BDF8",
                    background: "rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                  }}
                >
                  TRADER
                </span>
              </div>
              <div className={styles.overlay}>
                <h3>PRIME Trader</h3>
                <p>
                  A next-generation trading platform delivering real-time market
                  data, smart order execution, and advanced analytics for retail
                  and institutional traders.
                </p>
              </div>
              {/* <a href="" target="_blank" className={styles.link}>
    <span>→</span>
  </a> */}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog}>
        <div className={styles.container}>
          <h2>
            The latest from <br />
            <span>Creative Software</span>
          </h2>

          <div className={styles.grid}>
            <a
              href="https://www.linkedin.com/posts/znr-solutions-pvt-ltd_webdevelopment-webdesign-digitaltransformation-activity-7424436198082977792-qZ-F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGTvwAoBGN7FPhMJrTntAh5qJcdeaREDUFg"
              target="_blank"
              className={styles.card}
            >
              <img src="/blog.jpg" alt="" />
              <p>
                Scalable web solutions aren’t a luxury they’re a necessity for
                modern brands.
              </p>

              <div className={styles.footer}>
                <span>ZNR Solutions</span>
                <small>Feb 4</small>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/posts/znr-solutions-pvt-ltd_happynewyear-socialmediamarketing-digitalmarketing-activity-7412125381576699904-IQ7b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGTvwAoBGN7FPhMJrTntAh5qJcdeaREDUFg"
              target="_blank"
              className={styles.card}
            >
              <img src="/case.jpg" alt="" />
              <p>Happy New Year 2026</p>

              <div className={styles.footer}>
                <span>ZNR Solutions</span>
                <small>Dec 17</small>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/posts/znr-solutions-pvt-ltd_socialmediastrategy-digitalmarketing-brandgrowth-activity-7428040842214572032-NUl_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGTvwAoBGN7FPhMJrTntAh5qJcdeaREDUFg"
              target="_blank"
              className={styles.card}
            >
              <img src="/download.jpg" alt="" />
              <p>
                Effective social media management goes beyond consistent posting
                it requires strategy, insight, and measurable execution.
              </p>

              <div className={styles.footer}>
                <span>ZNR Solutions</span>
                <small>July 30</small>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/posts/znr-solutions-pvt-ltd_digitalmarketing-b2bmarketing-growthstrategy-activity-7422537555914706945-lmFQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGTvwAoBGN7FPhMJrTntAh5qJcdeaREDUFg"
              target="_blank"
              className={styles.card}
            >
              <img src="/team1.jpg" alt="" />
              <p>
                Digital marketing goes beyond running ads it’s about building
                visibility, driving qualified leads, and creating sustainable
                growth.
              </p>

              <div className={styles.footer}>
                <span>ZNR Solutions</span>
                <small>July 22</small>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
