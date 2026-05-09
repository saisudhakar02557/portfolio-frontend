# Portfolio Frontend

React + TypeScript + Vite portfolio site.

## Deploy

This frontend is ready for long-term hosting on Netlify.

1. In Netlify, choose **Add new site** > **Import an existing project**.
2. Connect GitHub and select this repository.
3. Netlify should read `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `22.13.0`
4. Deploy the site.

After that, every push to the main branch will rebuild and redeploy the site.
