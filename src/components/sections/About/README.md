# About Section

## Structure

```
About.tsx          ← Parent (layout + section title)
About/
├── InfoStats.tsx   ← Personal info + stat cards
├── Skills.tsx      ← Circular progress rings grid
└── Resume.tsx      ← Experience & Education timeline
```

## Updating Content

All data lives in **`/lib/data/aboutData.ts`**. Edit the exported objects:

| Export         | What it controls                                  |
| -------------- | ------------------------------------------------- |
| `personalInfo` | Name, age, contact info, CV download path         |
| `stats`        | The four stat cards (value + label)               |
| `skills`       | Skill names & percentages for circular rings      |
| `timeline`     | Experience & education entries (type, years, etc) |

TypeScript interfaces are in **`/types/about.d.ts`**.

## Accent Color

The amber accent `#FFB400` is used throughout. To change it, search-and-replace `#FFB400` in the three child components.
