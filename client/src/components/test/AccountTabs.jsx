import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { PropTypes } from "prop-types";
import { useState } from "react";

function AccountTabs(props) {
  const [activeTab, setActiveTab] = useState("orders");
  const setTabs = props.setTab;

  const data = [
    {
      label: "Orders",
      value: "orders",
    },
    {
      label: "Inbox",
      value: "inbox",
    },
    {
      label: "Favorites",
      value: "favorites",
    },
    {
      label: "Settings",
      value: "settings",
    },
    {
      label: "Interests",
      value: "interests",
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => {
              setActiveTab(value);
              setTabs(value);
            }}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}

AccountTabs.propTypes = {
  setTab: PropTypes.func,
};

export default AccountTabs;
