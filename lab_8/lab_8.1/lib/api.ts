import { Post, Author } from "@/types"
import { title } from "process"

const authors: Author[] = [
    {
        id: "1",
        name: "John Doe",
        bio: "Tech writer",
        avatar: "/avatars/john.jpg"
    },
    {
        id: "1",
        name: "John Doe",
        bio: "Tech writer",
        avatar: "/avatars/john.jpg"
    },
]

const posts: Post[] = [
    {
        id: "1",
        title: "GettingStarted with Next.js",
        content: "Next.js is aReact framework that enables server-siderendering...",
        author: "1",
        date: "2026-03-01",
        tags: ["nextjs", "react"],
        readTime: 5,
    },
    {
        id: "2",
        title: "why TS is Useful",
        content: "TS helps developers write safer code by adding types",
        author: "2",
        date: "2026-03-02",
        tags: ["typescript", "js"],
        readTime: 4,
    },
    {
        id: "3",
        title: "Understanding Static Site Generation",
        content: "Static Site Generation creates HTML pages at build time",
        author: "1",
        date: "2026-03-03",
        tags: ["ssg", "nextjs"],
        readTime: 6,
    },
];

export async function getAllPosts(): Promise<Post[]> {
    return posts;
}

export async function getPostById(id:string): Promise<Post | undefined> {
    return posts.find((p) => p.id === id);
}

export async function getAuthorById(id:string): Promise<Author | undefined> {
    return authors.find((a) => a.id === id)
}