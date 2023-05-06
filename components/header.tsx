import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './mobile-nav'
import { useRouter } from 'next/router'
import classNames from 'classnames'

const Header = () => {

  const router = useRouter();
  
  return (
        <div className="fixed w-full h-20 p-0 m-0 bg-black bg-opacity-60 flex sm:flex-col items-center border-2 border-primary">
          <div className="fixed h-20 p-1 w-full sm:w-[478px] bg-gradient-to-b from-black via-white via-[8px] to-white flex sm:flex-col justify-between items-center text-white text-xl">
          {/* Logo and title */}
          <div className="flex items-center">
          <Link href="/">
              <img
                src="/img/logo.svg"
                className="mr-4 hover:animate-wiggle"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
            <Link href="/" className="no-underline text-secondary font-bold text-4xl">
              onerdy.com
            </Link>         
          </div>

          {/* Full Nav Menu */}
          <div className="w-[480px] bg-primary h-8 px-2 items-center justify-between hidden sm:flex sm:mt-2 sm:rounded-3xl">
            <div className="flex items-center">
              <Link href="/"
              className={(
                classNames(
                  router.asPath === "/"
                  ? "px-2 font-bold text-white no-underline"
                  : "px-2 hover:underline hover:decoration-secondary text-white no-underline"
                )
              )}>
                home
              </Link>
              <Link href="/blog"
              className={(
                classNames(
                  router.asPath === "/blog"
                  ? "px-2 font-bold text-white no-underline"
                  : "px-2 hover:underline hover:decoration-secondary text-white no-underline"
                )
              )}>
                blog
              </Link>
              <Link href="/projects"
              className={(
                classNames(
                  router.asPath === "/projects"
                  ? "px-2 font-bold text-white no-underline"
                  : "px-2 hover:underline hover:decoration-secondary text-white no-underline"
                )
              )}>
                projects
              </Link>
            </div>

            <div className="flex items-center">
              {/* Github Icon */}
              <Link href="https://github.com/onerdy" className="px-2 hover:text-secondary" rel="noopener noreferrer" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>

              {/* LinkedIn Icon */}
              <Link href="https://linkedin.com/in/rodneymort" className="px-2 hover:text-secondary" rel="noopener noreferrer" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">          
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              </Link>
            </div>       
          </div>

          {/* Mobile Nav Menu */}
          <MobileNav/>
        </div>
        </div>
  )
}

export default Header