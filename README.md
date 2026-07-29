# Dental Revival Project

You are a Senior UI/UX Designer and Frontend Engineer.

Your task is to redesign the website https://binarabdentalcentre.com/ while preserving ALL existing content.

use this interface template to build Build a fullscreen hero section in a Vite + React + TypeScript + Tailwind CSS project. Use gsap and lucide-react. No other UI libraries.

Fonts (in src/index.css)

Import at the top of index.css BEFORE @tailwind directives:

code

CSS

@import

 url('htt...');
@font

-face {
  font-family: 'Dirtyline';
  src: url('https://fonts.cdnfonts.com/s/15011/Dirtyline36DaysofType.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
Body font: 'Barlow', sans-serif, background #000.

Tailwind config (tailwind.config.js)

code

Js

theme: {
  extend: {
    fontFamily: {
      heading: ['Instrument Serif', 'serif'],
      body: ['Barlow', 'sans-serif'],
      dirtyline: ['Dirtyline', 'sans-serif'],
    },
    borderRadius: { DEFAULT: '9999px' },
  },
},
CSS (append to src/index.css)

code

CSS

.liquid-glass {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0)    40%,
    rgba(255,255,255,0)    60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.liquid-glass-strong {
  background: rgba(255,255,255,0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
.liquid-glass-strong::before {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.5) 0%,
    rgba(255,255,255,0.2) 20%,
    rgba(255,255,255,0)   40%,
    rgba(255,255,255,0)   60%,
    rgba(255,255,255,0.2) 80%,
    rgba(255,255,255,0.5) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.hero-title {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: clamp(96px, 18vw, 280px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: white;
  text-align: center;
}
Component (src/App.tsx)

Constants:
NAV_LINKS = ['Gallery', 'Styles', 'API', 'Pricing', 'Blog']
VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_080827_a9e5ad52-b6ee-4e79-b393-d936f179cfd7.mp4'
LogoMark — inline SVG, 44x26, viewBox 0 0 44 26, three white rects at x=0/16/30, y=3, widths 14/12/14, height 20, rx=3.

State/refs:

mounted (boolean, set true in a mount effect for fade-in).

videoRef (HTMLVideoElement), videoBgRef (HTMLDivElement), displayCanvasRef (HTMLCanvasElement).

framesReady boolean state, framesRef = useRef([]).

Effect 1 — Frame capture (boomerang setup):

On mount, get videoRef.current. Set capturing = true, lastTime = -1, MAX_WIDTH = 960, frames: HTMLCanvasElement[] = [].

captureFrame(): bail if !capturing or readyState < 2 or currentTime === lastTime. Update lastTime. Scale = min(1, 960/videoWidth). Create offscreen canvas at scaled w/h, ctx.drawImage(video, 0, 0, w, h), push to frames.
Use requestVideoFrameCallback when available, else requestAnimationFrame fallback.

On loadedmetadata: call http://video.play().catch(()=>{}) then start the capture loop.

On ended: set capturing = false, store frames in framesRef.current, setFramesReady(true).

If readyState >= 1, invoke onLoaded() immediately.

Cleanup: cancel raf + remove listeners.
Effect 2 — Boomerang render:

When framesReady true, grab displayCanvasRef, set its width/height from frames[0].

Variables: index = 0, direction = 1, last = http://performance.now(), interval = 1000/30.
In an requestAnimationFrame(render) loop: if now - last >= interval, draw frames[index], advance index += direction. When index >= frames.length - 1, clamp and flip to -1. When index <= 0, clamp and flip to +1.

Cleanup: cancelAnimationFrame.
Effect 3 — Parallax mouse tracking (gsap):

strength = 20. Track targetX/Y, smoothly lerp currentX/Y += (target - current) * 0.06 each frame.
On mousemove: targetX = ((clientX - cx)/cx) * strength (same for Y).

Each frame: gsap.set(videoBgRef.current, { x: currentX, y: currentY }).

JSX structure:

Root: 


Video background layer: 

 containing:

 with src={VIDEO_SRC}, muted, playsInline, preload="auto", crossOrigin="anonymous", className="w-full h-full object-cover", style={{ display: framesReady ? 'none' : 'block' }}.


.
Hero title: fixed div, left-0 right-0 z-20 w-full px-4, style={{ top: '126px' }}, fades in via transition-all duration-1000 toggling opacity-100 translate-y-0 vs opacity-0 translate-y-6 based on mounted. Inside: 

MicroVisuals

.

Nav:  containing a liquid-glass flex items-center gap-6 rounded px-4 py-2.5 pill:


 of NAV_LINKS as  with classes text-sm font-body font-light text-white/70 hover:text-white transition-colors duration-200.
Right cluster flex items-center gap-3 ml-4: "Sign in" link (same style), then "Try it free" with liquid-glass-strong text-sm font-body font-medium text-white rounded px-4 py-1.5 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.12)] active:scale-[0.97].

Bottom row: fixed, bottom-12 left-0 right-0 px-10 flex items-end justify-between z-20, fade-in with transition-all duration-1000 delay-300.

Left 

: text-sm font-body font-light text-white/75 max-w-[220px] leading-relaxed, text: "Forma's AI understands context, composition, and style like a creative director would."

Center absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center gap-3 with two buttons:

Primary: group relative bg-white text-black text-sm font-body font-medium rounded px-6 py-3 overflow-hidden active:scale-[0.97] transition-all duration-200 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.25)] hover:scale-[1.03]. Contents: Start generating + overlay .
Secondary: liquid-glass group text-white text-sm font-body font-medium rounded px-6 py-3 active:scale-[0.97] transition-all duration-200 hover:scale-[1.03] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_2px_rgba(255,255,255,0.07)] — label "See templates".
Right 

