import './rootLayout.css'
import { Link, Outlet} from "react-router-dom"
import { ClerkProvider } from "@clerk/clerk-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" 
    appearance={{
      layout: {
        unsafe_disableDevelopmentModeWarnings: true,
      },
    }} >
      <QueryClientProvider client={queryClient}>
    <div className='rootLayout'>
        <header>
          <Link to="/" className="logo">
            <img src="/catlogo.png" alt=""/>
            <span>FiqGPT</span>
          
          </Link>
          <div className="user">
          {/*<SignedOut>
        <SignInButton />
      </SignedOut>*/}
      <SignedIn>
        <UserButton />
      </SignedIn>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
    </div>
    </QueryClientProvider>
    </ClerkProvider>
  )
}

export default RootLayout