# Next steps for cn.cntwlink.com

The deploy package is ready and committed locally.

Local repo:

```text
C:\Users\kevin\Downloads\CNCTL\dist-cloudflare
```

Initial commit:

```text
Initial China-friendly static site
```

## 1. Create GitHub repository

Create an empty GitHub repository named:

```text
cn-cntwlink
```

Do not add README, .gitignore, or license on GitHub because this local repo
already has the first commit.

After creating it, copy the repository URL, for example:

```text
https://github.com/YOUR_ACCOUNT/cn-cntwlink.git
```

## 2. Push this local repo

Run these commands from this folder:

```powershell
git remote add origin https://github.com/YOUR_ACCOUNT/cn-cntwlink.git
git push -u origin main
```

## 3. Create Cloudflare Pages project

In Cloudflare:

```text
Workers & Pages
Create application
Pages
Connect to Git
Select cn-cntwlink
```

Build settings:

```text
Framework preset: None
Build command: empty
Build output directory: /
Production branch: main
```

## 4. Add custom domain

In the new Pages project:

```text
Custom domains
Set up a domain
cn.cntwlink.com
```

This adds only the `cn` subdomain and should not replace `cntwlink.com`.

## 5. Podcast audio

Podcast audio is intentionally not included in this Pages repo.

The current live mode is Podcast import/search mode, so keep `audio_url` empty
in `data/podcast_episodes.json`. Readers should use the episode title to search
on their preferred Podcast platform.
