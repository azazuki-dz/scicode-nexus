import type { Metadata } from 'next'
import { WireframeHuman } from '@/components/dreamframe/WireframeHuman'
import './dreamframe.css'

export const metadata: Metadata = {
  title: 'DREAMFRAME — AI Image Generation',
  description: 'We create imaginations. An experimental AI image-generation platform.',
}

export default function DreamframePage() {
  return (
    <div className="df-root">
      <div className="df-backdrop" aria-hidden="true" />

      <div className="df-fig-wrap" aria-hidden="true">
        <WireframeHuman />
        <div className="df-fig-fade" />
      </div>

      <div className="df-meta df-enter" style={{ animationDelay: '0.08s' }}>
        <span className="df-meta-star">✳</span>
        <span className="df-meta-top">
          <span>AI GENERATIVE SYSTEM</span>
          <span className="df-meta-sub">DREAMFRAME / 01</span>
        </span>
      </div>

      <nav className="df-nav df-enter" style={{ animationDelay: '0.14s' }} aria-label="Primary">
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <h1 className="df-headline df-enter" style={{ animationDelay: '0.32s' }}>
        WE CREATE IMAGINATIONS.
      </h1>

      <a className="df-cta df-enter" style={{ animationDelay: '0.5s' }} href="#create">
        START CREATING
        <span className="df-arrow">→</span>
      </a>

      <div className="df-brand-wrap df-enter" style={{ animationDelay: '0.6s' }}>
        <div className="df-brand">DREAMFRAME</div>
        <div className="df-brand-sub">AI IMAGE GENERATION</div>
        <svg
          className="df-brand-line"
          width="120"
          height="24"
          viewBox="0 0 120 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 2 H100 L64 22"
            stroke="rgba(255, 255, 255, 0.55)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="df-scroll df-enter" style={{ animationDelay: '0.72s' }}>
        <span>Scroll Down</span>
        <span className="df-rule" />
      </div>

      <nav className="df-leftnav df-enter" style={{ animationDelay: '0.66s' }} aria-label="Section">
        <a href="#home">Home</a>
        <span className="df-rule" />
        <a href="#create">Create</a>
        <span className="df-rule" />
        <a href="#gallery">Gallery</a>
      </nav>

      <div className="df-rightinfo df-enter" style={{ animationDelay: '0.7s' }}>
        <span>DREAMFRAME / AI SYSTEM</span>
        <span className="df-rule" />
        <span>GENERATIVE IMAGE ENGINE</span>
        <span className="df-rule" />
        <span>2026</span>
      </div>
    </div>
  )
}