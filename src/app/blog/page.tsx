import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import { Calendar, User } from "lucide-react";

export const metadata: Metadata = {
    title: "Industrial Tooling Technical Notes",
    description:
        "Technical articles on 210 mm deep-draw die proving, press tool installation, and DP-790 stamping by Asif N Shaikh and Razin Tooling Services.",
};

export default function BlogIndexPage() {
    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>Press shop technical notes</h1>
                    <p className="lead text-ink-2">
                        Field notes on die proving, DP-790 springback, and tool commissioning.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post, idx) => (
                            <article
                                key={post.slug}
                                className={idx === 0 ? "plate flex flex-col justify-between space-y-6" : "well border-2 border-ink flex flex-col justify-between space-y-6"}
                            >
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-ink-2 border-b border-ink pb-3">
                                        <span className="flex items-center gap-1.5 figure-num">
                                            <Calendar size={16} aria-hidden="true" />
                                            <time dateTime={post.date}>{post.date}</time>
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <User size={16} aria-hidden="true" />
                                            {post.author}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl">
                                        <Link href={`/blog/${post.slug}`} className="no-underline hover:underline">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-ink-2 leading-relaxed">{post.excerpt}</p>
                                </div>
                                <div className="pt-2">
                                    <Link href={`/blog/${post.slug}`} className="btn btn--secondary">
                                        Read Technical Note
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
