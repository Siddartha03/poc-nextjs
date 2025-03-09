Architecture and Implementation Details
Here's how this implementation works:

Server Components and API Calls:

All API calls happen server-side in either:

The page component (for initial data)
Server actions (for subsequent data fetching)

This ensures API calls are not visible in the browser network tab

Client Components:

Three client components as requested:

FamilyProcessSelection: Displays two dropdowns for family and process selection
HierarchyList: Displays the hierarchy tree using Ant Design's Tree component
HierarchyContent: Displays detailed content for a selected node

Data Flow:

Initial data (families and processes) is fetched server-side and passed to client components
When selections are made, server actions are called
React 19's useTransition hook is used for loading states

Security:

All API endpoints use POST method where appropriate with proper validation
No query parameters or client-side API calls are used
No state management libraries are used as requested

React 19 Features:

Uses latest React 19 hooks including useTransition for loading states
Uses the new React Server Components pattern

With this implementation, the user flow works as follows:

User selects a family from the first dropdown
User selects a process from the second dropdown
Upon process selection, a hierarchy tree is displayed
When the user clicks on a node in the tree, detailed content for that node is displayed

All API calls happen on the server-side, ensuring they won't appear in the browser's network tab, fulfilling your security requirement.
