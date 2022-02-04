import { ActionFunction, Form } from 'remix'
import { authenticator } from '~/services/auth.server'

export let action: ActionFunction = ({ request }) => {
  return authenticator.logout(request, { redirectTo: '/login' })
}

export default function Dashboard() {
  return (
    <div>
      <h1>You logged in!</h1>
      <Form method="post">
        <button>logout</button>
      </Form>
    </div>
  )
}
