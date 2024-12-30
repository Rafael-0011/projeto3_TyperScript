export class Filme {
  adult: boolean;
  backdropPath: string;
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;

  constructor(
    adult: boolean,
    backdropPath: string,
    id: number,
    originalLanguage: string,
    originalTitle: string,
    overview: string,
    popularity: number,
    posterPath: string,
    releaseDate: string,
    title: string,
    video: boolean,
    voteAverage: number,
    voteCount: number
  ) {
    this.adult = adult;
    this.backdropPath = backdropPath;
    this.id = id;
    this.originalLanguage = originalLanguage;
    this.originalTitle = originalTitle;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = posterPath;
    this.releaseDate = releaseDate;
    this.title = title;
    this.video = video;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
  }
}
