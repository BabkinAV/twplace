export const getImages = (length = 10) => {
  return fetch(`https://api.thecatapi.com/v1/breeds`)
    .then(response => response.json())
    .then((response: { description: string; image: { url: string } }[]) => {
      const images: { title: string; url: string }[] = [];
      response.forEach(c => {
        const title = c?.description;
        const url = c?.image?.url;

        images.push({ title, url });
      });
      return images.slice(0, length); // remove the extra cats
    });
};
