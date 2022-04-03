import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET_ID as string,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET_ID,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            'https://6249618c20197bb462722888.mockapi.io/api/mock/login',
            {
              email: credentials?.email,
              password: credentials?.password,
            },
          );
          return { ...response?.data, image: response?.data?.avatar };
        } catch (err) {
          console.log(err);
          throw err;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, user }) {
      try {
        if (account?.provider === 'credentials') {
          if (typeof user?.access_token === 'string')
            account.id_token = user?.access_token;
          return true;
        } else return true;
      } catch (err) {
        throw err;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(options);
