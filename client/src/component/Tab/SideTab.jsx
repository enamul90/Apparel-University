
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';



const SidebarMenu = ({tabs, path}) => {
  const { tab } = useParams();
  const navigate = useNavigate();

  // Convert to URL-friendly slug
const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

// Convert slug back to readable tab name
const unslugify = (slug) =>
  tabs.find((tab) => slugify(tab) === slug) || tabs[0];

  // Active tab based on URL
  const activeTab = unslugify(tab);

  // Update URL when tab is clicked
  const handleTabClick = (tabName) => {
    const slug = slugify(tabName);
    navigate(`/${path}/${slug}`);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className='py-3 border border-[#E9E9E9] bg-[#F3F7F9] text-xl font-medium text-center text-[#101828] rounded-[4px]'>
        Categories
      </h2>

      <div className='py-3 bg-[#F3F7F9] mt-1 rounded-[4px] border border-[#E9E9E9]'>
        <ul>
          {tabs.map((tabItem) => (
            <li
              key={tabItem}
              className={`px-4 py-3 cursor-pointer transition-colors text-lg ${
                activeTab === tabItem
                  ? 'text-[#F7941D] font-medium'
                  : 'text-[#101828] hover:text-[#F7941D]'
              }`}
              onClick={() => handleTabClick(tabItem)}
            >
              {tabItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
