export interface UserDataTypes
{
  "name": string,
  "username": string,
  "twitter_username": string,
  "github_username": string,
  "user_id": number,
  "website_url": string,
  "profile_image": string,
  "profile_image_90": string
}

export interface FlareTagDataTypes{
  "name": string,
  "bg_color_hex": string,
  "text_color_hex": string
}
export interface ArticleDataTypes{
  "type_of": string,
    "id": number,
    "title": string,
    "description": string,
    "readable_publish_date": string,
    "slug": string,
    "path": string,
    "url": string,
    "comments_count": number,
    "public_reactions_count": number,
    "collection_id": null | any,
    "published_timestamp": string,
    "positive_reactions_count": number,
    "cover_image": string,
    "social_image": string,
    "canonical_url": string,
    "created_at": string,
    "edited_at": null | any,
    "crossposted_at": null | any,
    "published_at": string,
    "last_comment_at": string,
    "reading_time_minutes": number,
    "tag_list":  String[],
    "tags": string,
    "user": UserDataTypes,
    "flare_tag": {
     
    }
}

export interface ArticleDetailsReturnType{
  "type_of": string,
  "id": number,
  "title": string,
  "readable_publish_date": string,
  "slug": string,
  "path": string,
  "url": string,
  "comments_count": number,
  "public_reactions_count": number,
  "collection_id": null | number,
  "published_timestamp": string,
  "positive_reactions_count": number,
  "cover_image": null | string,
  "social_image": string,
  "canonical_url": string,
  "created_at": string,
  "edited_at": null|string,
  "crossposted_at": null|string,
  "published_at": string,
  "last_comment_at": string,
  "reading_time_minutes": number,
  "tag_list": string,
  "tags": Array<string>,
  "body_html": string,
  "body_markdown": string,
  "user": UserDataTypes
}
