import { useEffect } from 'react';
import { generateMetaTags, seoConfig } from '../data/seoConfig';

export function useSEO(page, customTitle = null, customDescription = null) {
  useEffect(() => {
    const meta = generateMetaTags(page);
    
    // Title
    document.title = customTitle || meta.title;
    
    // Description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = customDescription || meta.description;
    
    // Keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.name = 'keywords';
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.content = meta.keywords;
    
    // Open Graph tags
    const ogTags = {
      'og:title': customTitle || meta.openGraph.title,
      'og:description': customDescription || meta.openGraph.description,
      'og:image': meta.openGraph.image,
      'og:type': meta.openGraph.type,
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
    
    // Twitter tags
    const twitterTags = {
      'twitter:card': meta.twitter.card,
      'twitter:title': customTitle || meta.twitter.title,
      'twitter:description': customDescription || meta.twitter.description,
      'twitter:image': meta.twitter.image,
      'twitter:creator': meta.twitter.creator,
    };
    
    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${seoConfig.site.url}${window.location.pathname}`;
    
  }, [page, customTitle, customDescription]);
}
