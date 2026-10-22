# Socius Beistandschaften – Website

Statische Website für [socius-beistandschaften.ch](https://socius-beistandschaften.ch), gebaut mit Astro + Tailwind CSS und über GitHub Pages ausgeliefert.

## Entwicklung

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # Ausgabe in ./dist
```

## Inhalte pflegen

| Was | Wo |
|---|---|
| Texte der Dienstleistungen | `src/content/dienstleistungen/*.md` (Dateiname = URL) |
| Team (Namen, Titel, Kontakt) | `src/data/team.ts` |
| Adresse, Telefon, E-Mail, Zitat | `src/data/site.ts` |
| Impressum / Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |

### Bilder ersetzen

Portraits liegen in `src/assets/team/`, das Logo in `src/assets/logo.png`. Einfach durch die Originale in voller Auflösung ersetzen (gleicher Dateiname) – Astro erzeugt beim Build automatisch optimierte WebP-Versionen in passenden Grössen. Hat ein neues Bild eine andere Endung, den Import in `src/data/team.ts` anpassen.

## Deployment

Jeder Push auf `main` baut und veröffentlicht die Seite über `.github/workflows/astro.yml`.

Einmalig auf GitHub: *Settings → Pages → Source: GitHub Actions*, Custom Domain `socius-beistandschaften.ch` eintragen, „Enforce HTTPS“ aktivieren.

DNS beim Domain-Provider (erst umstellen, wenn die Seite geprüft ist; MX-Einträge für E-Mail nicht ändern):

- `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `AAAA` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- `www` `CNAME` → `<github-user>.github.io`
