//@ts-nocheck

import React from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';
import { Box } from '@mui/system';
import { Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';



export const tabsStyles = ({ palette, breakpoints }: Theme) => createStyles({
   root: {
      backgroundColor: palette.type === 'light' ? '#eee' : palette.divider,
      borderRadius: 10,
      minHeight: 44
   },
   flexContainer: {
      display: 'inline-flex',
      position: 'relative',
      zIndex: 1
   },
   scroller: {
      [breakpoints.up('md')]: {
         padding: '0 8px',
      }
   },
   indicator: {
      top: 3,
      bottom: 3,
      right: 3,
      height: 'auto',
      background: 'none',
      '&:after': {
         content: '""',
         display: 'block',
         position: 'absolute',
         top: 0,
         left: 4,
         right: 4,
         bottom: 0,
         borderRadius: 8,
         backgroundColor: palette.type === 'light' ? '#fff' : palette.action.selected,
         boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
      }
   }
});
export const tabItemStyles = ({ palette, breakpoints }: Theme) => createStyles({
   root: {
      '&:hover': {
         opacity: 1
      },
      minHeight: 44,
      minWidth: 96,
      [breakpoints.up('md')]: {
         minWidth: 120
      }
   },
   wrapper: {
      // zIndex: 2,
      marginTop: spacing(0.5),
      color: palette.text.primary,
      textTransform: 'initial'
   }
});


interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

interface IDataTabsAll {
   color: string,
   allCiurses: React.Element,
   freeCouses?: React.Element,
   bgColor: string,
   offline?: React.Element
}




function DataTabsAll({ color, allCiurses, freeCouses, bgColor, offline }: IDataTabsAll) {
   const [value, setValue] = React.useState(0);
   const tabsStyles = appleTabsStylesHook.useTabs();
   const tabItemStyles = appleTabsStylesHook.useTabItem();
   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };


   return (
      <div>
         <Tabs value={value}
            classes={tabsStyles}
            onChange={handleChange}
            style={{ backgroundColor: bgColor }}
         >
            <Tab classes={tabItemStyles} disableRipple label={'Все'} />
            <Tab classes={tabItemStyles} disableRipple label={'Бесплатные'} />
            <Tab classes={tabItemStyles} disableRipple label={'Офлайн'} />
         </Tabs>
         <TabPanel value={value} index={0}>
            {allCiurses}
         </TabPanel>
         <TabPanel value={value} index={1}>
            {freeCouses}
         </TabPanel>
         <TabPanel value={value} index={2}>
            {offline}
         </TabPanel>


      </div>
   );
}

export default DataTabsAll;