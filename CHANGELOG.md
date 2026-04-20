# 📦 Changelog - MadeByJane Store

All notable changes to this project will be documented in this file.  
This project adheres to [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2025-11-05
### ✨ Added
- Complete **Product Detail Page** with enhanced information and tab navigation.
- Added sections for `Description`, `Specifications`, and `Care Instructions`.
- Implemented **Related Products Carousel** with smooth navigation and animation.
- Created responsive behavior:
  - 4 visible products on desktop.
  - 3 visible products on tablet.
  - 2 visible products on mobile.
- Added **category-based filtering** for related products and store redirection.
- Implemented **dynamic page title** and contextual filtering on navigation.
- Included **button state logic** depending on stock and quantity.
- Configured smooth scrolling on product change and tab switching.

### 🔄 Changed
- Improved mock data with fields for:
  - `fullDescription`
  - `features`
  - `measurements`
  - `careInstructions`
- Enhanced UI with professional layout, clean typography, and modern design consistency.
- Refined user experience on mobile and tablet devices.
- Adjusted related product transitions to scroll **one by one** instead of by group.

### 🐞 Fixed
- Fixed `getVisibleCount` initialization error in `ProductDetail.jsx`.
- Resolved issue where related products were cut off on mobile and tablet view.
- Corrected filtering logic so category redirection in store now activates the right filter button.
- Fixed initial scroll position when changing product or tab.

---

## [0.9.0] - 2025-10-20
### Added
- Initial **project setup** for React + Vite with TailwindCSS.
- Base pages: `Home`, `Store`, and `ProductDetail` (basic version).
- Global styles and responsive layout.
- Configured **folder structure** for `components`, `pages`, `context`, `hooks`, and `services`.

---

## [0.1.0] - 2025-10-10
### Added
- Initial repository setup: `frontend`, `backend`, and `database` modules.
- Basic mock data and placeholders for UI testing.
- Added `docker-compose.yml` and project-level `README.md`.

---

📘 **Development Notes**
- Future versions will include API integration with backend (`Spring Boot`) and database synchronization.
- Next planned release: **v1.1.0 — Backend integration & data persistence**.

---

🚀 **Upcoming Features**
- Backend Integration - API connectivity with Spring Boot backend
- Data Persistence - Database synchronization and real-time updates
- User Authentication - Login/register system with user profiles
- Admin Dashboard - Product management and inventory control
- Payment Gateway - Secure checkout and order processing
- Advanced Search - Smart filtering and search capabilities

---

🛠 **Technical Stack**
- **Framework:** React 18 + Vite  
- **Routing:** React Router DOM  
- **Styling:** Tailwind CSS + custom components  
- **State Management:** useState, useEffect  
- **Data:** Mock data JSON (placeholder for API integration)  
- **Build Tool:** Vite
- **Documentation:** CHANGELOG.md, Semantic Commits  
- **Version Control:** Git + Conventional Commits

---

### 📘 Notes
- All commits follow **Conventional Commits** naming.  
- Each version groups functional updates under:  
  `Added`, `Changed`, `Fixed`, `Removed`.
