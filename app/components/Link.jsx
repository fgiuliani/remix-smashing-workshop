import { storyblokEditable } from "@storyblok/react";

const Link = ({ blok }) => {
  let url =
    blok.url.linktype == "story"
      ? "/" + blok.url.story?.full_slug
      : blok.url.url;

  return (
    <div {...storyblokEditable(blok)}>
      <a href={url}>{blok.text}</a>
    </div>
  );
};

export default Link;
