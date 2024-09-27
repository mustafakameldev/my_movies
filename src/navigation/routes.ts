import DetailsScreen from '@screens/DetailsScreen/DetailsScreen';
import SeeAllScreen from '@screens/SeeAll/SeeAllScreen';
import {HomeScreen} from '@screens/index';
import {ComponentType} from 'react';

export const appStackRoutes = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'SeeAll',
    component: SeeAllScreen,
  },
  {
    name: 'Details',
    component: DetailsScreen,
  },
];

type TabRoute = {
  name: string;
  component: ComponentType<any>;
};
export const homeTabRoutes: TabRoute[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'SeeAll',
    component: SeeAllScreen,
  },
];
