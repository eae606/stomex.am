import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './HamburgerMenu.css';


const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button
        type="text"
        icon={<MenuOutlined style={{ fontSize: '24px' }} />}
        onClick={showDrawer}
      />

      <Drawer
        title="stomex.am"
        placement="left"
        onClose={onClose}
        open={open}
        width={250}
        styles={{
          mask: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          body: {
            backgroundColor: '#fff',
          }
        }}
        className="hamburger-drawer"
      >
        <Menu
          mode="vertical"
          items={[
            { key: '1', label: 'Խնամքի միջոցներ' },
            { key: '2', label: 'Օրթոդոնտիա' },
            { key: '3', label: 'Թերապևտիկա' },
            { key: '4', label: 'Էնդոդոնտիա' },
            { key: '5', label: 'Օպերատիվա' },
            { key: '6', label: 'Օրթոպեդիա' },
            { key: '7', label: 'Վիրաբուժություն/Պարոդոնտոլոգիա' },
            { key: '8', label: 'Սպառվող նյութեր' },
            { key: '9', label: 'Լաբորատորիա' },
            { key: '10', label: 'Գրենական' }
          ]}
        />
      </Drawer>


    </div>
  );
};

export default HamburgerMenu;
