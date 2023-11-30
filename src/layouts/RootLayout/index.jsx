import { useEffect, useState } from "react";
import { Breadcrumb, Button, Layout, Menu } from "antd";
const { Content, Header, Sider } = Layout;
import { IoHome } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { FaSimCard } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import './styles/main.scss';

import PropTypes from "prop-types";

import styled from "@emotion/styled";
import LogoSample from "@assets/logosample.svg";

export default function RootLayout(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  const setCurrentMenu = (e) => {
    navigate(e.key);
  };

  const CustomMenu = styled(Menu)`
    && .ant-menu-item-selected {
      background-color: #fff;
      color: #000000 !important;
    }

    && .ant-menu-item {
      color: #fff;
    }

    && .ant-menu-item:not(.ant-menu-item-selected):hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
    }
  `;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        style={{ backgroundColor: "#2C3E50" }}
        collapsible
        collapsed={collapsed}
        breakpoint={"lg"}
        className="sider-left"
      >
        <div className="demo-logo" style={{ textAlign: "center", margin: collapsed ? '10px' : '25px' }}>
          <span>
            <img
              src={LogoSample}
              alt="The Name"
              width={'100%'}
              height={55}
            />
          </span>
        </div>
        <CustomMenu
          style={{ backgroundColor: "#2C3E50" }}
          mode="inline"
          onClick={setCurrentMenu}
          selectedKeys={[current]}
          items={[
            {
              label: "Home",
              icon: <IoHome />,
              key: "/",
            },
            {
              label: "Groups",
              icon: <HiMiniUserGroup />,
              key: "/group",
            },
            {
              label: "Employees",
              icon: <FaUserTie />,
              key: "/employee",
            },
            {
              label: "Customer",
              icon: <FaUser />,
              key: "/customer",
            },
            {
              label: "Subscription",
              icon: <FaIdCard />,
              key: "/subscription",
            },
            {
              label: "Cellphone Plans",
              icon: <FaSimCard />,
              key: "/cellphone_plan",
            },
            {
              label: "Role",
              icon: <FaUserGear />,
              key: "/role",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: "0 16px", overflow: "initial"}}>
          <Breadcrumb
            items={[
              {
                title:
                  `${current.charAt(1).toUpperCase()}` +
                  `${current.substring(2, current.length)}`,
              },
            ]}
            style={{ margin: "16px 0" }}
          />
          <div style={{ padding: 24, background: "#fff", minHeight: '85vh' }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
