import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Tag({ name, count }) {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          {name}
        </Typography>
        <Typography color="textSecondary">Posts: {count}</Typography>
      </CardContent>
    </Card>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default React.memo(Tag);
