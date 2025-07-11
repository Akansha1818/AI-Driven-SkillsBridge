## 📚 Project Overview – SkillsBridge
SkillsBridge is an innovative web platform built to connect learners and mentors in a seamless, modern, and secure environment.
Its primary goal is to bridge the skills gap by making it easier for learners to find experienced mentors, request guidance, and grow professionally.

Here’s what it does in detail:

## 🧑‍🎓 For Learners
- Sign in easily with Google authentication.

- Register as a learner and create your profile.

- Request skills you want to learn:

- Choose the skill (e.g., Web Development, AI, etc.).

- Describe your preferred learning mode (online, in-person).

- Specify your availability and details.

- Track request status:
    See if your request is pending, approved by a mentor, or completed.

## 🧑‍🏫 For Mentors
- Sign in with Google and register as a mentor.

- Get matched with learner requests based on skills.

- Review & approve requests you want to mentor.

- Help learners grow by sharing expertise, resources, and time.

## ⚙️ How it works technically
- Google Authentication ensures users can sign in securely without manual passwords.

- After login, users complete their registration by choosing their role: mentor or learner.

- All users and skill requests are stored in a MongoDB database, with clear schemas:

- Users have fields like name, email, role, skills, etc.

- Skill requests include learner ID, mentor ID, skill, description, status, and more.

- NextAuth manages sessions and keeps user data safe.

- Middleware protects admin and role-based pages, ensuring only authorized users can access them.

## ✨ Vision
SkillsBridge aims to become:
- A community-driven mentorship hub, not limited by location.

- A place where learners can find real, verified mentors.

- A platform that helps mentors give back and build their reputation.

- A bridge between curiosity and expertise.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
