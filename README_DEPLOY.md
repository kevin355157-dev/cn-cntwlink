# cn.cntwlink.com deploy notes

This folder is the clean deployment package for the China-friendly site.

## Target

- GitHub repository: `cn-cntwlink`
- Cloudflare Pages project: `cn-cntwlink`
- Website domain: `cn.cntwlink.com`
- Podcast audio domain: `audio.cntwlink.com`

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

Do not upload podcast MP3/M4A files into Cloudflare Pages.

Upload audio files to Cloudflare R2, then add URLs like this in
`data/podcast_episodes.json`:

```json
"audio_url": "https://audio.cntwlink.com/podcast/ep001.m4a"
```

Until R2 is ready, keep `audio_url` empty so the page will not show a broken
player.
