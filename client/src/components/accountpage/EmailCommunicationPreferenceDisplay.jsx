import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const EmailCommunicationPreferenceDisplay = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const [sendEmails, setSendEmails] = useState(false);
  console.log(sendEmails);

  useEffect(() => {
    async function communicationPreferences() {
      try {
        const checkCommunicationPreferences = fetch(
          "/api/v1/users/retrieveUserProp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: userInfo._id,
              prop: "sendEmails",
            }),
          }
        );

        const res = (await checkCommunicationPreferences)
          .json()
          .then((data) => {
            console.log(data);
            setSendEmails(data);
          })
          .catch((err) => {
            throw new Error(err);
          });
      } catch (error) {
        toast.error(error);
      }
    }
    communicationPreferences();
  }, [sendEmails, userInfo]);
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
        <input type="checkbox" checked={sendEmails} disabled={sendEmails} />
        <Typography className="font-rt text-sm">
          Yes&#44; send me emails&#46;
        </Typography>
      </div>
    </div>
  );
};

export default EmailCommunicationPreferenceDisplay;
