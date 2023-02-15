// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

interface Props {
}

export default function LoadingAnimation (props: Props) {
  return (
    <div className={`flex justify-center items-center`}>
      <FontAwesomeIcon icon={faCircleNotch} className={"text-3xl animate-spin"}></FontAwesomeIcon>
    </div>
  );
}
