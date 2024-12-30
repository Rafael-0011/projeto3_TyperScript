import { Filme } from "../model/Filme";

export class ControllerFilme {
  public addFilme(): Filme {
    const newFilme = new Filme(
      false,
      "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
      447365,
      "en",
      "Guardians of the Galaxy Vol. 3",
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      4145.055,
      "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      "2023-05-03",
      "Guardians of the Galaxy Vol. 3",
      false,
      8.1,
      3154
    );

    return newFilme;
  }
}
