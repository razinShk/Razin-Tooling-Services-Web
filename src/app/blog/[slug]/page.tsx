import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blogData";
import { Calendar, User } from "lucide-react";

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `https://razintoolingservices.in/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) notFound();

    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>{post.title}</h1>
                    <p className="lead text-ink-2">
                        Written by {post.author} on <time dateTime={post.date}>{post.date}</time>.
                    </p>
                    <div className="pt-2">
                        <Link href="/blog" className="btn btn--secondary">
                            Return to Technical Notes
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container">
                    <article className="plate space-y-6 max-w-4xl">
                        <div className="flex flex-wrap items-center gap-6 text-sm text-ink-2 border-b-2 border-ink pb-4">
                            <span className="flex items-center gap-2 figure-num">
                                <Calendar size={18} aria-hidden="true" />
                                <time dateTime={post.date}>{post.date}</time>
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={18} aria-hidden="true" />
                                {post.author}
                            </span>
                        </div>

                        <p className="lead font-medium text-ink bg-paper-2 p-6 border-2 border-ink">
                            {post.excerpt}
                        </p>

                        <div className="space-y-6">
                            {post.content.map((paragraph, idx) => (
                                <p key={idx} className="text-ink-2 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="pt-8 border-t-2 border-ink flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h2>Need on-site die proving or toolmakers?</h2>
                                <p className="text-ink-2 mt-1">
                                    Deploy Razin Tooling Services directly to your press shop floor.
                                </p>
                            </div>
                            <Link href="/contact" className="btn btn--primary">
                                Consult With an Expert
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
