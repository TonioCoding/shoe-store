import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const WriteReviewDialog = (props) => {
  const open = props.open;
  const handleDialog = props.handleDialog;
  return (
    <Dialog open={open}>
      <DialogHeader>
        <button onClick={handleDialog}>Close</button>
      </DialogHeader>
      <DialogBody></DialogBody>
      <DialogFooter></DialogFooter>
    </Dialog>
  );
};
WriteReviewDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
};
export default WriteReviewDialog;
