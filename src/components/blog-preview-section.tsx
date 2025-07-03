import { blogPosts } from '@/data/blog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function BlogPreviewSection() {
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="py-8 md:py-12 bg-background">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">From Our Blog</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Stay updated with the latest industry news, tips, and insights from our experts.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {recentPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                            <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="relative h-56">
                                    <Image
                                        src={post.image as StaticImageData}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        alt={post.title}
                                        className="transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={post.hint}
                                        placeholder='blur'
                                    />
                                </div>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                                    <h3 className="text-xl font-bold font-headline mb-4 flex-grow">{post.title}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow-0">{post.description}</p>
                                    <div className="flex items-center text-primary font-semibold text-sm">
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button asChild size="lg" className="font-bold">
                        <Link href="/blog">View All Articles</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
