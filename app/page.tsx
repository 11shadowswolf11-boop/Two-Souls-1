'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Headphones, Mail, Music2, Sparkles, Users, Film, BookOpen } from 'lucide-react'

const books = [
  { n: 'Book One', title: 'The First Breath', tagline: 'The moment the soul remembers.', image: '/books/book1.jpg', desc: 'A first recognition. A breath before language. The beginning of a pull neither soul asked for, but neither could forget.' },
  { n: 'Book Two', title: 'What I Could Not Stop', tagline: 'Some pulls are stronger than will.', image: '/books/book2.jpg', desc: 'Desire becomes gravity. Silence becomes a room they both keep entering, even when they know they should turn away.' },
  { n: 'Book Three', title: 'Quietly Undone', tagline: 'The self I knew is slipping away.', image: '/books/book3.jpg', desc: 'The breaking is not loud. It is the soft dismantling of the version of her who survived by staying small.' },
  { n: 'Book Four', title: 'Surrendering', tagline: 'We were never apart. Only afraid to see.', image: '/books/book4.jpg', desc: 'Two souls stand at the edge of what they have denied, learning that surrender is not weakness. It is truth.' },
  { n: 'Book Five', title: 'She Rises', tagline: 'She remembered who she was.', image: '/books/book5.jpg', desc: 'Fire returns to the body. The woman who once waited for permission becomes the flame that names herself.' },
  { n: 'Book Six', title: 'Without End', tagline: 'Love does not end. It becomes everything.', image: '/books/book6.jpg', desc: 'The final tide. The last becoming. A love that moves beyond possession into peace, memory, and forever.' },
]

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .9, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <Reveal><div className="mx-auto max-w-3xl text-center"><p className="mb-4 font-sans text-xs uppercase tracking-[.42em] text-gold/80">{eyebrow}</p><h2 className="font-serif text-5xl leading-none gold-text md:text-7xl">{title}</h2>{text && <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-8 text-pearl/70">{text}</p>}</div></Reveal>
}

