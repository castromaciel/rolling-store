import { FC, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { PageHeader, Button } from 'antd';


const Header : FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
  <PageHeader
    className="site-page-header-responsive"
    title="Rolling Store"
    extra={[ 
      <Button type="ghost" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>,       
    ]}
  >
  </PageHeader>
  );
}

export default Header;