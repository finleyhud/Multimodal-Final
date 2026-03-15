import { Type } from "@google/genai";

export interface HotspotData {
  id: string;
  label: string;
  humanValue: string;
  systemValue: string;
  humanPerception: string;
  systemPerception: string;
  reality: string;
  category: string;
}

export const HOTSPOTS: HotspotData[] = [
  {
    id: "name",
    label: "Applicant Name",
    humanValue: "Lamar J. Rodriguez",
    systemValue: "L. James Rodriguez",
    humanPerception: "A unique individual with a diverse background.",
    systemPerception: "High-risk cultural marker detected. Statistical probability of 'fit' decreased by 36%.",
    reality: "Kang et al. (2016) found that 'whitening' a name, such as using initials that sounded more race-neutral, leads to 2.5x more callbacks for Black applicants and 1.8x more for Asians.",
    category: "Identity"
  },
  {
    id: "address",
    label: "Address / ZIP Code",
    humanValue: "South Side, Chicago, IL",
    systemValue: "GEO_ZONE_772",
    humanPerception: "A resident of a vibrant, historic neighborhood.",
    systemPerception: "Proxy for low-SES demographic. Correlated with higher turnover and lower 'stability' metrics.",
    reality: "Location serves as a proxy for race due to persistent residential segregation. Quillian et al. (2017) found no significant decline in hiring discrimination against Black applicants since 1989, reflecting deep-seated structural barriers tied to geography.",
    category: "Socio-economic"
  },
  {
    id: "education",
    label: "Education (University)",
    humanValue: "State University of New York",
    systemValue: "RANK_NON_ELITE",
    humanPerception: "A graduate of a respected public university.",
    systemPerception: "Non-target institution. Lacks 'elite' network signal. Downgrade priority for top-tier roles.",
    reality: "Poe & Mestari (2024) argue that algorithmic 'accuracy' often relies on historical data that favors elite institutions. This creates a 'meritocratic' loop that excludes qualified candidates who lacked access to high-resource networks.",
    category: "Institutional"
  },
  {
    id: "extracurricular",
    label: "Student Organizations",
    humanValue: "Black Student Union (President)",
    systemValue: "Students' Association",
    humanPerception: "A leader committed to community and advocacy.",
    systemPerception: "Identity-linked activity. Potential 'cultural fit' conflict. Prefer race-neutral leadership signals.",
    reality: "Kang et al. (2016) found that applicants often feel forced to scrub identity-linked organizations (e.g., 'Black Student Union') to avoid stigma. Paradoxically, 'pro-diversity' employers are just as likely to discriminate against unwhitened resumes.",
    category: "Whitening"
  },
  {
    id: "interests",
    label: "Interests & Hobbies",
    humanValue: "Community Outreach",
    systemValue: "Hiking & Snowboarding",
    humanPerception: "Passionate about giving back to the community.",
    systemPerception: "Assimilation signal detected. High correlation with dominant cultural norms.",
    reality: "Kang et al. (2016) noted that applicants 'Americanize' their interests to signal conformity to white-dominant corporate norms. Adding hobbies like 'hiking' or 'snowboarding' is a strategic attempt to appear more 'relatable' to white evaluators.",
    category: "Assimilation"
  },
  {
    id: "keywords",
    label: "Keyword Density",
    humanValue: "Advocacy & Social Justice",
    systemValue: "Policy Analysis & Metrics",
    humanPerception: "Focused on meaningful social impact.",
    systemPerception: "Lexical mismatch. Low alignment with corporate performance indicators. Flag for 'activist' bias.",
    reality: "Poe & Mestari (2024) highlight the conflict between 'fairness' and 'generalizability.' ATS systems often penalize language that doesn't mirror white-dominant corporate lexicons, forcing applicants to translate their experience into 'legible' terms.",
    category: "Lexicon"
  }
];
