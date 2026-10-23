import type { ImageMetadata } from "astro";
import johannesSuter from "../assets/team/johannes-suter.jpg";
import jannikBeugger from "../assets/team/jannik-beugger.jpg";
import lauraNiklaus from "../assets/team/laura-niklaus.png";
import timonSutter from "../assets/team/timon-sutter.jpg";
import saschaMangold from "../assets/team/sascha-mangold.png";

export interface TeamMember {
  name: string;
  roles: string[];
  email: string;
  phone?: string;
  image: ImageMetadata;
}

export const team: TeamMember[] = [
  {
    name: "Johannes Suter, MLaw",
    roles: ["Berufsbeistand SVBB-ASCP"],
    email: "johannes.suter@socius-beistandschaften.ch",
    phone: "+41 (0)78 257 37 49",
    image: johannesSuter,
  },
  {
    name: "Laura Niklaus, BLaw",
    roles: ["BA / Ausbilderin mit eidg. Fachausweis"],
    email: "laura.niklaus@socius-beistandschaften.ch",
    phone: "+41 (0)77 293 47 91",
    image: lauraNiklaus,
  },
  {
    name: "Timon Sutter, MLaw",
    roles: ["Mediator / CAS Abklärung und Anordnung i.A."],
    email: "timon.sutter@socius-beistandschaften.ch",
    phone: "+41 (0)77 292 41 46",
    image: timonSutter,
  },
    {
    name: "Jannik Beugger, MLaw",
    roles: ["MSc Soziale Arbeit"],
    email: "jannik.beugger@socius-beistandschaften.ch",
    image: jannikBeugger,
  },
  {
    name: "Sascha Mangold",
    roles: ["Backoffice"],
    email: "sascha.mangold@socius-beistandschaften.ch",
    image: saschaMangold,
  },
];

export const telHref = (phone: string) => "tel:" + phone.replace("(0)", "").replace(/\s/g, "");