: same classes as left plus text-right, text: "Describe what you see in your head — get images that actually match." IMPORTANT RULES

Analyze the existing website.

Keep ALL existing:

Content
Navigation
Header
Footer
Services
Treatments
Doctors
Contact information
Forms
Phone numbers
Email
Address
Working hours
Testimonials
Section order
Do NOT rewrite any text.

Do NOT summarize content.

Do NOT change business information.

Do NOT remove sections.

IMAGES

Preserve the original clinic images.

Do NOT replace doctor photos.

Do NOT generate AI people.

Do NOT generate stock photos.

Keep the original gallery images.

If original images are unavailable, use placeholders and clearly mark where the original images should remain.

HERO SECTION

Use the uploaded cinematic dental clinic video as the homepage hero background.

The uploaded video must replace the existing hero image.

Hero settings:

Full screen (100vh)
Video autoplay
Loop
Muted
PlaysInline
object-fit: cover
35% dark overlay
Smooth loading
Never replace the uploaded video.

DESIGN STYLE

Premium Luxury Dental Clinic

Modern

Minimal

Apple-inspired

Scandinavian

Elegant

Bright

Professional

Not AI generated

COLOR PALETTE

Primary:
#0F6E8C

Secondary:
#39A9DB

Accent:
#5BC0EB

Background:
#FFFFFF
Light Sections:

#F8FAFC

Text:
#1F2937
TYPOGRAPHY

Headings:
Poppins

Body:
Inter

Large typography

Excellent spacing

LAYOUT

12-column responsive layout

Large white space

Rounded cards

Soft shadows

Glassmorphism navigation

Premium CTA buttons

Sticky header

Modern footer

ANIMATIONS

Subtle fade animations

Scroll reveal

Card hover

Button hover

Navigation transition

Smooth scrolling

Hero parallax

No excessive animations.

RESPONSIVE

Desktop

Tablet

Mobile

Perfect responsiveness.

SEO

Maintain all SEO content.

Maintain heading hierarchy.

Maintain metadata where possible.

OUTPUT

Generate a production-ready website.

The redesign should preserve the existing business identity while providing a premium modern visual experience.

The final website should look like it was designed by a top UI/UX agency, not an AI website generator. Fix the hero section scrolling behavior.

The large hero heading "Experience Comprehensive Dental Care" should ONLY appear inside the hero section.

When the user scrolls down, the hero heading must scroll away naturally with the hero section.

Do NOT keep the heading fixed.

Do NOT pin the heading.

Do NOT use position: fixed.

Do NOT use position: sticky.

Remove any scroll pinning or parallax effect applied to the hero text.

The hero text should fade out naturally as the hero section leaves the viewport.

The next section should scroll over normally without any overlapping text.

Ensure the hero heading has overflow hidden within the hero section.

Keep the hero video as the background.

The hero section should have height: 100vh.

The content below the hero should begin immediately after the hero section ends.

Maintain proper z-index:

Hero video: lowest layer
Dark overlay: above video
Hero text: above overlay
Remaining page content: normal document flow
No element from the hero section should remain visible after scrolling into the next section.

The scrolling behavior should match premium websites like Apple, Tesla, Stripe, or modern healthcare websites.         Update the existing website only.

Do NOT regenerate the website.

Do NOT change the content.

Do NOT change the layout.

Do NOT change the color palette.

Do NOT replace any images.

Use the licensed or uploaded hero background video as the homepage background.

Hero Video Requirements

- Display the hero video at the highest available source quality.

- Preserve the video's original aspect ratio.

- Use object-fit: cover.

- Enable autoplay.

- Enable muted.

- Enable loop.

- Enable playsInline.

- Optimize loading without noticeable quality loss.

- Keep the hero height at 100vh.

- Add a subtle 30% dark overlay for text readability.

Navigation Fix

The navigation links are currently not working.

Fix all navigation links so they smoothly scroll to their corresponding sections.

Required navigation links:

- Home

- About

- Services

- Treatments

- Team

- Gallery

- Insurance

- Contact

- Book Appointment

Each navigation item must scroll to the correct section using smooth scrolling.

Ensure every section has a unique ID matching the navigation.

Examples:

Home → #home

About → #about

Services → #services

Treatments → #treatments

Team → #team

Gallery → #gallery

Insurance → #insurance

Contact → #contact

Book Appointment → #appointment

Sticky Header

Keep the navigation sticky.

Never hide it while scrolling.

Transparent over the hero.

White/glass background after scrolling.

Add a soft shadow.

Highest z-index.

Buttons

Ensure all buttons work correctly.

Book Appointment button should scroll to the appointment section.

Call button should open the phone dialer.

Email button should open the default mail application.

Performance

Lazy-load images.

Optimize the hero video.

Keep animations smooth.

Maintain responsive behavior on desktop, tablet, and mobile.

Do not change the existing business content.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dce8937f-93a1-402d-8e6c-c4bbff840fec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
