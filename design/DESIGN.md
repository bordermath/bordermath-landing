---
name: Bordermath Visual Framework
colors:
  surface: '#fbf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fbf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#fbf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  container-margin: 20px
---

## Brand & Style

This design system is built on the principles of **Institutional Precision** and **Operational Clarity**. As a visa compliance tool, the interface must project absolute reliability and mathematical certainty. The style is a refined **Corporate Modernism**—utilizing a rigorous grid, generous whitespace, and a high-contrast functional palette to reduce the cognitive load associated with complex legal data.

The aesthetic avoids decorative elements, focusing instead on "Information as UI." It employs a flat, card-based architecture with crisp borders to define workspaces, ensuring that users feel in control of high-stakes compliance workflows.

## Colors

The color strategy prioritizes semantic signaling over brand expression. 

- **Primary (Navy):** Used for structural navigation, primary actions, and headers to anchor the user's focus.
- **Semantic Palette:** Success (Emerald), Warning (Amber), and Error (Rose) are strictly reserved for status indicators, compliance thresholds, and validation feedback.
- **Neutrals:** A sophisticated range of cool grays provides the foundation for the "Card-on-Canvas" layout, using subtle shifts in background value to differentiate between global navigation and active workspaces.

## Typography

The typography system utilizes **Inter** for its exceptional legibility in data-heavy environments. 

- **Data Hierarchy:** Distinct weight variations distinguish between labels and user-generated data. 
- **Tabular Numerals:** For all date and passport-related strings, utilize `tnum` (tabular figures) to ensure vertical alignment in lists and tables.
- **Labels:** Use the `label-caps` style for section headers within cards to provide a clear secondary hierarchy without competing with primary page titles.

## Layout & Spacing

This design system employs a **Fluid-Responsive Grid** based on an 8px square-unit rhythm. 

- **Desktop:** A 12-column grid with 24px gutters. Content is typically housed in centered containers with a max-width of 1280px.
- **Mobile:** A 4-column grid with 16px gutters. Elements stack vertically, and horizontal padding is reduced to 16px to maximize data real estate.
- **Layout Model:** A "Sidebar + Top Bar" shell provides global context, while the main viewport uses a "Canvas" (Gray-50) populated by "Cards" (White).

## Elevation & Depth

To maintain a minimalist and professional profile, this design system eschews traditional shadows in favor of **Tonal Layering and Borders**.

- **Level 0 (Canvas):** The base background layer (#f8fafc).
- **Level 1 (Cards):** Pure white (#ffffff) surfaces with a 1px border (#e2e8f0). No shadow is used for static cards.
- **Level 2 (Overlays):** Modals and dropdowns utilize a very soft, high-diffusion shadow (0px 10px 15px -3px rgba(0, 0, 0, 0.05)) to suggest temporary presence above the workspace.
- **Interactive States:** On hover, card borders darken to #cbd5e1 to provide tactile feedback without shifting the layout.

## Shapes

The shape language is **Soft** and restrained. A consistent 4px (0.25rem) corner radius is applied to all interactive elements and input fields, providing a modern feel that remains orderly. 

- **Small Components:** Buttons, inputs, and chips use a 4px radius.
- **Large Components:** Main content cards use an 8px (0.5rem) radius to create a clear visual distinction between the container and the elements inside it.

## Components

- **Buttons:** Primary buttons use the Navy background with white text. Ghost buttons (border-only) are preferred for secondary actions like "Cancel" or "Export" to maintain low visual noise.
- **Cards:** The primary container. Every card must have a title and, where applicable, a "Status Badge" in the top-right corner.
- **Compliance Badges (Chips):** Small, high-contrast pills used to indicate visa status (e.g., "Valid," "Expiring," "Action Required"). Use the semantic palette (Green, Amber, Red).
- **Data Tables:** Row-based layouts with subtle 1px bottom borders. High-density padding is used to ensure maximum data visibility on mobile screens.
- **Input Fields:** Crisp 1px borders (#e2e8f0). Focus states must use a 2px Navy ring to ensure accessibility.
- **Progress Steppers:** Vertical steppers are recommended for multi-stage visa applications to optimize for mobile scrolling.