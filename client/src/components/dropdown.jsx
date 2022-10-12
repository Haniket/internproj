import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BlockIcon from '@mui/icons-material/Block';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Dropdown = () => {

    return(
        <>
<Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex text-sm font-medium text-gray-700 ">
                <MoreHorizIcon className="float-right align-middle" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute flex-auto right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item className="inline-block mb-3">
                    {/* <SaveAltIcon/> */}
                    {({ active }) => (
                      <a>
                        <SaveAltIcon className="inline-block mx-2"/>
                        Save
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="inline-block mb-3">
                    {({ active }) => (
                      <a>
                        <BookmarkIcon className="inline-block mx-2"/>
                        Follow
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="inline-block mb-3">
                    {({ active }) => (
                      <a>
                        <BlockIcon  className="inline-block mx-2 text-red-500"/>
                        Block
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        
        </>
    );
}


export default Dropdown

