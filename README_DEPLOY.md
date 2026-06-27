# cn.cntwlink.com deploy notes

This folder is the clean deployment package for the China-friendly site.

## Target

- GitHub repository: `cn-cntwlink`
- Cloudflare Pages project: `cn-cntwlink`
- Website domain: `cn.cntwlink.com`

## Cloudflare Pages settings

- Framework preset: None / Static HTML
- Build command: leave empty
- Build output directory: `/`
- Production branch: `main`

## What is included

- HTML pages
- `assets/`
- `data/articles.json`
- `data/podcast_episodes.json`
- `data/collaborators.json`
- audit/dashboard pages

## What is intentionally excluded

- `MP3/`
- `tools/`
- `supabase_import/`
- source Excel/CSV folders
- local scripts and test outputs

## Podcast audio

The live site currently uses Podcast import/search mode. Do not upload podcast
MP3/M4A files into Cloudflare Pages, and do not enable R2 for this mode.

Keep `audio_url` empty in `data/podcast_episodes.json`. Readers should use the
episode title to search on their preferred Podcast platform.
