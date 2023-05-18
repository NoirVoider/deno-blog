/** @jsx h */

import blog, { ga } from "blog";

blog({
  author: "NoirVoider",
  title: "NoirVoider Blog",
  description: "A boring blog",
  avatar: "https://www.gravatar.com/avatar/a164966f7def242e279fa521c323d106?s=300",
  favicon: "https://www.gravatar.com/avatar/a164966f7def242e279fa521c323d106?s=50",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/NoirVoider" },
    { title: "Twitter", url: "https://twitter.com/b7o5m" }
  ],
  lang: "en",
  dateFormat: date => new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  middlewares: [ga("UA-XXXXXXXX-X")]
});
