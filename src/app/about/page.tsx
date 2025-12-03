// "use client";

// export default function About() {
//   return (
//     <main className="min-h-screen w-full bg-black text-white">

//       {/* HERO SECTION */}
//       <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
//         <h1 className="text-6xl lg:text-7xl md:mt-[80px] font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
//           Suburbia Skate
//         </h1>

//         <p className="mt-6 max-w-2xl text-lg opacity-80">
//           We are more than just boards. We're a movement.  
//           A lifestyle. A community that rides, creates, and breaks limits.
//         </p>

//         <img
//           src="/about-skate.png"
//           alt="Skateboard"
//           className="mt-14 w-[70%] max-w-[650px]"
//         />
//       </section>

//       {/* MISSION SECTION */}
//       <section className="py-24 px-6 lg:px-20">
//         <div className="max-w-4xl mx-auto space-y-8">
//           <h2 className="text-4xl font-bold">Our Mission</h2>

//           <p className="text-base lg:text-lg opacity-80 leading-relaxed">
//             At Suburbia Skate, we believe skateboarding is not just a sport — it's 
//             self-expression, rebellion, and art.  
//             We design each deck to survive the streets, carry your journey, and reflect your identity.
//           </p>

//           <p className="text-base lg:text-lg opacity-80 leading-relaxed">
//             We support underground skaters, DIY artists, and street culture — giving them a canvas to stand out.
//           </p>
//         </div>
//       </section>

//       {/* VALUES SECTION — glowing boxes */}
//       <section className="py-24 px-6 lg:px-20">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

//           <GlowCard title="Durable Craftsmanship">
//             Every skateboard is built to take the hits — whether you're grinding rails or
//             dropping from ramps. Built for longevity and performance.
//           </GlowCard>

//           <GlowCard title="Street Style & Identity">
//             Bold designs that reflect your personality. Our decks are canvases — your vibe is the art.
//           </GlowCard>

//           <GlowCard title="Community & Culture">
//             Skateboarding is community. We support local skaters, DIY creators, and street
//             artists to grow the culture together.
//           </GlowCard>

//           <GlowCard title="Authenticity & Freedom">
//             No limits. No rules. Our brand stands for freedom, authenticity, and owning your own path.
//           </GlowCard>

//         </div>
//       </section>
//     </main>
//   );
// }

// /* FIXED + IMPROVED GLOW CARD COMPONENT */
// function GlowCard({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div
//       className="
//         group relative p-[2px] rounded-2xl
//         bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400
//         transition-all duration-300
//         shadow-[0_0_25px_rgba(255,150,0,0.3)]
//         hover:shadow-[0_0_40px_rgba(255,160,0,0.7)]
//         hover:scale-[1.03]
//       "
//     >
//       <div
//         className="
//           bg-black rounded-2xl p-8 h-full
//           transition-all duration-300
//           group-hover:bg-[#0f0f0f]
//           group-hover:shadow-[0_0_25px_rgba(255,150,0,0.3)_inset]
//         "
//       >
//         <h3 className="text-2xl font-bold text-orange-400 mb-4">
//           {title}
//         </h3>
//         <p className="opacity-80 leading-relaxed text-sm">
//           {children}
//         </p>
//       </div>
//     </div>
//   );
// }




"use client";

import { WideLogo } from "@/slices/Hero/WideLogo";
import { TallLogo } from "@/slices/Hero/TallLogo";

import { ParallaxImage } from "@/slices/TextAndImage/ParallaxImage";

export default function About() {

  return (
    <main className="relative min-h-screen w-full bg-texture bg-brand-blue text-brand-gray">
      <div className="absolute inset-0 mt-24">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl lg:text-7xl md:mt-[80px] font-extrabold tracking-tight text-brand-gray drop-shadow-[0_4px_0_rgba(0,0,0,0.4)]">
          Suburbia Skate
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-brand-gray/90">
          Skaters. Creators. Rebels. This is the crew that rides with Suburbia.
          Not just boards, but a whole suburban skate culture.
        </p>
      </section>

      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-8 bg-brand-navy rounded-[2.5rem] shadow-[0_0_0_0px_#000,0_18px_0_0_rgba(0,0,0,0.7)] px-8 py-10">
          <h2 className="text-4xl font-bold text-brand-gray">
            Our Mission
          </h2>

          <p className="text-base lg:text-lg text-brand-gray/90 leading-relaxed">
            Suburbia Skate exists to turn cul‑de‑sacs into skateparks. Every
            deck is built for big tricks, harsh slams, and late‑night missions
            under streetlights.
          </p>

          <p className="text-base lg:text-lg text-brand-gray/90 leading-relaxed">
            From driveway sessions to DIY spots, we back the kids who paint
            their own ramps, shoot their own clips, and keep skate culture alive
            in every quiet neighborhood.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <GlowCard title="Durable Craftsmanship">
            Boards pressed to take the beating of curbs, rails, and rough
            asphalt. Built to feel solid under your feet, session after
            session.
          </GlowCard>

          <GlowCard title="Street Style & Identity">
            Graphic-heavy decks inspired by backstreet art, marker tags, and
            homemade stickers — every setup looks like your crew, not a catalog.
          </GlowCard>

          <GlowCard title="Community & Culture">
            We back locals: DIY spots, zines, video parts, and neighborhood
            jams. Suburbia is the banner, but the scene is all you.
          </GlowCard>

          <GlowCard title="Authenticity & Freedom">
            No polished perfection. Just real skaters, real pavement, and the
            freedom to ride how you want, where you want.
          </GlowCard>
        </div>
      </section>
    </main>
  );
}

function GlowCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        group relative rounded-[2.5rem] p-[3px]
        shadow-[0_0_0_0px_#000,0_18px_0_0_rgba(0,0,0,0.7)]
        transition-transform transition-shadow duration-300
        hover:translate-y-1 hover:shadow-[0_0_0_0px_#000,0_24px_0_0_rgba(0,0,0,0.7)]
      "
    >
      <div
        className="
          h-full rounded-[2.3rem] bg-brand-navy
          px-8 py-8
          transition-colors duration-300
          group-hover:bg-[#192a85]
        "
      >
        <h3 className="text-2xl font-bold text-brand-gray mb-3">
          {title}
        </h3>
        <p className="text-sm text-brand-gray/90 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
