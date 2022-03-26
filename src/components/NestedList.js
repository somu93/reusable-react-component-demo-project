import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


export default function NestedList(props) {
  const [open, setOpen] = React.useState(true);
  const label = props.item.label;
  const hasChildren = props.item.children && props.item.children.length > 0 ? true : false;
  const depth =  props.depth;

  const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4 * depth),
    },
    list:{
      paddingLeft: 16,
      paddingRight: 16
    }
  }));

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick} className={depth > 0? classes.nested : classes.list}>
        <ListItemIcon>
          <Icon>{props.item.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={label} />
       
        {
          hasChildren ?
           <React.Fragment>
             { open ? <ExpandLess /> : <ExpandMore /> }
           </React.Fragment>
           : null
        }
       
      </ListItem>
      { hasChildren
        ?
        <Collapse in={open} timeout="auto" unmountOnExit>
          
           {props.item.children.map((item, index) => (
            <NestedList key={index} item={item} depth={props.depth + 1}/>
          ))}
        </Collapse>:
        null
      }
    </React.Fragment>
  );
}
