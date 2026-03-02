import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getPostBySlug } from '@/data/blogData';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `https://razintoolingservices.in/blog/${post.slug}`,
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) notFound();

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">

            <section className="bg-slate-900 border-b border-slate-800 text-white py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <Link href="/blog" className="text-blue-400 hover:text-white font-bold text-sm mb-8 inline-flex items-center gap-2 transition-colors">
                        <ArrowLeft size={16} /> Back to Blog Index
                    </Link>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-6 font-medium">
                        <span className="flex items-center gap-2"><Calendar size={18} className="text-blue-500" /> {post.date}</span>
                        <span className="flex items-center gap-2"><User size={18} className="text-blue-500" /> By {post.author}</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                        {post.title}
                    </h1>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <article className="prose prose-lg prose-slate prose-blue max-w-none bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200">
                        <p className="text-xl font-medium text-slate-800 leading-relaxed mb-8 border-l-4 border-blue-500 pl-6 py-2 bg-slate-50">
                            {post.excerpt}
                        </p>

                        {post.content.map((paragraph, idx) => (
                            <p key={idx} className="text-slate-700 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}

                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Looking to optimize your production?</h3>
                            <p className="text-slate-700 mb-6">Our dedicated team at Razin Tooling Services is ready to deploy leading expertise to your press shop floor.</p>
                            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">
                                Consult with an Expert
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    );
}
