export interface IheroCard {
  comics: {
    available: number;
    collectionURI: string;
    items: { resourceURI: string }[];
    returned: number;
  };
  description: string;
  events: {
    available: number;
    collectionURI: string;
    items: { resourceURI: string }[];
    returned: number;
  };
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: {
    available: number;
    collectionURI: string;
    items: { resourceURI: string }[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: { resourceURI: string }[];
    returned: number;
  };
  thumbnail: { path: string; extension: string };
  urls?: { type: string; url: string }[];
}
