# Digital Inspiration Blog Platform

## Overview
A Next.js-based tech blog platform inspired by Digital Inspiration (labnol.org). The application features topic-based content organization, article listings, and detailed article pages with a beautiful purple-pink gradient design.

## Project Structure
```
/
├── app/                      # Next.js App Router pages
│   ├── layout.js            # Root layout with header/footer
│   ├── page.js              # Homepage with hero, awards, articles
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── topics/              # Topics listing and detail pages
│   │   ├── page.js          # All topics grid
│   │   └── [slug]/          # Dynamic topic detail pages
│   └── articles/            # Article detail pages
│       └── [slug]/          # Dynamic article pages
├── components/              # Reusable React components
│   ├── Header.js           # Navigation header
│   ├── Footer.js           # Page footer
│   ├── Newsletter.js       # Email subscription form
│   ├── TopicTag.js         # Topic tag button
│   └── ArticleCard.js      # Article preview card
├── data/                    # Content storage
│   └── content.json        # Topics and articles data
└── public/                  # Static assets
```

## Features
- **Homepage**: Hero section with author bio, awards showcase, and latest articles
- **Topics Page**: Grid layout of all content categories as clickable tags
- **Topic Detail Pages**: Filtered articles by category with numbered list view
- **Article Pages**: Full article view with table of contents, metadata, and rich content
- **Responsive Design**: Mobile-friendly with gradient purple-pink background
- **JSON-based Content**: Structured data organization for easy content management

## Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Language**: JavaScript
- **Deployment**: Configured for port 5000

## Data Structure
Articles and topics are stored in `/data/content.json`:
- Topics contain: id, name, slug, description
- Articles contain: id, slug, title, description, date, tags, tableOfContents, content

## Development
- Dev server runs on port 5000: `npm run dev`
- Workflow is configured and running automatically
- Hot Module Replacement (HMR) enabled for fast development

## Recent Changes (October 30, 2025)
- Initial project setup with Next.js 16 and Tailwind CSS 3
- Created comprehensive JSON data structure for content management
- Built all core pages and reusable components
- Fixed Next.js 16 async params requirement for dynamic routes
- Configured dev server on port 5000 with proper host binding
- Tested all pages and verified functionality

## Notes
- Uses Next.js 16 async params API (params must be awaited)
- Path aliases configured with `@/` for clean imports
- Gradient background: linear-gradient(135deg, #fce7f3 0%, #ddd6fe 50%, #e0e7ff 100%)
