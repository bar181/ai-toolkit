interface TabNavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  tabs: Array<{ id: string; label: string }>;
}

const TabNavigation = ({ activeTab, onTabChange, tabs }: TabNavigationProps) => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-sm border-b-2 border-primary/20 shadow-md">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 min-w-[150px] px-6 py-5 font-semibold transition-all relative ${
              activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary rounded-t-full shadow-lg" />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
