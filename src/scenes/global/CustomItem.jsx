import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function CustomItem(props) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        // Add your custom styles or overrides here
        // For example, you can set margin, padding, background color, etc.
        ...sx,
      }}
      {...other}
    />
  );
}

CustomItem.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default CustomItem;
