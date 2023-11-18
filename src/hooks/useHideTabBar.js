// CustomHook.js
import { useEffect } from 'react';

const useHideTabBar = (navigation) => {
  useEffect(() => {
    const parentNavigation = navigation.getParent();

    if (parentNavigation) {
      parentNavigation.setOptions({
        tabBarStyle: {
          display: "none"
        }
      });
    }

    return () => {
      if (parentNavigation) {
        parentNavigation.setOptions({
          tabBarStyle: {
            display: "flex",
            padding: 10,
            height: 70
          }
        });
      }
    };
  }, [navigation]);
};

export default useHideTabBar;
