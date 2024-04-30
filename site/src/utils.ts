type UrlCheckConf = {
  prodOnly: boolean;
};

export async function ensureUrlReturns200(url: string, conf?: UrlCheckConf) {
  if (conf?.prodOnly && process.env.NODE_ENV !== 'production') {
    console.log(`Skipping URL check for ${url} in non-production environment`);
    return;
  }

  const response = await fetch(url);
  if (response.status !== 200) {
    console.error(`Error fetching ${url}: ${response.statusText}`);
    throw new Error(`Error fetching ${url}: ${response.statusText}`);
  }
}

export async function returns200(url: string, conf?: UrlCheckConf): Promise<boolean> {
  try {
    await ensureUrlReturns200(url, conf);
    return true;
  } catch (e) {
    return false;
  }
}

export function normalizeForId(str: string) {
  return str.trim().toLowerCase().replace(/[\s\_]+/g, '-');
}
