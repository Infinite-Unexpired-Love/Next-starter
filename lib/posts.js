import { readFileSync } from "fs"
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts');
export default function getSortedPostsData() {
    console.log(postsDirectory);
}