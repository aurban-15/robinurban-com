import type { Metadata } from "next";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Introduction — Bridging the Gap — Robin Urban",
  description:
    "Read the introduction to Bridging the Gap: The Question Every Believer Asks. A free, inline reading experience.",
};

type Block =
  | { type: "p"; text: string }
  | { type: "quote"; text: string; ref: string }
  | { type: "ul"; items: string[] };

type Section = {
  title?: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    blocks: [
      {
        type: "p",
        text: "Here's the question that haunts every honest believer: If I'm really a new creation, why do I still struggle with the same issues? Why does anxiety still grip me? Why do I fall back into old patterns of thinking and speaking? If old things have passed away, why do they keep showing up in my life?",
      },
      {
        type: "p",
        text: "Friend, let me tell you something incredible: you are not who you used to be. The moment you gave your life to Jesus, everything changed. As 2 Corinthians 5:17 proclaims,",
      },
      {
        type: "quote",
        text: "If anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.",
        ref: "2 Corinthians 5:17",
      },
      {
        type: "p",
        text: "That's not just a promise for heaven. It's the truth of who you are right now in Christ.",
      },
      {
        type: "p",
        text: "When Jesus died on the cross, your old self — the one burdened by sin, shame, and failure — was crucified with Him.",
      },
      {
        type: "quote",
        text: "I have been crucified with Christ; it is no longer I who live, but Christ lives in me; and the life which I now live in the flesh I live by faith in the Son of God, who loved me and gave Himself for me.",
        ref: "Galatians 2:20",
      },
      {
        type: "p",
        text: "In God's eyes, you're seen through the lens of His Son's righteousness, pure and complete.",
      },
      {
        type: "p",
        text: "If you have ever asked that question. If you know theologically that you're righteous in Christ, but practically you still feel dominated by the old nature. If you've been told you're a new creation, but don't know how to actually walk in that reality. If you're tired of the gap between who the Bible says you are and who you experience yourself to be, then this book is for you!",
      },
    ],
  },
  {
    title: "The Gap Between Identity and Experience",
    blocks: [
      {
        type: "p",
        text: "Here's what's true: You are perfect in Christ eternally. God sees you as righteous, holy, and completely accepted. Your position before Him is established, and secure.",
      },
      {
        type: "p",
        text: "But here's what's also true: You're learning to walk in that reality daily. And that learning process — how to live from your new identity rather than your old patterns — is where most believers get entangled.",
      },
      {
        type: "p",
        text: "It's like getting married and legally changing your name. On paper, you're immediately Mrs. Johnson. Your driver's license says so. The government agrees. But you still accidentally sign checks as Miss Smith for the next six months, and your brain short-circuits every time someone calls you by your new name at the grocery store. You ARE Mrs. Johnson — legally, officially, permanently. You're just learning to live like Mrs. Johnson. That's exactly where you are as a new creation.",
      },
      {
        type: "p",
        text: "It's not that you need to become a new creation. You already are one. The question is: How do you walk as the new person God created you to be? How do you access the divine power that's already been granted to you? How do you experience in daily life what's already true in eternal reality?",
      },
      {
        type: "p",
        text: "That's the gap this book bridges.",
      },
    ],
  },
  {
    title: "The Pattern That Changes Everything",
    blocks: [
      {
        type: "p",
        text: "What if I told you there's a simple, biblical pattern woven throughout Scripture that shows exactly how transformation happens? A pattern that's not about trying harder or being more disciplined, but about positioning yourself to receive what God has already provided?",
      },
      {
        type: "p",
        text: "This pattern appears in the story of Cornelius in Acts 10. It shows up in the life of Abraham. It's paramount in the story of Joshua, Caleb, and the Ten Spies. It's explained by Paul in Romans and Galatians. It's the mechanism Jesus Himself described when He talked about abiding in the vine.",
      },
      {
        type: "p",
        text: "The pattern is this: hear God's Word, believe it, speak it, and receive what He's provided.",
      },
      {
        type: "p",
        text: "That's it. That's how the Christian life was designed to work. Not through striving, but through receiving. Not through performance, but through faith in what's already been accomplished. Not by trying to become who you should be, but by learning to walk in who you already are. Remember, you are a new creation in Christ Jesus. That's it. It is as simple and as difficult as that. The problem begins, however, when we forget that simple truth and begin trying to focus on how to correct certain aspects of the old man. The old man is dead. Leave him behind.",
      },
    ],
  },
  {
    title: "What This Book Promises",
    blocks: [
      { type: "p", text: "In these pages, you'll discover:" },
      {
        type: "ul",
        items: [
          "The biblical pattern (hear-believe-speak-receive) that appears throughout Scripture and shows how transformation truly works",
          "Why your new identity isn't just a legal status in heaven's records — it's a lived reality you can walk in daily",
          "What Jesus accomplished at the cross makes every promise in God's Word accessible to you right now",
          "How God's Word itself does the transforming work when you position yourself to receive it (you don't make it work; it works in you)",
          "The difference between Old Covenant living (\u201Ccommandments to do\u201D) and New Covenant living (\u201Cwords to believe\u201D)",
          "Practical application of this pattern to every area where you need transformation: anxiety, sin patterns, sickness, lack, broken relationships",
        ],
      },
      {
        type: "p",
        text: "This isn't another spiritual discipline to master or program to complete. This is how grace actually operates. This is the divine power principle described in 2 Peter 1:3: \u201CHis divine power has granted to us all things that pertain to life and godliness, through the knowledge of Him.\u201D",
      },
      {
        type: "p",
        text: "You have access to everything you need. The question is: How do you access it?",
      },
    ],
  },
  {
    title: "Why This Message Matters Now",
    blocks: [
      {
        type: "p",
        text: "We live in a time when believers have more access to the Bible than any generation in history — apps, podcasts, online sermons, and many translations. Yet many Christians remain dominated by the old patterns they thought salvation would eliminate.",
      },
      {
        type: "p",
        text: "The problem isn't a lack of information. The problem is not understanding the mechanism. We've been told what we are (new creations) without being shown how to walk in it. We know the promises, but don't know how to receive them. We have the truth, but don't know the pattern.",
      },
      {
        type: "p",
        text: "This book reveals that process. Not as something new or novel, but as something ancient that's been there all along, waiting to be reclaimed.",
      },
    ],
  },
  {
    title: "How to Use This Book",
    blocks: [
      {
        type: "p",
        text: "Think of this as a field manual, not a one-time read. You'll return to it whenever you notice the gap growing between your identity and your experience. Keep it accessible for those moments when old patterns reappear, when you catch yourself living from the flesh instead of the Spirit, or when you need to remember how transformation actually works.",
      },
      {
        type: "p",
        text: "Each chapter ends with key Scripture passages that capture the core truth. These aren't just nice verses to glance at. They are the actual words you'll use to engage the pattern. Read them aloud to crystallize that chapter's key theme. Let them sink into your heart. Come back to them when you need to remember what God has said. As you hear them, believe them, speak them, you'll receive what they promise.",
      },
      {
        type: "p",
        text: "You can read this book alone or discuss it with a small group. The principles work whether you're a new believer or have been walking with Christ for decades. Wherever you are, this pattern will show you how to bridge the gap between your eternal identity and your daily experience.",
      },
      {
        type: "p",
        text: "Grab your Bible to accompany your reading. The Bible is our main text and source material. You'll want to look up verses, see the context, and let God's Word speak directly to you. Don't just take my word for it — verify everything in Scripture.",
      },
    ],
  },
  {
    title: "What Lies Ahead",
    blocks: [
      {
        type: "p",
        text: "We'll start with Cornelius's story in Acts 10, where we see the complete pattern in action. Then we'll examine each step:",
      },
      {
        type: "ul",
        items: [
          "How faith comes through hearing God's Word (not through trying harder)",
          "What it means to believe when circumstances seem to contradict God's promises",
          "Why speaking matters and how your words cooperate with grace",
          "How to receive what God has already provided through Christ's finished work",
        ],
      },
      {
        type: "p",
        text: "Most importantly, you'll discover that you don't have to manufacture transformation through discipline and determination. God's Word itself does the work when you position yourself to receive it. Your role isn't to make it happen — it's to allow it to happen. My prayer is that as you read these pages, the gap will close. Not because you suddenly get better at Christian living, but because you discover how to access the divine power that's been yours all along. You'll stop trying to become a new creation and start walking as the new creation you already are. The abundant life Jesus promised isn't someday. It's not after you get your act together. It's available right now through the pattern He's revealed in His Word.",
      },
      {
        type: "p",
        text: "You ready? Let's discover how to Be who you already are.",
      },
    ],
  },
];

