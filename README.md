# The Unprofessional Resume

> A resume designed to please the human eyes.

I already have the sensible black-and-white resume for the real world.

This one exists because I had time, I liked the design, and I still believe humans should be allowed to enjoy looking at a résumé.

---

## What this is

This repository hosts my **Unprofessional Resume** — a creative, visual web version of my résumé made primarily for **people**, not parsers.

It is intentionally more visual, colorful, and personality-driven than the plain ATS-friendly document I use when applying for jobs.

**This is not the résumé I rely on for job applications.**

The professional application résumé is the simpler, clean, black-and-white, ATS-friendly version with the correct practical information. That version exists to get through screening systems.

This project exists for the fun.

I know exactly why the practical résumé exists.  
I also wanted to make something beautiful.

---

## The story

Around **2020**, I built a much more colorful, visually designed résumé and used that kind of design in the real world. It looked good to a human.

Over time, I learned the familiar lesson: highly designed, colorful, and dark résumés are not always practical in the job market — especially when documents have to survive ATS systems and automated screening.

So I made the sensible version too: a simple black-and-white résumé for applications.

Then I revisited the visual idea again — because I had the time, wanted to redesign it properly, and wanted something that prioritizes the person reading it in a browser.

---

## Resume for machines vs resume for humans

| Machines care about | Humans can appreciate |
| --- | --- |
| Parsing | Visual hierarchy |
| Keywords | Typography |
| Extraction | Personality |
| Rigid structure | Storytelling & design |

This project explores the second column on purpose.

---

## The 2020 Version

The repository preserves the résumé I created around **2020** as an intentional archive of personal/project history.

It lives at:

[`assets/archive/2020-resume/`](assets/archive/2020-resume/)

That code is preserved rather than rewritten. From the current site, open it with **“2020 Archived Resume”** in the footer.

---

## Shenanigans? 

I know what ATS-friendly means. I have one of those too.

Somewhere, an ATS is probably very uncomfortable with this CSS.

This is my intentionally unprofessional resume — not flattened for an ATS, an HR checklist, or an AI ranking humans like database rows.

---

## Features

Verified against the current project:

- Responsive résumé website
- Editorial visual design for human readers
- Print / Save PDF support
- Professional sections (summary, experience, education, certifications, skills, portfolio, contact/social)
- Portfolio, GitHub, and LinkedIn links
- Historical 2020 résumé archive (linked from the current page)
- Lightweight vanilla JavaScript interactions

---

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript

Framework-free. No React. No Next.js. No build step. No npm required.

Open `index.html`, or serve the repo root as a static site.

---

## Project structure

```text
Resume/
├── index.html                 # Current unprofessional resume
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── icons/
    │   └── icons8-console-96.png
    ├── images/
    │   └── profile-320.jpg
    └── archive/
        └── 2020-resume/       # Preserved historical resume (~2020)
            ├── index.html
            ├── README.md
            ├── bootstrap.min.css
            ├── jquery-3.5.0.min.js
            ├── popper.min.js
            └── …images / assets
```

---

## Run locally

Simplest option: open `index.html` in a browser.

Or serve the project root with any static server, for example:

```bash
npx --yes serve .
```

Then visit the local URL it prints (usually `http://localhost:3000`).

---

## GitHub Pages

- **Live:** [https://mrhassansaif.github.io/Resume/](https://mrhassansaif.github.io/Resume/)
- **Repository:** [https://github.com/mrhassansaif/Resume](https://github.com/mrhassansaif/Resume)

Deploy by publishing the repository root on GitHub Pages. No build pipeline required.

---

## Author

**Muhammad Hassan Bin Saif**

- Portfolio: [mrhassansaif.github.io/my-portfolio2.0](https://mrhassansaif.github.io/my-portfolio2.0/)
- LinkedIn: [Hassan Bin Saif](https://www.linkedin.com/in/mr-hassansaif/)
