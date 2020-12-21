import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./style";

class Course extends Component {
  handleViewDetail = () => {
    this.props.history.push("/detail/" + this.props.item.maKhoaHoc);
  };

  render() {
    const { tenKhoaHoc, moTa, hinhAnh } = this.props.item;

    return (
      <Card>
        <CardActionArea>
          <CardMedia
            style={{ height: 150 }}
            image={hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {moTa.substr(0, 30) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={this.handleViewDetail}
            className={this.props.classes.btnDetail}
            size="small"
            variant="contained"
          >
            View detail
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Course));
