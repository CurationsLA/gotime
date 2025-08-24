# Curations - Cultural Marketing Agency Platform

A bold, modern platform for a cutting-edge marketing agency that curates cultural moments and transforms brands into community forces.

**Experience Qualities**:
1. **Bold**: High-contrast design with strong typography and vivid colors that command attention
2. **Cultural**: Contemporary aesthetic that feels current and tapped into modern cultural movements  
3. **Professional**: Structured layout and clear information hierarchy that builds trust and credibility

**Complexity Level**: Light Application (multiple features with basic state)
- Multi-page marketing site with distinct service verticals, each requiring their own landing pages with custom content and pricing packages.

## Essential Features

### Homepage Hero Experience
- **Functionality**: Dynamic multi-layered title display with brand colors and navigation to service areas
- **Purpose**: Immediately communicate the brand's bold identity and core value proposition
- **Trigger**: User lands on homepage
- **Progression**: View hero → Read value props → Click service cards → Navigate to landing pages
- **Success criteria**: Users understand the brand and navigate to relevant service pages

### Service Landing Pages
- **Functionality**: Templated pages for each service vertical (Restaurants, AI, PR, Creative, etc.) with custom content, pricing, and highlights
- **Purpose**: Convert visitors by clearly explaining specific service value and packages
- **Trigger**: Navigation from homepage or direct link
- **Progression**: Read service description → Review highlights → Compare packages → Contact/convert
- **Success criteria**: Clear differentiation between services and obvious next steps for engagement

### Navigation System
- **Functionality**: Fixed navigation bar with consistent branding and links to all major sections
- **Purpose**: Provide easy wayfinding throughout the multi-page experience
- **Trigger**: Available on every page
- **Progression**: Click nav item → Navigate to section → Maintain context of current location
- **Success criteria**: Users never feel lost and can easily move between sections

## Edge Case Handling
- **Mobile responsiveness**: Typography and layout adapt gracefully to smaller screens
- **Missing content**: Service pages gracefully handle missing pricing or highlight data
- **Loading states**: Smooth transitions between pages without flash of unstyled content
- **Accessibility**: High contrast colors meet WCAG standards and navigation is keyboard accessible

## Design Direction
The design should feel like a high-end creative agency - bold, confident, and culturally aware with strong geometric shapes and high contrast elements that feel both modern and timeless.

## Color Selection
Custom palette using bold, culturally-relevant colors that communicate energy and professionalism.

- **Primary Color (Hot Pink #ff69b4)**: Main brand color communicating creativity and boldness - used for key CTAs and brand moments
- **Secondary Color (Bright Blue #38b6ff)**: Supporting color for secondary actions and complementary elements
- **Accent Color (Lime Green #ebf998)**: Attention-grabbing highlight for success states and emphasis
- **Foreground/Background Pairings**: 
  - Background (White #FDFDFC): Black text (#000000) - High contrast for maximum readability
  - Primary (Hot Pink #ff69b4): White text (#FFFFFF) - Strong contrast for buttons and CTAs
  - Accent (Lime Green #ebf998): Black text (#000000) - Vibrant highlight maintaining readability
  - Card backgrounds (White #FFFFFF): Black text with 4px black borders for brutalist aesthetic

## Font Selection
Bold, uppercase typography that feels contemporary and authoritative, using system fonts for optimal performance and accessibility.

- **Typographic Hierarchy**: 
  - H1 (Main Title): System Bold/clamp(3rem, 6vw, 6rem)/uppercase/outline effect
  - H2 (Section Headers): System Bold/2rem/uppercase/high contrast
  - H3 (Card Titles): System Bold/1.5rem/uppercase
  - Body Text: System Regular/1rem/normal case
  - Navigation: System Bold/1rem/uppercase

## Animations
Minimal, purposeful animations that enhance the user experience without distracting from content - focus on smooth transitions and subtle hover effects.

- **Purposeful Meaning**: Motion should feel confident and direct, matching the bold brand personality
- **Hierarchy of Movement**: Hero elements get priority for animation, with subtle interactions on secondary elements

## Component Selection
- **Components**: Card, Button, Navigation components from shadcn with heavy customization for brutalist aesthetic
- **Customizations**: Strong borders (4px), bold typography, high contrast colors, boxy layouts over rounded corners
- **States**: Buttons with solid fills and strong hover states, cards with prominent shadows and borders
- **Icon Selection**: Minimal use of icons, preferring bold typography and emoji for visual interest
- **Spacing**: Generous padding (2rem+) and margins for breathing room and modern feel
- **Mobile**: Stack layouts vertically, maintain bold typography hierarchy, ensure touch targets are 44px minimum