export default function IntroductionPage() {
  return (
    <>
      <main className="flex-1">
        <article className="mx-auto max-w-[65ch] px-6 py-16 sm:py-20">
          {/* Header */}
          <header className="mb-14 sm:mb-16 text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
              Introduction
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold leading-tight text-navy">
              The Question Every Believer Asks
            </h1>
            <p className="mt-5 text-sm text-navy/50">5 min read</p>
          </header>

          {/* Body */}
          <div className="font-serif text-lg leading-[1.8] text-navy/90">
            {sections.map((section, si) => (
              <section key={si} className={si === 0 ? "" : "mt-16"}>
                {section.title && (
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-6 border-l-4 border-gold pl-4">
                    {section.title}
                  </h2>
                )}
                {section.blocks.map((block, bi) => {
                  if (block.type === "p") {
                    return (
                      <p key={bi} className="mt-6 first:mt-0">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={bi}
                        className="my-8 border-l-4 border-gold pl-6 italic text-navy/85"
                      >
                        <p className="mt-0">
                          {"\u201C"}
                          {block.text}
                          {"\u201D"}
                        </p>
                        <footer className="mt-3 not-italic text-sm text-navy/60">
                          — {block.ref}
                        </footer>
                      </blockquote>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={bi} className="mt-6 space-y-4 list-none pl-0">
                        {block.items.map((item, ii) => (
                          <li key={ii} className="flex gap-4">
                            <span
                              className="text-gold flex-shrink-0 mt-[0.15em] font-semibold"
                              aria-hidden="true"
                            >
                              —
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </section>
            ))}
          </div>

          {/* Pull quote */}
          <figure className="my-20 sm:my-24 text-center">
            <blockquote className="font-serif italic text-2xl sm:text-3xl leading-relaxed text-navy">
              {"\u201C"}Therefore, if any man be in Christ, he is a new creature:
              old things are passed away; behold, all things are become new.
              {"\u201D"}
            </blockquote>
            <figcaption className="mt-6 text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
              2 Corinthians 5:17
            </figcaption>
          </figure>

          {/* CTA */}
          <section className="mt-4 text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-xs sm:text-sm">
              Ready for more?
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-navy">
              Keep reading
            </h2>
            <p className="mt-4 text-base text-navy/75 leading-relaxed max-w-md mx-auto">
              Get the full book and read the whole story.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/book#get-the-book"
                className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 text-base font-medium text-cream hover:bg-gold hover:text-navy transition-colors"
              >
                Get the Book
              </a>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
