import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const NavigationBreadcrumb = ({ 
  className = "",
  showHome = true,
  maxItems = 3 
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationMap = {
    '/portfolio-home-dashboard': { label: 'Home', icon: 'Home' },
    '/about-me-profile': { label: 'About Me', icon: 'User' },
    '/professional-experience-timeline': { label: 'Experience', icon: 'Briefcase' },
    '/skills-competencies-showcase': { label: 'Skills', icon: 'Award' },
    '/project-portfolio-gallery': { label: 'Projects', icon: 'FolderOpen' },
    '/contact-connect-hub': { label: 'Contact', icon: 'Mail' }
  };

  const currentPath = location?.pathname;
  const currentPage = navigationMap?.[currentPath];

  // Don't show breadcrumb on home page
  if (currentPath === '/portfolio-home-dashboard' || !currentPage) {
    return null;
  }

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleBack = () => {
    window.history?.back();
  };

  return (
    <nav 
      className={`flex items-center space-x-2 text-sm font-caption ${className}`}
      aria-label="Breadcrumb navigation"
    >
      {/* Back Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleBack}
        className="text-text-secondary hover:text-primary -ml-2"
        aria-label="Go back"
      >
        <Icon name="ArrowLeft" size={16} />
      </Button>
      {/* Home Link */}
      {showHome && (
        <>
          <button
            onClick={() => handleNavigation('/portfolio-home-dashboard')}
            className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-notebook focus:outline-none focus:ring-2 focus:ring-ring rounded px-2 py-1"
            aria-label="Go to home"
          >
            <Icon name="Home" size={14} />
            <span>Home</span>
          </button>
          
          <Icon name="ChevronRight" size={14} className="text-border" aria-hidden="true" />
        </>
      )}
      {/* Current Page */}
      <div className="flex items-center space-x-2">
        <Icon name={currentPage?.icon} size={14} className="text-primary" />
        <span className="text-primary font-medium" aria-current="page">
          {currentPage?.label}
        </span>
      </div>
    </nav>
  );
};

export default NavigationBreadcrumb;