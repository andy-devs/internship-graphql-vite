import { GroupsOfDisciplinesPage } from 'pages/organization/groups-of-disciplines';
import { GroupOfDisciplinesCreatePage } from 'pages/organization/groups-of-disciplines/group-of-disciplines-create-page';
import { GroupOfDisciplinesEditPage } from 'pages/organization/groups-of-disciplines/group-of-disciplines-edit-page';
import { OrganizationUsersPage } from 'pages/organization/users';
import { OrganizationCreatePage } from 'pages/organizations/organization-create-page/organization-create-page';
import { OrganizationEditPage } from 'pages/organizations/organization-edit-page/organization-edit-page';
import { OrganizationsListPage } from 'pages/organizations/organizations-list/organizations-list';
import { PreviewUsersPage } from 'pages/preview-new-users/preview-new-users';
import { RolesPage } from 'pages/roles/roles';
import { SuborganizationUsersPage } from 'pages/suborganization/users';
import { SuborganizationsCreatePage } from 'pages/suborganizations/suborganizations-create/suborganizations-create';
import { SuborganizationEditPage } from 'pages/suborganizations/suborganizations-edit-page/suborganization-edit-page';
import { SuborganizationsListPage } from 'pages/suborganizations/suborganizations-list/suborganizations-list';
import { UsersPage } from 'pages/users/users';
import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';
import { GroupOfDisciplinesWithTabsLayout } from 'widgets/layouts/group-of-disciplines-with-tabs-layout/group-of-disciplines-with-tabs-layout';
import { OrganizationWithTabsLayout } from 'widgets/layouts/organization-with-tabs-layout/organization-with-tabs-layout';
import { SuborganizationWithTabsLayout } from 'widgets/layouts/suborganization-with-tabs-layout/suborganization-with-tabs-layout';

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.ORGANIZATIONS,
    element: <OrganizationsListPage />,
  },
  {
    path: ROUTES.ORGANIZATION_SUBORGANIZATIONS,
    element: <SuborganizationsListPage />,
  },
  {
    element: <OrganizationWithTabsLayout />,
    children: [
      {
        path: ROUTES.ORGANIZATION,
        element: <OrganizationUsersPage />,
      },
      {
        path: ROUTES.ORGANIZATION_GROUPS_OF_DISCIPLINES,
        element: <GroupsOfDisciplinesPage />,
      },
    ],
  },
  {
    element: <SuborganizationWithTabsLayout />,
    children: [
      {
        path: ROUTES.ORGANIZATION_SUBORGANIZATION,
        element: <SuborganizationUsersPage />,
      },
    ],
  },

  {
    path: ROUTES.ORGANIZATION_CREATE,
    element: <OrganizationCreatePage />,
  },
  {
    path: ROUTES.ORGANIZATION_EDIT,
    element: <OrganizationEditPage />,
  },
  {
    path: ROUTES.ORGANIZATION_GROUPS_OF_DISCIPLINES_CREATE,
    element: <GroupOfDisciplinesCreatePage />,
  },
  {
    path: ROUTES.ORGANIZATION_GROUPS_OF_DISCIPLINES_EDIT,
    element: <GroupOfDisciplinesEditPage />,
  },
  {
    element: <GroupOfDisciplinesWithTabsLayout />,
    children: [
      {
        path: ROUTES.ORGANIZATION_GROUP_OF_DISCIPLINES,
      },
    ],
  },
  {
    path: ROUTES.SUBORGANIZATIONS_EDIT,
    element: <SuborganizationEditPage />,
  },
  {
    path: ROUTES.ROLES,
    element: <RolesPage />,
  },
  {
    path: ROUTES.USERS,
    element: <UsersPage />,
  },
  {
    path: ROUTES.PREVIEW_NEW_USERS,
    element: <PreviewUsersPage />,
  },
  {
    path: ROUTES.SUBORGANIZATIONS_CREATE,
    element: <SuborganizationsCreatePage />,
  },
  {
    path: '/ithub-omsk',
    element: <SuborganizationsCreatePage />,
  },
  // TODO: remove later
  {
    path: '/ithub-omsk/all-suborganizations',
    element: <UsersPage />,
  },
  {
    path: '/ithub-omsk/schedule',
    element: <UsersPage />,
  },
  {
    path: '/ithub-omsk/study-periods',
    element: <UsersPage />,
  },
  {
    path: '/ithub-omsk/trajectory-map',
    element: <UsersPage />,
  },
  {
    path: '/ithub-omsk/reference-books',
    element: <UsersPage />,
  },
  {
    path: '/ithub-omsk/suborganizationInfo',
    element: <UsersPage />,
  },
  {
    path: '/ithub-omsk/suborganizationInfo/schedule',
    element: <UsersPage />,
  },
  {
    path: '/ithub-omsk/suborganizationInfo/developer',
    element: <UsersPage />,
  },
  {
    path: '/ithub-omsk/suborganizationInfo/design',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/all-suborganizations',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/schedule',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/study-periods',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/trajectory-map',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/reference-books',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/suborganizationInfo',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/suborganizationInfo/schedule',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/suborganizationInfo/developer',
    element: <UsersPage />,
  },
  {
    path: '/ithub-novosib/suborganizationInfo/design',
    element: <UsersPage />,
  },
];
