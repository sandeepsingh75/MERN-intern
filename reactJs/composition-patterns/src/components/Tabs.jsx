function Tabs({ children }) {
  return <div>{children}</div>;
}

function Tab({ children }) {
  return <button>{children}</button>;
}

function TabPanel({ children }) {
  return <div>{children}</div>;
}

Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default Tabs;