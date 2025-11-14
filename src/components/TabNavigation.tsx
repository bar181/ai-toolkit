interface TabNavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  tabs: Array<{ id: string; label: string }>;
}

const TabNavigation = ({ activeTab, onTabChange, tabs }: TabNavigationProps) => {
  return (
    <div className="sticky top-0 z-50 bg-secondary border-b-2 border-border shadow-sm">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 min-w-[150px] px-6 py-5 border-b-3 font-semibold transition-all ${
              activeTab === tab.id
                ? "border-primary bg-background text-primary"
                : "border-transparent text-muted-foreground hover:bg-accent hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
