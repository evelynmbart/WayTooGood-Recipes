export function ExtraInfo({ extraInfo }) {
  return (
    <>
      <fieldset className="border">
        <p className="time">Prep: {extraInfo.prep}</p>
        <p className="time">Total: {extraInfo.total}</p>
        <p className="time">Calories {extraInfo.calories}</p>
      </fieldset>
    </>
  );
}
