import { useEffect } from 'react';

type SeoOptions = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo(opts: SeoOptions) {
  useEffect(() => {
    if (opts.title) document.title = opts.title;
    if (opts.description) {
      setMeta('name', 'description', opts.description);
      setMeta('property', 'og:description', opts.description);
      setMeta('name', 'twitter:description', opts.description);
    }
    if (opts.keywords) {
      setMeta('name', 'keywords', opts.keywords);
    }
    if (opts.title) {
      setMeta('property', 'og:title', opts.title);
      setMeta('name', 'twitter:title', opts.title);
    }
    setMeta('property', 'og:type', 'website');
    const url = opts.url || window.location.href;
    setMeta('property', 'og:url', url);
    if (opts.image) {
      setMeta('property', 'og:image', opts.image);
      setMeta('name', 'twitter:image', opts.image);
    }
    setMeta('name', 'twitter:card', 'summary_large_image');
    if (opts.canonical) {
      setLink('canonical', opts.canonical);
    }
  }, [opts.title, opts.description, opts.keywords, opts.image, opts.url, opts.canonical]);
}
