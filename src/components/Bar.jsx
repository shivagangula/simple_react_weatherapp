import { AppBar, Toolbar, Typography } from "@material-ui/core";

import React from 'react'

function Bar() {
      return (
            <div>
                  <AppBar position="static" color="primary">
                        <Toolbar>
                              <Typography variant="h6">
                                    Weather Search Application
                              </Typography>
                        </Toolbar>
                  </AppBar>
            </div>
      )
}

export default Bar;
