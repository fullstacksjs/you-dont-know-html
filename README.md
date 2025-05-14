![banner](https://github.com/fullstacksjs/you-dont-know-html/blob/main/assets/banner-dark.png?raw=true#gh-dark-mode-only)
![banner](https://github.com/fullstacksjs/you-dont-know-html/blob/main/assets/banner-light.png?raw=true#gh-light-mode-only)

# You don't know HTML

Think you know HTML? [Take the test](https://youdontknowhtml.com)! This interactive quiz challenges your
understanding of HTML language.

## Contributing

### Prerequisites

- Node.js (version specified in package.json)
- pnpm (version specified in package.json)
- Docker

### Development

1. Clone the repository:
2. Install dependencies:
3. Start the Supabase server
   ```bash
   npm run supabase:start
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
5. Set variables for your local Supabase instance.
6. Start the development server:
   ```bash
   pnpm dev
   ```

## Making new changes

Contributions are welcome! Whether it's adding new questions, improving
explanations, or fixing bugs, please feel free to submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-question`)
3. Commit your changes (`git commit -m 'feat: add a new question'`)
4. Open a Pull Request

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Content
- [Supabase](https://supabase.com/) - Backend
