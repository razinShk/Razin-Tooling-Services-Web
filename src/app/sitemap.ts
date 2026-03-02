import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.razintoolingservices.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static Routes
    const routes = [
        '',
        '/about-us',
        '/services',
        '/projects',
        '/skilled-manpower',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Core Service pages
    const services = [
        '/services/tool-installation-india',
        '/services/die-proving-india',
        '/services/tool-modification',
        '/services/critical-part-proving',
        '/services/industrial-skilled-manpower',
        '/services/automotive-tooling',
        '/services/sheet-metal-tooling',
        '/services/oem-supplier-tooling',
        '/services/high-tensile-dp-790'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // We will later add dynamic location routes here, but this is the baseline sitemap.

    return [...routes, ...services];
}
