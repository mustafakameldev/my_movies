import {Route} from '@react-navigation/native';

export interface TabIcon {
  focused: boolean;
  route: Route<any>;
  size: number;
  color: string;
}
