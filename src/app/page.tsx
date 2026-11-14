import Image from "next/image";
import Link from "next/link";
import "./social.css";

const email = "maddie@ugcbymaddie.com";
const orchidIG = "https://www.instagram.com/orchid.avedasalon/";
const mailto = (plan: string) =>
  `mailto:${email}?subject=${encodeURIComponent(`Social Media Management: ${plan}`)}`;

const Arrow = () => <span className="arrow" aria-hidden>↗</span>;

const week = [
  ["Mon", "Carousel", "Before + after"],
  ["Tue", "Video", "Day on the job"],
  ["Wed", "Image", "Finished work"],
  ["Thu", "Video", "Meet the team"],
  ["Fri", "Carousel", "Tips + FAQs"],
];

const numbers = [
  ["20+", "custom posts every month"],
  ["2", "on-site capture days a month on Business"],
  ["0", "contracts. Cancel anytime."],
];

const compare = [
  ["Who makes the content", "You, after hours", "A template + stock photos", "Maddie, on the job with you"],
  ["Your real team on camera", "Rarely", "Rarely", "Every month, coached"],
  ["Posts every week", "When you remember", "Usually", "5, every week"],
  ["Commitment", "Your nights and weekends", "Often a long contract", "Month to month"],
];

const included = [
  ["01", "5 posts every week", "A steady mix of carousels, short-form video, and single images. Every post is planned around your business goals, not a generic content calendar."],
  ["02", "Captured on the job", "Once or twice a month I come to you and film the real work: your crew, your space, your customers' results. No stock photos, no staged sets."],
  ["03", "Your team, coached on camera", "You or your employees get walked through it in the moment, so they show up confident, natural, and fun to watch. No experience needed."],
  ["04", "Captions + posting handled", "I write it, schedule it, and post it. You don't touch the app unless you want to."],
  ["05", "No contracts", "Month to month. Stay because it's working. Cancel anytime."],
];

const fits = [
  ["Salons + spas", "Transformations, stylists, and the vibe of the chair."],
  ["Home service crews", "Before and afters, job sites, and the people who show up."],
  ["Boutiques + retail", "New arrivals, styling, and the faces behind the counter."],
  ["Restaurants + cafes", "The kitchen, the regulars, and what's coming out of the window."],
];

const reel = [
  { id: "7672910964223659277", account: "maddie.brass", title: "The 10-minute outfit system" },
  { id: "7673326905587715342", account: "maddie.brass", title: "Malinois approved" },
  { id: "7670637444697541918", account: "brassbookclub", title: "The reading room at golden hour" },
];

const steps = [
  ["1", "Plan the goals", "A quick call on what you want social to do: more calls, more bookings, more hires, or more trust in your name."],
  ["2", "Capture day", "I show up on the job, film the work, and coach whoever's on camera. You keep working."],
  ["3", "Post 5x a week", "I edit, write, and post. You get a consistent, real presence without lifting a finger."],
];

const plans = [
  {
    name: "Standard",
    price: "$999",
    blurb: "Consistent, custom content for owners who want to stay visible.",
    features: [
      "5 custom posts per week",
      "Carousels, images + short-form video",
      "Content plan built around your goals",
      "1 on-the-job capture day per month",
      "On-camera coaching for you",
      "Captions + posting handled",
    ],
  },
  {
    name: "Business",
    price: "$1,499",
    blurb: "More capture, more faces, more of your team in the feed.",
    featured: true,
    features: [
      "Everything in Standard",
      "2 on-the-job capture days per month",
      "On-camera coaching for your employees",
      "More variety: more crew, jobs + locations",
      "Priority scheduling for capture days",
    ],
  },
];

const faqs = [
  ["Is there a contract?", "No. Both plans are month to month and you can cancel anytime."],
  ["What if my team is camera shy?", "That's normal and it's part of the job. I coach whoever is on camera in the moment so they come across confident and like themselves. Most people loosen up within the first few takes."],
  ["Do I have to stop working for capture days?", "No. I film around the real work. The best content is your team doing what they already do well."],
  ["Do you actually post for me?", "Yes. I write the captions, schedule, and post. You approve the plan; I handle the rest."],
  ["What kind of posts will I get?", "A mix of carousels, single images, and short-form videos, chosen around your goals each month. Expect 20+ posts a month."],
];

