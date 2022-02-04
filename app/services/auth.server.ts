import { Authenticator } from 'remix-auth'
import { GitHubStrategy } from 'remix-auth-github'
import { sessionStorage } from '~/services/session.server'

type User = {
  id: string
  email?: string
}

export let authenticator = new Authenticator<User>(sessionStorage)

const clientID = process.env.GITHUB_CLIENT_ID
const clientSecret = process.env.GITHUB_CLIENT_SECRET
const callbackURL = process.env.GITHUB_CALLBACK_URL

if (
  typeof clientID !== 'string' ||
  typeof clientSecret !== 'string' ||
  typeof callbackURL !== 'string'
) {
  throw new Error('GitHub authentication is not configured')
}

authenticator.use(
  new GitHubStrategy(
    { clientID, clientSecret, callbackURL },
    async ({ profile }) => {
      return {
        id: '1234',
        email: profile.emails[0].value,
      }
    }
  )
)
