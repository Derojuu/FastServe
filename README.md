# FastServe Cybercafé Website

A modern, responsive two-page website for a school cybercafé with WhatsApp integration for service inquiries.

## Features

✨ **Modern Design**
- Professional color palette (Navy, Teal, Gold)
- Smooth animations with Framer Motion
- Mobile-first responsive design
- Conversion-focused UI

🚀 **Performance**
- Built with Next.js 16 for optimal performance
- Tailwind CSS v4 for efficient styling
- Optimized images and lazy loading
- Fast page transitions

📱 **Mobile Responsive**
- Perfect on phones, tablets, and desktops
- Touch-friendly navigation
- Optimized for all screen sizes

💬 **WhatsApp Integration**
- One-click WhatsApp contact for each service
- Prefilled messages with service details
- Easy configuration via environment variables

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. **Clone or download the project**
   \`\`\`bash
   git clone <repository-url>
   cd fastserve-cybercafe
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Configure WhatsApp**
   - Open `.env.local`
   - Replace `NEXT_PUBLIC_OWNER_PHONE` with your WhatsApp number in E.164 format
   - Example: `NEXT_PUBLIC_OWNER_PHONE=2348012345678`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## Project Structure

\`\`\`
fastserve-cybercafe/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── services/
│   │   └── page.tsx        # Services listing page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── navigation.tsx      # Header with navigation
│   ├── hero.tsx            # Hero section
│   ├── features.tsx        # Features section
│   ├── trust.tsx           # Trust/contact section
│   ├── cta.tsx             # Call-to-action section
│   ├── service-card.tsx    # Individual service card
│   └── footer.tsx          # Footer
├── lib/
│   └── services.ts         # Services data and types
├── .env.local              # Environment variables
├── package.json            # Dependencies
└── README.md               # This file
\`\`\`

## Configuration

### WhatsApp Phone Number

Edit `.env.local`:
\`\`\`env
NEXT_PUBLIC_OWNER_PHONE=2348012345678
\`\`\`

**Format:** E.164 international format (country code + number, no + sign)

### Services

Edit `lib/services.ts` to add, remove, or modify services:

\`\`\`typescript
{
  id: 'service-id',
  title: 'Service Name',
  description: 'Service description',
  priceRange: '₦X–₦Y',
  whatsappMessage: 'Prefilled WhatsApp message',
  icon: IconComponent,
}
\`\`\`

## Customization

### Colors

Edit `app/globals.css` to change the color scheme:

\`\`\`css
:root {
  --primary: #0b2545;        /* Deep Navy */
  --accent: #00bfa6;         /* Teal */
  --gold: #f6c85f;           /* Warm Gold */
}
\`\`\`

### Typography

Fonts are configured in `app/layout.tsx` using Google Fonts (Geist). To change:

1. Update the font import in `layout.tsx`
2. Update the `--font-sans` variable in `globals.css`

### Content

- **Landing Page:** Edit components in `components/` folder
- **Services:** Edit `lib/services.ts`
- **Contact Info:** Update in `components/trust.tsx` and `components/footer.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in the Vercel dashboard
5. Deploy!

### Deploy to Other Platforms

The project works with any Node.js hosting:
- Netlify
- Railway
- Render
- AWS Amplify

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is minified with Tailwind CSS v4
- JavaScript is code-split automatically
- Animations use GPU acceleration

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Framer Motion docs](https://www.framer.com/motion/)
3. Contact the development team

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