export default function Home() {
  return (
    <div id="top" className="smm">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-nav">
        <Link href="/" className="wordmark">MADDIE <i>BRASS</i></Link>
        <nav className="desktop-links" aria-label="Primary">
          <a href="#included">What&apos;s included</a>
          <a href="#clients">Clients</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <Link href="/ugc">UGC work</Link>
        </nav>
        <a className="nav-cta" href="#pricing">See pricing <Arrow /></a>
      </header>

      <main id="main">
        <section className="hero section-shell smm-hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Done-for-you social media</p>
            <h1>Your business, <em>on camera.</em><br />Posted 5x a week.</h1>
            <p className="hero-body">
              I capture your team on the job, coach them to be confident and fun on camera, and turn it into
              five custom posts every week. You run the business. I run the feed.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#pricing">Plans from $999/mo <Arrow /></a>
              <a className="text-link" href="#included">What&apos;s included <span>↓</span></a>
            </div>
            <a className="smm-trusted" href="#clients">
              <span>Trusted by</span>
              <b>Orchid Salon &amp; Spa</b>
              <small>Aveda salon · Fayetteville, AR</small>
            </a>
          </div>

          <div className="smm-week" aria-label="Example posting week">
            <div className="smm-week-photo">
              <Image src="/assets/profiles/maddie-main.jpg" fill priority sizes="(max-width:900px) 92vw, 40vw" alt="Maddie Brass, social media manager and content creator" />
            </div>
            <ol>
              {week.map(([d, f, t]) => (
                <li key={d}><b>{d}</b><span>{f}</span><small>{t}</small></li>
              ))}
            </ol>
            <div className="stamp">5X<br /><i>a week</i><small>every week</small></div>
          </div>
        </section>

        <div className="ticker"><div>CAROUSELS <i>✦</i> SHORT-FORM VIDEO <i>✦</i> ON-THE-JOB CAPTURE <i>✦</i> TEAM COACHING <i>✦</i> 5 POSTS A WEEK <i>✦</i> NO CONTRACTS <i>✦</i> CAROUSELS <i>✦</i> SHORT-FORM VIDEO <i>✦</i></div></div>

        <section className="smm-numbers section-shell" aria-label="At a glance">
          {numbers.map(([n, l]) => (
            <div key={l}><b>{n}</b><span>{l}</span></div>
          ))}
        </section>

        <section className="smm-problem">
          <div className="section-shell">
            <div className="section-heading">
              <p className="kicker light">THE PROBLEM</p>
              <h2>You know you should be posting.<br /><em>You don&apos;t have the time.</em></h2>
              <p>Your best marketing is already happening every day: the work, the team, the results. It just never makes it onto your feed.</p>
            </div>
            <div className="smm-compare" role="table" aria-label="Doing it yourself vs an agency vs Maddie">
              <div className="smm-compare-row smm-compare-head" role="row">
                <span role="columnheader" />
                <span role="columnheader">Doing it yourself</span>
                <span role="columnheader">Typical agency</span>
                <span role="columnheader">Maddie</span>
              </div>
              {compare.map(([label, diy, agency, maddie]) => (
                <div key={label} className="smm-compare-row" role="row">
                  <span role="rowheader">{label}</span>
                  <span role="cell">{diy}</span>
                  <span role="cell">{agency}</span>
                  <span role="cell">{maddie}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="included" className="services section-shell">
          <div className="section-heading services-heading">
            <p className="kicker">01 / WHAT&apos;S INCLUDED</p>
            <h2>Real work.<br /><em>Real people. Every week.</em></h2>
          </div>
          <div className="service-list smm-included">
            {included.map(([n, t, c]) => (
              <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>
            ))}
          </div>
        </section>

        <section id="clients" className="smm-client">
          <div className="section-shell smm-client-grid">
            <div>
              <p className="kicker light">02 / CLIENTS</p>
              <h2>Orchid Salon <em>&amp; Spa</em></h2>
              <p className="smm-client-meta">Aveda salon · Fayetteville, Arkansas</p>
              <p>
                Orchid trusts Maddie with their social media. Stylists on camera, real transformations, and a feed
                that looks like the salon actually feels.
              </p>
              <a className="button button-cream" href={orchidIG} target="_blank" rel="noreferrer">
                See their feed <Arrow />
              </a>
            </div>
            <a className="smm-client-card" href={orchidIG} target="_blank" rel="noreferrer">
              <span className="smm-client-handle">@orchid.avedasalon</span>
              <span className="smm-client-grid-mock" aria-hidden>
                <i>Carousel</i><i>Video</i><i>Image</i><i>Video</i><i>Carousel</i><i>Image</i>
              </span>
              <span className="smm-client-cta">Open on Instagram ↗</span>
            </a>
          </div>
        </section>

        <section className="smm-fits section-shell">
          <div className="section-heading services-heading">
            <p className="kicker">03 / WHO IT&apos;S FOR</p>
            <h2>Local businesses with<br /><em>something worth showing.</em></h2>
          </div>
          <div className="smm-fit-grid">
            {fits.map(([t, c]) => (
              <article key={t}><h3>{t}</h3><p>{c}</p></article>
            ))}
          </div>
        </section>

        <section className="smm-reel section-shell">
          <div className="section-heading">
            <p className="kicker">04 / ON CAMERA</p>
            <h2>The eye behind<br /><em>your feed.</em></h2>
            <p>Before managing feeds, Maddie built her craft making UGC for product brands. Same hooks, same polish, now pointed at your business.</p>
          </div>
          <div className="smm-reel-grid">
            {reel.map((v) => (
              <a key={v.id} href={`https://www.tiktok.com/@${v.account}/video/${v.id}`} target="_blank" rel="noreferrer">
                <span className="smm-reel-thumb">
                  <Image src={`/assets/videos/${v.id}.jpg`} fill sizes="(max-width:900px) 100vw, 30vw" alt={`Cover image for ${v.title}`} />
                  <span className="smm-reel-play" aria-hidden>▶</span>
                </span>
                <span className="smm-reel-title">{v.title}</span>
              </a>
            ))}
          </div>
          <Link className="text-link smm-reel-more" href="/ugc">See all UGC work <span>→</span></Link>
        </section>

        <section id="how" className="process section-shell">
          <div className="section-heading">
            <p className="kicker">05 / HOW IT WORKS</p>
            <h2>You keep working.<br /><em>I keep posting.</em></h2>
            <p>One or two capture days a month feeds a full month of content. Nothing extra on your plate.</p>
          </div>
          <div className="steps">
            {steps.map(([n, t, c]) => (
              <div key={n}><b>{n}</b><h3>{t}</h3><p>{c}</p></div>
            ))}
          </div>
        </section>

        <section id="pricing" className="smm-pricing section-shell">
          <div className="section-heading services-heading">
            <p className="kicker">06 / PRICING</p>
            <h2>Two plans.<br /><em>Zero contracts.</em></h2>
          </div>
          <div className="smm-plans">
            {plans.map((p) => (
              <article key={p.name} className={p.featured ? "is-featured" : undefined}>
                {p.featured && <p className="smm-badge">Most teams pick this</p>}
                <p className="kicker">{p.name}</p>
                <p className="smm-price">{p.price}<small>/month</small></p>
                <p className="smm-blurb">{p.blurb}</p>
                <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <a className={`button ${p.featured ? "button-cream" : "button-dark"}`} href={mailto(p.name)}>
                  Start {p.name} <Arrow />
                </a>
                <small className="smm-fine">Month to month. Cancel anytime.</small>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="smm-faq section-shell">
          <div className="section-heading services-heading">
            <p className="kicker">07 / QUESTIONS</p>
            <h2>Good to <em>know.</em></h2>
          </div>
          <div className="smm-faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}><summary>{q}<span aria-hidden>+</span></summary><p>{a}</p></details>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-inner">
            <p className="kicker light">READY TO BE SEEN?</p>
            <h2>Let&apos;s put your business<br /><em>in the feed.</em></h2>
            <p>Tell me about your business and what you want social to do for it. I&apos;ll reply with the next step and a first capture date.</p>
            <a className="button button-cream" href={mailto("Inquiry")}>Email Maddie <Arrow /></a>
            <a className="contact-email" href={`mailto:${email}`}>{email}</a>
          </div>
        </section>
      </main>

      <footer>
        <Link className="wordmark" href="/">MADDIE <i>BRASS</i></Link>
        <p>Social media management · ugcbymaddie.com</p>
        <div><a href="#pricing">Pricing</a><Link href="/ugc">UGC work</Link><a href={`mailto:${email}`}>Email</a></div>
        <small>© {new Date().getFullYear()} Maddie Brass</small>
      </footer>
    </div>
  );
}
