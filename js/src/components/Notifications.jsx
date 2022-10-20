import NoWordNotification from './NoWordNotification';
import SuccessfulNotification from './SuccessfulNotification';
import UnsuccessfulNotification from './UnsuccessfulNotification';

export default function Notifications({ statusGame }) {
  console.log(statusGame);
  return (
    <div>
      {statusGame && <SuccessfulNotification />}
      {<UnsuccessfulNotification />}
      {<NoWordNotification />}
    </div>
  );
}
