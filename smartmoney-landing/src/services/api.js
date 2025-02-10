export const fetchPosts = async () => {
    const response = await fetch("https://devblog.insanydesign.com/wp-json/wp/v2/posts/");
    const data = await response.json();
    return data;
};