import React from 'react'

const PanelTabsMenu = ({activeTab, handleClick, tabs}) => {
    return (
        <div className="bg-white mt-4 rounded-2xl shadow-2xl p-4">
          <div className="font-semibold text-xl text-black flex flex-col space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleClick(tab.value)}
                className={`p-2 text-left rounded-lg cursor-pointer transition-colors ${
                  activeTab === tab.value
                    ? "bg-primary text-white"
                    : "hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      );
    
}

export default PanelTabsMenu