export const GITHUB_REPO_URL = "https://github.com/Go-RoBo-Services/GoRobo"
export const GITHUB_REPO_API = "https://api.github.com/repos/Go-RoBo-Services/GoRobo"

export const SITE_NAME = "Go RoBo"
export const SITE_TAGLINE = "Robotics & DIY Electronics, made easy."
export const SITE_VERSION = "0.2.0"
export const SITE_PLATFORM = "Web App"
export const SITE_LAST_UPDATED = "August 2026"

// Feature Toggles:
// Set to true when you want to show that Buzz (Express) delivery has extra charges on the storefront.
export const SHOW_BUZZ_EXTRA_CHARGES = false

// Go RoBo Services — the organisation behind the platform and catalog
export const AMAZE_CP_NAME = "Go RoBo Services"
export const AMAZE_CP_TAGLINE =
  "Robotics and DIY electronics component catalog, direct sourcing, and developer tools for the maker community."

// Local fallback used when the GitHub API is unreachable (or the repo is
// still brand new). Sorted newest first.
export const CHANGELOG_FALLBACK: { date: string; message: string }[] = [
  { date: "2026-08-15", message: "Add About, Hall of Fame and Changelog pages; open source on GitHub." },
  { date: "2026-08-15", message: "Add floating category navigation sidebar and collapsed rail." },
  { date: "2026-08-15", message: "Seamless circular theme switch with accent palette picker." },
  { date: "2026-08-15", message: "Dark mode: correct token cascade and color-scheme handling." },
  { date: "2026-08-14", message: "Responsive product catalog: cards, dialog, header and footer polish." },
  { date: "2026-08-14", message: "Static export with Vercel Analytics." },
]

export const HALL_OF_FAME: {
  name: string
  author: string
  description: string
  repo?: string
}[] = [
  {
    name: "Go RoBo Services",
    author: "Core Team",
    description:
      "The organization building and maintaining the robotics and electronics component catalog, APIs, and developer ecosystem.",
    repo: GITHUB_REPO_URL,
  },
  {
    name: "Go RoBo Community",
    author: "Open source community",
    description:
      "Every student, builder, engineer, tester, and customer who helps keep this catalog growing. Thank you for building with us.",
    repo: GITHUB_REPO_URL,
  },
]