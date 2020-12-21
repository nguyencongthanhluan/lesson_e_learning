const styles = (theme) => {
  return {
    btnDetail: {
      marginTop: theme.spacing(3.5),
      padding: theme.spacing(2, 3),
      backgroundColor: theme.palette.background.grey.main,
      "& span": {
        fontSize: 16,
      },
      "&:hover": {
        backgroundColor: "green",
      },

      [theme.breakpoints.up("sm")]: {
        backgroundColor: "yellow",
      },

      [theme.breakpoints.down("sm")]: {
        "& span": {
          fontSize: 50,
        },
      },
    },
  };
};

export default styles;
