const base = import.meta.env.BASE_URL || '/';

export function decodeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&rsquo;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/\r\n/g, '\n')
    .replace(/src="\/upload\//g, `src="${base}upload/`)
    .replace(/href="\/upload\//g, `href="${base}upload/`)
    .replace(/src="\/images\/upload\//g, `src="${base}images/upload/`)
    .replace(/href="\/images\/upload\//g, `href="${base}images/upload/`)
    .replace(/src="\/upload\/images\//g, `src="${base}upload/images/`)
    .replace(/href="\/upload\/images\//g, `href="${base}upload/images/`);
}
