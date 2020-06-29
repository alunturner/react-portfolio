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
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import EmailIcon from "@material-ui/icons/Email";

function Contact() {
  return (
    <Paper
      id="contact"
      elevation={5}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10vh 0",
        backgroundColor: "#5d8aa8",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h3" align="center">
            CONTACT
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Direct"></ListItemText>
            </ListItem>
          </List>
          <Typography variant="h3" align="center">
            CONNECT
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Blog"></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="GitHub"></ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Contact;
