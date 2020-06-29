import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Card,
  CardContent,
} from "@material-ui/core";

function Contact() {
  return (
    <Paper
      id="contact"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10vh 0",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h3">CONTACT</Typography>
          <List>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="LinkedIn"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Blog"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="GitHub"></ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Contact;
