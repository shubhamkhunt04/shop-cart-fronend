import React, { useRef } from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

// import { ROUTES } from '../../common/constant';
import './MobileNav.css';

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // const [selectedItem, setSelectedItem] = useState(
  //   window.location?.pathname || ROUTES.ALL
  // );

  // useEffect(() => {}, [selectedItem]);

  return (
    <div className='mobile-nav-container'>
      <Text as='h1'>ShopCary</Text>
      <Box ref={btnRef} size='sm' onClick={onOpen}>
        <GiHamburgerMenu size='27px' cursor='pointer' />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor='#F7F7F7'>
          <DrawerCloseButton />
          <DrawerHeader bgColor='#F7F7F7' textAlign='center'>
            Rate City
          </DrawerHeader>
          <DrawerBody p='1' textAlign='center' onClick={onClose}>
            {/* {Object.entries(ROUTES).map(([title, path]) => {
              return (
                <Box w='100%' p={1}>
                  <Link
                    className={`link-item ${
                      selectedItem === path && 'selected-link-item'
                    }`}
                    to={path}
                    onClick={() => setSelectedItem(path)}
                  >
                    {title.replace(/_/g, ' ')}
                  </Link>
                </Box>
              );
            })} */}
            Cart 7
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;
