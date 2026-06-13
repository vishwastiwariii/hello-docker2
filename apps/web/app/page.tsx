import { client } from "db/client"

export default async function Home() {

  const user = await client.user.findFirst()

  return (

    <div>
      user: {user?.username}
      password: {user?.password}
    </div>
  )
}


/// export const revalidate = 60   //revalidate every 60 seconds 
// or 
// export const dynamic = 'force-dynamic' - makes the page not static generated
