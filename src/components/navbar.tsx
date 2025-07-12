// src/components/Navbar.tsx

'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

export default function Navbar() {
  return (
    <NavigationMenu.Root className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm px-6 py-4">
      <NavigationMenu.List className="flex gap-6 items-center">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 font-medium">
              About
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/projects" className="text-gray-800 hover:text-blue-600 font-medium">
              Projects
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

