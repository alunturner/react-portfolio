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
    <Paper id="contact" elevation={5}>
      <Card>
        <CardContent className="contact-container">
          <br />
          <Typography variant="h3" align="center">
            CONTACT
          </Typography>
          <br />
          <List disablePadding={true}>
            <a href="https://linkedin.com/in/alunturner">
              <ListItem>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText primary="LinkedIn"></ListItemText>
              </ListItem>
            </a>
            <a href="mailto:alun.turner@googlemail.com">
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Direct"></ListItemText>
              </ListItem>
            </a>
          </List>
          <br />
          <Typography variant="h3" align="center">
            CONNECT
          </Typography>
          <br />
          <List disablePadding={true}>
            <a href="https://www.flyingtocoding.com/">
              <ListItem>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Blog"></ListItemText>
              </ListItem>
            </a>
            <a href="https://github.com/ARTurnerGit">
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="GitHub"></ListItemText>
              </ListItem>
            </a>
          </List>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Contact;
