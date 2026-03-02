import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import { Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Industrial Tooling Blog',
    description: 'Read the latest insights and technical articles on die proving, tool installation, and automotive manufacturing by Razin Tooling Services.',
};

export default function BlogIndexPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <section className="bg-slate-900 py-16 sm:py-24 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Industrial Tooling Insights</h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        Expert strategies, technical deep-dives, and industry trends to optimize your press shop operations.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-medium">
                                    <span className="flex items-center gap-1.5"><Calendar size={16} className="text-blue-500" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><User size={16} className="text-blue-500" /> {post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2 hover:text-blue-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-bold hover:underline self-start">
                                    Read Full Article →
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
