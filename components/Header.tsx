/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  UserGroupIcon,
  CalendarIcon,
  MapIcon,
  LocationMarkerIcon,
  MenuIcon,
  InformationCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from '@mantine/core'

const menuItems = [
  {
    name: 'Aktualności',
    href: '/aktualnosci'
  },
  {
    name: 'Grafik',
    href: '/grafik'
  },
  {
    name: 'Obozy',
    href: '/obozy'
  },
  {
    name: 'Zapisy',
    href: '/zapisy'
  }
]
const aboutUs = [
  {
    name: 'O klubie',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/oklubie',
    icon: InformationCircleIcon,
  },
  {
    name: 'Kadra trenerska',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/kadra',
    icon: UserGroupIcon,
  },
  {
    name: 'Gdzie jesteśmy',
    description: "Connect with third-party tools that you're already using.",
    href: '/gdziejestesmy',
    icon: MapIcon,
  },
  {
    name: 'Dokumenty do pobrania',
    description: "Connect with third-party tools that you're already using.",
    href: '/dokumenty',
    icon: MapIcon,
  }
]
const aboutUsResponsive = [
    {
      name: 'Aktualności',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: 'aktualnosci',
      icon: InformationCircleIcon,
    },
    {
      name: 'Grafik',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: 'grafik',
      icon: CalendarIcon,
    },
    {
      name: 'Obozy',
      description: "Connect with third-party tools that you're already using.",
      href: 'obozy',
      icon: LocationMarkerIcon,
    },
    {
      name: 'Dokumenty do pobrania',
      description: "Dokumenty,formularze do wypelnienia",
      href: '/dokumenty',
      icon: MapIcon,
    }
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const { data: session } = useSession()
  return (
    <Popover className="relative bg-gbrown-500 mb-8 text-xl font-medium text-gray-500 z-10" onClick={(e: any) => e.detail == 4 && signIn()}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* <div className='w-20 h-40 overflow-hidden'>
          <Image src='/claw.jpg' alt='claw' layout='fill' className='mix-blend-color-burn' />
        </div> */}
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href='/'>
              <a>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="/logo.png"
                  width={80}
                  height={80}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {menuItems.map(({ href, name }) => (
              <Link key={name} href={href}>
                <span className="cursor-pointer text-gray-500 hover:text-gray-900">{name}</span>
              </Link>

            ))}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group rounded-md inline-flex items-center text-xl font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span>O nas</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {aboutUs.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                            >
                              <div className='-m-3 p-3 rounded-lg flex items-start cursor-pointer hover:bg-gray-50'>
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gteal-400" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/contact">
              <span className="cursor-pointer text-gray-500 hover:text-gray-900">Kontakt</span>
            </Link>
            {session && <Button variant='outline' onClick={() => signOut()}>Wyolguj</Button>}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="logo.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {aboutUsResponsive.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                    >
                      <div className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer'>
                        <item.icon className="flex-shrink-0 h-6 w-6 text-gteal-400" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    O klubie
                </Link>
                <Link href="/kadra" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Kadra trenerska
                </Link>
                <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Gdzie jesteśmy
                </Link>
                <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Dokumenty do pobrania
                </Link>
                <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Kontakt
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gteal-400 hover:bg-gteal-500"
                >
                  <span>Zapisy</span>
                </Link>
                {/* <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium hover:text-indigo-700"
                >
                  asdasd
                </a> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header;