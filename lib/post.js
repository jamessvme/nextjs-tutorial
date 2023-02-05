import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),"posts");

export function getStortedPostsData() {

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map( (fileName) => {

    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data
    };
  });
  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      }
    }
  });
}

export async function getPostdata(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const precessedContent = await remark()
  .use(html)
  .process(matterResult.content);
  const contentHTML = precessedContent.toString();
  return {
    id,
    contentHTML,
    ...matterResult.data
  }
}