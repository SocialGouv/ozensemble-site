import type { Schema, Attribute } from "@strapi/strapi"

export interface BlocksCardsBlock extends Schema.Component {
  collectionName: "components_blocks_cards_blocks"
  info: {
    displayName: "cards-block"
    description: ""
  }
  attributes: {
    title: Attribute.String
    description: Attribute.Blocks
    card: Attribute.Component<"number-card.number-card", true>
    direction: Attribute.Enumeration<["horizental", "vertical"]> &
      Attribute.DefaultTo<"horizental">
  }
}

export interface BlocksParternsSection extends Schema.Component {
  collectionName: "components_blocks_parterns_sections"
  info: {
    displayName: "parterns-section"
    icon: "bulletList"
    description: ""
  }
  attributes: {
    title: Attribute.String
    logos: Attribute.Component<"micros.image", true>
  }
}

export interface BlocksUrlsSection extends Schema.Component {
  collectionName: "components_blocks_urls_sections"
  info: {
    displayName: "urls-section"
    description: ""
  }
  attributes: {
    title: Attribute.String
    urls: Attribute.Component<"micros.titled-url", true>
    parentUrl: Attribute.String
  }
}

export interface HeroHero extends Schema.Component {
  collectionName: "components_hero_heroes"
  info: {
    displayName: "hero"
    icon: "cloud"
    description: ""
  }
  attributes: {
    image: Attribute.Media
    Problem: Attribute.String
    numberCard: Attribute.Component<"number-card.number-card", true>
  }
}

export interface HeroHowItWorks extends Schema.Component {
  collectionName: "components_hero_how_it_works_s"
  info: {
    displayName: "how it works "
    icon: "lightbulb"
    description: ""
  }
  attributes: {
    title: Attribute.String
    description: Attribute.Blocks
    howitworkscard: Attribute.Component<"number-card.how-itworks-cards", true>
  }
}

export interface MicrosImage extends Schema.Component {
  collectionName: "components_micros_images"
  info: {
    displayName: "partner-image"
    icon: "expand"
    description: ""
  }
  attributes: {
    name: Attribute.String
    image: Attribute.Media
    url: Attribute.Text
  }
}

export interface MicrosTitledUrl extends Schema.Component {
  collectionName: "components_micros_titled_urls"
  info: {
    displayName: "titled-url"
    description: ""
  }
  attributes: {
    title: Attribute.String
    url: Attribute.String
  }
}

export interface NumberCardBlogCard extends Schema.Component {
  collectionName: "components_number_card_blog_cards"
  info: {
    displayName: "BlogCard"
    icon: "grid"
    description: ""
  }
  attributes: {
    Image: Attribute.Media
    Heading: Attribute.String
    date: Attribute.String
    description: Attribute.Text
  }
}

export interface NumberCardHowItworksCards extends Schema.Component {
  collectionName: "components_number_card_how_itworks_cards"
  info: {
    displayName: "howItworksCards"
    icon: "check"
    description: ""
  }
  attributes: {
    icon: Attribute.Media
    de: Attribute.Text
  }
}

export interface NumberCardNumberCard extends Schema.Component {
  collectionName: "components_number_card_number_cards"
  info: {
    displayName: "numberCard"
    icon: "chartCircle"
    description: ""
  }
  attributes: {
    Title: Attribute.String
    description: Attribute.Text
    type: Attribute.Enumeration<["vertical", "horizental"]> &
      Attribute.DefaultTo<"horizental">
  }
}

export interface SharedSeoMetaSocial extends Schema.Component {
  collectionName: "components_shared_seo_meta_socials"
  info: {
    displayName: "metaSocial"
    icon: "cast"
    description: ""
  }
  attributes: {
    socialNetwor: Attribute.Enumeration<["twitter", "facebook"]>
    title: Attribute.String
    description: Attribute.String
  }
}

export interface SharedSeoSeo extends Schema.Component {
  collectionName: "components_shared_seo_seos"
  info: {
    displayName: "seo"
    icon: "filter"
    description: ""
  }
  attributes: {
    metaTitle: Attribute.String
    metaDescription: Attribute.String
    sharedImage: Attribute.Media
    metaSocial: Attribute.Component<"shared-seo.meta-social">
  }
}

export interface SharedMedia extends Schema.Component {
  collectionName: "components_shared_media"
  info: {
    displayName: "media"
  }
  attributes: {
    file: Attribute.Media
  }
}

export interface SharedQuote extends Schema.Component {
  collectionName: "components_shared_quotes"
  info: {
    displayName: "Quote"
  }
  attributes: {
    title: Attribute.String
    body: Attribute.String
    author: Attribute.String
  }
}

export interface SharedRichText extends Schema.Component {
  collectionName: "components_shared_rich_texts"
  info: {
    displayName: "Rich text"
  }
  attributes: {
    body: Attribute.RichText
  }
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: "components_shared_video_embeds"
  info: {
    displayName: "Video Embed"
  }
  attributes: {
    url: Attribute.String
  }
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "blocks.cards-block": BlocksCardsBlock
      "blocks.parterns-section": BlocksParternsSection
      "blocks.urls-section": BlocksUrlsSection
      "hero.hero": HeroHero
      "hero.how-it-works": HeroHowItWorks
      "micros.image": MicrosImage
      "micros.titled-url": MicrosTitledUrl
      "number-card.blog-card": NumberCardBlogCard
      "number-card.how-itworks-cards": NumberCardHowItworksCards
      "number-card.number-card": NumberCardNumberCard
      "shared-seo.meta-social": SharedSeoMetaSocial
      "shared-seo.seo": SharedSeoSeo
      "shared.media": SharedMedia
      "shared.quote": SharedQuote
      "shared.rich-text": SharedRichText
      "shared.video-embed": SharedVideoEmbed
    }
  }
}