export default function Home() {
  return (
    <main className="ocean-noise min-h-screen">
      <div className="fixed inset-0 pointer-events-none opacity-40 [background:radial-gradient(circle_at_50%_0%,rgba(216,174,106,.22),transparent_32%),radial-gradient(circle_at_30%_70%,rgba(42,105,132,.18),transparent_28%)]" />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gold/10 bg-midnight/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-xl tracking-[.32em] text-pearl">SHADOW WOLF</a>
          <div className="hidden gap-8 font-sans text-xs uppercase tracking-[.2em] text-pearl/70 md:flex">
            <a href="#books" className="hover:text-gold">Books</a><a href="#music" className="hover:text-gold">Music</a><a href="#community" className="hover:text-gold">Community</a><a href="#newsletter" className="hover:text-gold">Newsletter</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <img
  src="/books/complete-series.jpg"
  alt="The Two Souls Series"
  className="absolute inset-0 h-full w-full object-cover opacity-30"
/>
          <p className="font-sans text-xs uppercase tracking-[.55em] text-gold">The Two Souls Series</p>
          <h1 className="mt-8 font-serif text-6xl leading-[.86] gold-text md:text-9xl">A Love<br/>Without End</h1>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-8 text-pearl/78 md:text-xl">Six Books. One journey. An ocean of longing, recognition, surrender, and becoming.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#books" className="group rounded-full bg-gold px-7 py-4 font-sans text-sm uppercase tracking-[.22em] text-midnight transition hover:bg-pearl">Explore the Books <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" /></a>
            <a href="#series" className="rounded-full luxury-border px-7 py-4 font-sans text-sm uppercase tracking-[.22em] text-pearl transition hover:bg-white/10">Enter the World</a>
          </div>
        </motion.div>
      </section>

      <section id="series" className="relative px-6 py-28 md:py-36">
        <SectionTitle eyebrow="About the Series" title="The soul remembers before the mind understands." text="The Two Souls Series is an emotional, ocean-soaked journey of recognition, longing, surrender, becoming, and love that does not end. It follows the invisible pull between souls who find each other across distance, timing, fear, and fate." />
        <Reveal delay={.15}><div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] glass shadow-glow"><Image src="/books/completeseries.jpg" width={1200} height={1800} alt="Complete series cover" className="h-[520px] w-full object-cover opacity-90" /></div></Reveal>
      </section>

      <section id="books" className="px-6 py-28">
        <SectionTitle eyebrow="The Books" title="Six tides. One becoming." />
        <div className="mx-auto mt-16 grid max-w-7xl gap-7 md:grid-cols-2 xl:grid-cols-3">
          {books.map((book, i) => <Reveal key={book.title} delay={i * .05}><article className="group overflow-hidden rounded-[1.75rem] glass transition duration-500 hover:-translate-y-2 hover:shadow-glow"><div className="relative h-[520px]"><Image src={book.image} alt={book.title} fill className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" /></div><div className="p-7"><p className="font-sans text-xs uppercase tracking-[.35em] text-gold/75">{book.n}</p><h3 className="mt-3 font-serif text-4xl gold-text">{book.title}</h3><p className="mt-3 font-serif text-xl text-pearl/90">{book.tagline}</p><p className="mt-4 font-sans text-sm leading-7 text-pearl/62">{book.desc}</p><button className="mt-6 font-sans text-xs uppercase tracking-[.26em] text-gold hover:text-pearl">Read More</button></div></article></Reveal>)}
        </div>
      </section>

      <section id="music" className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[{icon:Music2,title:'The Soundtrack of the Souls',text:'Original songs, duets, emotional cinematic tracks, and music inspired by each book.',cta:'Listen Soon'},{icon:Headphones,title:'Hear the Story Breathe',text:'The audiobook experience will bring the world of Two Souls to life through voice, silence, emotion, and atmosphere.',cta:'Coming Soon'},{icon:Film,title:'Built for the Screen',text:'A cinematic universe with future plans for audiobooks, music, visual storytelling, and film adaptation.',cta:'Future Film Project'}].map((item, i) => <Reveal key={item.title} delay={i*.08}><div className="min-h-[360px] rounded-[2rem] glass p-9"><item.icon className="h-8 w-8 text-gold"/><h3 className="mt-8 font-serif text-4xl gold-text">{item.title}</h3><p className="mt-6 font-sans leading-8 text-pearl/68">{item.text}</p><p className="mt-10 font-sans text-xs uppercase tracking-[.28em] text-gold">{item.cta}</p></div></Reveal>)}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <Reveal><div><p className="font-sans text-xs uppercase tracking-[.42em] text-gold/80">About Shadow Wolf</p><h2 className="mt-5 font-serif text-5xl gold-text md:text-7xl">Written from the edge of memory.</h2><p className="mt-7 font-sans text-lg leading-9 text-pearl/70">Shadow Wolf writes from the place where memory, longing, ocean, and soul recognition meet. Her work is emotional, poetic, cinematic, and deeply human.</p></div></Reveal>
          <Reveal delay={.1}><div className="rounded-[2rem] glass p-12 text-center"><Sparkles className="mx-auto h-10 w-10 text-gold"/><p className="mt-8 font-serif text-3xl leading-snug text-pearl">“For the readers who have felt something they could never explain.”</p></div></Reveal>
        </div>
      </section>

      <section id="community" className="px-6 py-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] glass p-10 text-center md:p-16">
          <Users className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-6 font-serif text-5xl gold-text md:text-7xl">Enter the Circle</h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans leading-8 text-pearl/70">A private reader world for those who feel the story, not just read it. Behind-the-scenes notes, music, early releases, reflections, and community spaces will live here.</p>
          <button className="mt-9 rounded-full bg-gold px-8 py-4 font-sans text-sm uppercase tracking-[.24em] text-midnight">Join the Community</button>
        </div>
      </section>

      <section id="newsletter" className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center"><Mail className="mx-auto h-10 w-10 text-gold"/><h2 className="mt-6 font-serif text-5xl gold-text md:text-7xl">Receive the First Whisper</h2><p className="mt-5 font-sans text-pearl/65">Join the list for book news, music releases, and the first openings into the world.</p><form className="mt-10 grid gap-4 md:grid-cols-[1fr_1fr_auto]"><input placeholder="Name" className="rounded-full border border-gold/20 bg-white/5 px-6 py-4 font-sans outline-none placeholder:text-pearl/35 focus:border-gold"/><input placeholder="Email" className="rounded-full border border-gold/20 bg-white/5 px-6 py-4 font-sans outline-none placeholder:text-pearl/35 focus:border-gold"/><button className="rounded-full bg-gold px-8 py-4 font-sans text-xs uppercase tracking-[.22em] text-midnight">Join</button></form></div>
      </section>

      <footer className="border-t border-gold/10 px-6 py-12 text-center"><p className="font-serif text-2xl tracking-[.4em] text-pearl">SHADOW WOLF</p><div className="mx-auto my-6 h-px max-w-md bg-gradient-to-r from-transparent via-gold/60 to-transparent"/><p className="font-sans text-xs uppercase tracking-[.25em] text-pearl/45">Books | Music | Audiobooks | Community | Newsletter</p><p className="mt-6 font-sans text-xs text-pearl/35">© 2026 Shadow Wolf. All rights reserved.</p></footer>
    </main>
  )
}
