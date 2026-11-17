"use client";

import { Quote } from "lucide-react";
import { useFadeIn } from "@/lib/useFadeIn";

export default function Temoignages() {
  const ref = useFadeIn();

  return (
    <section className="bg-surface py-24 md:py-32" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center fade-in">
        <Quote className="text-primary mx-auto mb-10" size={48} strokeWidth={1} />

        <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-on-surface leading-relaxed mb-10">
          &laquo; Travailler avec l&apos;Atelier Marchand, c&apos;est
          l&apos;assurance d&apos;une pièce qui a un supplément d&apos;âme.
          Leurs finitions à l&apos;huile de lin sont d&apos;une sensualité
          rare. &raquo;
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-primary" />
          <div>
            <p className="font-sans font-bold text-on-surface text-sm tracking-wider">
              Marc-Antoine de Vigny
            </p>
            <p className="font-sans text-tertiary text-sm">
              Architecte d&apos;intérieur, Paris
            </p>
          </div>
          <div className="h-px w-12 bg-primary" />
        </div>
      </div>
    </section>
  );
}
