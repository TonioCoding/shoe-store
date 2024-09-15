import { Typography } from "@material-tailwind/react";

const EmailCommunicationPreferenceDisplay = () => {
  return (
    <div className="flex flex-col w-fit gap-y-5">
      <Typography className="font-lt" variant="h5">
        Communication Preferences
      </Typography>
      <Typography>General Communication</Typography>
      <Typography className="font-rt text-sm">
        Get updates on products&#44; offers&#44; and your member benefits&#46;
      </Typography>
      <div className="flex items-center gap-x-3">
        <input type="checkbox" />
        <Typography className="font-rt text-sm">
          Yes&#44; send me emails&#46;
        </Typography>
      </div>
    </div>
  );
};

export default EmailCommunicationPreferenceDisplay;
