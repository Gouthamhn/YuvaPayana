# Yuva Payana 2026 · Team 07 — interactive team album

A single-page site (no backend). Open `index.html` in a browser, or upload the whole folder to any static host.

## 1. Add your content
Open `script.js`. Everything you need to edit is in the `TEAM` block at the top:
mentor, two leaders, participants, tagline, closing message.

To add a participant, copy one `{ name: ... }` line inside `participants` and edit it.
The gallery, profile cards, "Meet Someone" button and Our Team page update automatically.

## 2. Add your photos
    assets/logo.png
    assets/mentor.jpg
    assets/leader1.jpg
    assets/leader2.jpg
    assets/participants/person1.jpg, person2.jpg, ...

Tips: portrait photos (about 4:5), around 800 px wide, under 300 KB each. File names must match the
`photo:` paths in `script.js` (they are case-sensitive on most hosts). If a photo is missing, the
person's initials are shown instead.

## 3. Colours and fonts
`style.css`, first block (`:root`): `--navy`, `--gold`, `--cream`, and the two fonts.
If your logo uses different colours, change those two variables and the whole site follows.

## 4. Put it online (free)
Netlify Drop (drag the folder onto app.netlify.com/drop), GitHub Pages, or Vercel.

## Keyboard / touch
Profile card: ← → to move between people, Esc to close. On phones, swipe left/right.
