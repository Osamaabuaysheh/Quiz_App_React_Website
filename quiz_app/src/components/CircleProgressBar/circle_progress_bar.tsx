import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../components/CircleProgressBar/circle_progress_bar.css";
export default function CircleProgressBar() {
  return (
    <>
      <div className="progressBar" style={{ width: "70px" }}>
        <CircularProgressbar
          value={100}
          text={"10%"}
          styles={{
            text: { color: "white" },
          }}
        />
      </div>
    </>
  );
}
