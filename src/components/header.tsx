type HeadersProps = {
  meetings: number;
};

export default function Headers({ meetings }: HeadersProps) {
  let title: string;

  if (meetings > 1) {
    title = "Prossimi Appuntamenti";
  } else if (meetings === 1) {
    title = "Prossimo Appuntamento";
  } else {
    title = "Non hai appuntamenti";
  }

  return (
    <>
      <h1 className="d-flex justify-content-center pt-2">{title}</h1>
    </>
  );
}
