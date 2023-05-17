const fs = require('fs')
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts');
export default function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    console.log(fileNames);
}