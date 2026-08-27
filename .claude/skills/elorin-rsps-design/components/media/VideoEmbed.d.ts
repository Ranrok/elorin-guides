/** 16:9 YouTube wrapper with a mono caption. */
export interface VideoEmbedProps {
  /** YouTube video id. Omit for a "video pending" placeholder. */
  youtubeId?: string;
  title?: string;
  caption?: string;
  className?: string;
}
export declare function VideoEmbed(props: VideoEmbedProps): JSX.Element;
