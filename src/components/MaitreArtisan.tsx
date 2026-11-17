"use client";

import Image from "next/image";
import { useFadeIn } from "@/lib/useFadeIn";

export default function MaitreArtisan() {
  const ref = useFadeIn();

  return (
    <section className="bg-surface py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Texte */}
          <div className="fade-in">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
              L&apos;Héritage
            </p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-on-surface mb-8 leading-tight">
              Le geste juste,
              <br />
              transmis par le sang.
            </h2>

            <div className="space-y-6 mb-10">
              <p className="font-sans text-tertiary text-lg leading-relaxed">
                Depuis 1948, trois générations de Marchand façonnent le bois
                dans leur atelier d&apos;Uzès. Un savoir-faire transmis de père
                en fils, où chaque geste porte l&apos;empreinte de décennies
                d&apos;expérience.
              </p>
              <p className="font-sans text-tertiary text-lg leading-relaxed">
                Jean-Baptiste Marchand, maître ébéniste, perpétue cet héritage
                avec la même exigence que ses aînés : celle du bois choisi à la
                main, du tenon ajusté au dixième, de la finition à l&apos;huile
                de lin appliquée en sept couches.
              </p>
            </div>

            <blockquote className="border-l-2 border-primary pl-6">
              <p className="font-serif italic text-on-surface text-xl leading-relaxed mb-3">
                &laquo; On ne travaille pas le bois, on l&apos;accompagne vers
                sa forme finale. &raquo;
              </p>
              <cite className="font-sans text-tertiary text-sm not-italic">
                Jean-Baptiste Marchand
              </cite>
            </blockquote>
          </div>

          {/* Portrait */}
          <div className="relative fade-in">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-surface-container-high" />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/portrait-artisan.png"
                alt="Jean-Baptiste Marchand, maître ébéniste"
                fill
                className="object-cover grayscale brightness-75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
