import React from 'react';
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const StyledPaper = withStyles((theme) => ({
    root: {
      padding: 8
    }
  }))(Paper);
  

const PaperWidget = ({ children, ...props }) => {
    return (
        <StyledPaper {...props}>
            {children}
        </StyledPaper>
    )
};

export {
    PaperWidget as CustomPaper
};
